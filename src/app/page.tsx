import { SiGithub, SiX } from "@icons-pack/react-simple-icons";

export default function Home() {
    return (
        <div className="min-h-screen w-full bg-zinc-950 text-white flex items-center justify-center">
            <div className="container mx-auto px-16 flex-col lg:flex-row">
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
                    <div className="text-blue-500 font-nunito gap-x-1 flex items-center h-8">
                        <div className="gap-x-1 flex mr-1.5">
                            <a href="https://github.com/TomerJ">
                                <div className="flex items-center justify-center rounded-xs h-5 w-5 bg-white">
                                    <SiGithub
                                        color="#000000"
                                        size={24}
                                        className="h-4"
                                    />
                                </div>
                            </a>
                            <a href="https://google.com/">
                                <div className="flex items-center justify-center rounded-xs h-5 w-5 bg-white">
                                    <SiX
                                        color="#000000"
                                        size={24}
                                        className="h-4"
                                    />
                                </div>
                            </a>
                        </div>

                        <div className="divider divider-horizontal mx-0 my-0"></div>

                        <div className="gap-x-5 flex">
                            <a href="/contact">contact me</a>
                            <a href="http://paypal.me/notmonkeybusiness">
                                give me money
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
