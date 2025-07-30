import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faExclamation } from "@fortawesome/free-solid-svg-icons/faExclamation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { SiGithub, SiX, SiReact } from "@icons-pack/react-simple-icons";

export default function Contact() {
  return (
    <div className="min-h-screen w-full bg-zinc-950 text-white flex items-center justify-center">
      <div className="container mx-auto px-16 flex-col lg:flex-row">
        <div>
          <img src="/mbwhite.svg" className="max-w-xl" />
          <h2 className="mt-2 font-nunito font-bold text-lg">
            Contact Information:
          </h2>
          <div className="h-4 flex items-center justify-center min-h-4">
            <FontAwesomeIcon icon={faEnvelope} size="xs"/>
            <p className="font-nunito font-regular text-lg">
              oohoohahah@monkeybusiness.dev
            </p>
            
          </div>
          {/*<p className="italic font-outfit font-medium text-xs opacity-20">
                        (your dad looks like a green television salamander)
                    </p>*/}
          <div className="divider my-0.5"></div>
          <div className="text-blue-500 font-nunito gap-x-1 flex items-center h-8">
            <div className="gap-x-1 flex mr-1.5">
              <a href="https://github.com/TomerJ">
                <div className="flex items-center justify-center rounded-xs h-5 w-5 bg-white">
                  <SiGithub color="#000000" size={24} className="h-4" />
                </div>
              </a>
              <a href="https://google.com/">
                <div className="flex items-center justify-center rounded-xs h-5 w-5 bg-white">
                  <SiX color="#000000" size={24} className="h-4" />
                </div>
              </a>
            </div>

            <div className="divider divider-horizontal mx-0 my-0"></div>

            <div className="gap-x-5 flex">
              <a href="https://google.com/">contact info</a>
              <a href="http://paypal.me/notmonkeybusiness">give me money</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
