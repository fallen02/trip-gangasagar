import { GoogleMaplink } from "@/constant/navmenu";
import { Mail, Phone } from "lucide-react";

export function ContactInfo(){
    return(
        <div className=" w-full px-2 pb-5 lg:w-2/4 flex flex-col gap-10 lg:gap-15">
          <div className="flex flex-col gap-2 px-10 py-5 bg-gray-50 rounded-xl">
            <h1 className="text-xl lg:text-3xl font-catamaran font-medium text-heading">
              Get in touch
            </h1>
            <p className="text-sm lg:text-base text-desc font-thin">
              We love to chat about your travel plans and happy to talk for any
              doubt.
            </p>
            <div className="flex flex-col gap-2 lg:gap-3 pt-5">
              <div className="flex gap-2 items-center">
                <Phone className="stroke-1 stroke-orange-700" />
                <a
                  href="tel:+916297368883"
                  className="text-sm lg:text-base font-medium text-gray-600"
                >
                  +91 6297368883
                </a>
              </div>
              <div className="flex gap-2 items-center">
                <Mail className="stroke-1 stroke-orange-700" />
                <a
                  href="mailto:gangasagartravelsandhotel@gmail.com"
                  className="text-sm lg:text-base font-medium text-gray-600"
                >
                  gangasagartravelsandhotel@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="px-10 py-5 bg-gray-50 rounded-xl flex flex-col gap-5 lg:gap-10">
            <p className="text-xl lg:text-3xl font-catamaran font-medium text-heading">
              Opening Hours
            </p>
            <div className="flex flex-col gap-1">
              <p className="text-lg text-gray-600">January - December</p>
              <p className="text-lg text-gray-600">7 Days a week: </p>
              <p className="text-lg text-gray-600">6 AM - 10 PM IST</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-lg text-orange-500">During Gangasagar Mela</p>
              <p className="text-lg text-orange-500">7 Days a week: </p>
              <p className="text-lg text-orange-500">24x7 available</p>
            </div>
          </div>
          <div className="flex justify-center items-center lg:justify-start">
            <a
            href={GoogleMaplink}
            className="w-fit bg-white border text-orange-500 border-orange-500 py-5 px-10 text-lg font-medium rounded-full"
          >
            Find Us on Google Map
          </a>
          </div>
        </div>
    )
}