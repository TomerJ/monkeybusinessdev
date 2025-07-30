"use client";

import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { useActionState } from "react";
import Turnstile, { useTurnstile } from "react-turnstile";
import { ContactForm } from "./form";

export default function Contact() {
    const [actionState, formAction] = useActionState(ContactForm, null);
    const turnstile = useTurnstile();
    return (
        <div className="min-h-screen w-full bg-zinc-950 text-white flex items-center justify-center">
            <div className="container mx-auto px-16 flex-col lg:flex-row">
                <div>
                    <img src="/mbwhite.svg" className="max-w-xl" />
                    <div className="my-4 mb-">
                        <p className="italic font-outfit font-medium text-xs opacity-20 mb-0">
                            send me your questions, concerns, inquiries,
                            feedback, suggestions, comments, issues, doubts,
                            observations, requests, clarifications, thoughts,
                            complaints, propositions, ideas, solutions,
                            reflections, reactions, insights, queries,
                            explanations, recommendations, notices, statements ,
                            considerations, assumptions, critiques, revelations,
                            assessments, evaluations, confusions,
                            interpretations, speculations, reviews,
                            announcements, confirmations, plans, conclusions,
                            challenges, hypotheses, predictions, intentions,
                            analyses, discussions, discoveries, reports,
                            judgments, testimonials, remarks, corrections,
                            responses, validations, perspectives, criticisms,
                            explorations, proposals, summaries, affirmations,
                            elaborations, outlines, approvals, expansions,
                            revisions, directions, implications, actions and/or
                            reflections
                        </p>
                    </div>
                    <div className="divider my-0 "></div>
                    <div className="mb-6 mt-2">
                        {" "}
                        <div className="h-4 flex items-center gap-x-1 mb-5 min-h-4">
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                className=" h-6"
                            />
                            <p className="font-nunito font-regular">
                                Email me: <b>oohoohahah@monkeybusiness.dev</b>
                            </p>
                        </div>
                    </div>
                    <div className="">
                        <h2 className="font-nunito font-bold text-lg">
                            Contact Me
                        </h2>
                        {actionState && (
                            <div className="my-2 flex flex-col gap-y-2">
                                {actionState && actionState.error && (
                                    <div
                                        role="alert"
                                        className="alert alert-error py-3 alert-soft my-2 rounded-sm"
                                    >
                                        <FontAwesomeIcon icon={faAsterisk} />{" "}
                                        <span className="text-xs">
                                            {actionState.error}
                                        </span>
                                    </div>
                                )}
                                {actionState && !actionState.error && (
                                    <div
                                        role="alert"
                                        className="alert alert-success py-3 alert-soft my-2 rounded-sm"
                                    >
                                        <FontAwesomeIcon icon={faAsterisk} />{" "}
                                        <span className="text-xs">
                                            Thanks for getting in touch! I'll
                                            try getting back to you whenever I
                                            can :)
                                        </span>
                                    </div>
                                )}
                            </div>
                        )}

                        <form action={formAction}>
                            <div className="gap-y-1 flex flex-col w-full">
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend">
                                        Your Email
                                    </legend>
                                    <input
                                        type="text"
                                        name="email"
                                        className="input w-full focus:outline-none focus:border-none focus:ring-1 transition-all focus:ring-sky-400"
                                        placeholder="Type here"
                                        defaultValue={
                                            actionState?.error
                                                ? ((actionState?.data?.get(
                                                      "email"
                                                  ) || "") as string)
                                                : undefined
                                        }
                                    />
                                </fieldset>
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend">
                                        Subject
                                    </legend>
                                    <input
                                        type="text"
                                        name="subject"
                                        className="input w-full focus:outline-none focus:border-none focus:ring-1 transition-all focus:ring-sky-400"
                                        placeholder="Type here"
                                        defaultValue={
                                            actionState?.error
                                                ? ((actionState?.data?.get(
                                                      "subject"
                                                  ) || "") as string)
                                                : undefined
                                        }
                                    />
                                </fieldset>
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend">
                                        Body
                                    </legend>
                                    <textarea
                                        name="body"
                                        className="textarea w-full focus:outline-none focus:border-none focus:ring-1 transition-all focus:ring-sky-400"
                                        placeholder="Type here"
                                        defaultValue={
                                            actionState?.error
                                                ? ((actionState?.data?.get(
                                                      "body"
                                                  ) || "") as string)
                                                : undefined
                                        }
                                    />
                                </fieldset>
                                <Turnstile sitekey="0x4AAAAAABnO7LSnfOIRYTlS" />
                                <button className="btn btn-info rounded-sm mt-5">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
