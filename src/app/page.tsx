export default function Home() {
    return (
        <div className="min-h-screen w-full bg-zinc-950 text-white flex items-center justify-center">
            <div className="container mx-auto px-4 flex-col lg:flex-row">
                <div>
                    <img src="/mbwhite.svg" className="max-w-xl" />
                    <p className="mt-2 font-nunito font-regular text-lg">
                        hi there!!! i'm just your average full-stack developer
                        (and also an aspiring doctor) who likes to build and
                        explore super duper cool things
                    </p>
                    {/*<p className="italic font-outfit font-medium text-xs opacity-20">
                        (your dad looks like a green television salamander)
                    </p>*/}
                    <div className="divider my-0.5"></div>
                    <div className="text-blue-500 font-nunito gap-x-5 flex">
                        <a href="https://google.com/">contact info</a>
                        <a href="http://paypal.me/notmonkeybusiness">
                            give me money
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
