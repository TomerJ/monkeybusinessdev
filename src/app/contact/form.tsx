"use server";
import { PrismaClient } from "@prisma/client";
import axios from "axios";
import { headers } from "next/headers";
const prisma = new PrismaClient();

export async function ContactForm(_: any, data: FormData) {
    let email = data.get("email") as string | null;
    let subject = data.get("subject") as string | null;
    let body = data.get("body") as string | null;

    const token = data.get("cf-turnstile-response") as string | null;
    const headersList = await headers();
    const ip =
        headersList.get("CF-Connecting-IP") ||
        headersList.get("X-Forwarded-For");
    if (!email || !subject || !body) {
        return {
            error: "One or more fields are missing",
            data,
        };
    }

    const emailRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z]{2,})+$/;

    if (email.length > 254 || !emailRegex.test(email)) {
        return {
            error: "Invalid email address",
            data,
        };
    }

    if (subject.length > 100) {
        return {
            error: "Subject cannot exceed 100 characters.",
            data,
        };
    }

    if (body.length > 4096) {
        return {
            error: "Body cannot exceed 4096 characters.",
            data,
        };
    }
    try {
        const result = await axios.post(
            "https://challenges.cloudflare.com/turnstile/v0/siteverify",
            {
                secret: process.env.TURNSTILE_KEY,
                response: token,
                remoteip: ip,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        if (!result.data.success) {
            return {
                error: "Invalid CAPTCHA",
                data,
            };
        }
    } catch {
        return {
            error: "Invalid CAPTCHA",
            data,
        };
    }

    await prisma.contact_form.create({
        data: {
            email,
            subject,
            content: body,
        },
    });

    return {
        data,
    };
}
