import { Mail, MessageCircleMore, Phone } from "lucide-react";
import { Container } from "../Container";
import { DualIcon } from "../DualIcon";
import { bookLink, mailLink, whatsappLink } from "@/constant/navmenu";

const helps = [
  {
    icon: MessageCircleMore,
    title: "Chat on Whastapp",
    desc: "Connect with us instantly through WhatsApp for quick and convenient communication. Whether you have questions or need assistance, we're just a message away!",
    btnTxt: 'Chat Now',
    href: whatsappLink
  },
  {
    icon: Mail,
    title: "Mail us Anytime",
    desc: "Feel free to email us anytime with your inquiries or feedback. We're always here to listen and respond promptly to ensure your needs are met.",
    btnTxt: 'Drop a Mail',
    href: mailLink
  },
  {
    icon: Phone,
    title: "Ring a Phone",
    desc: "Give us a call anytime for immediate assistance or to discuss your needs. Our friendly team is ready to help you with whatever you require!",
    btnTxt: 'Call Now',
    href: bookLink
  },
];

export function NeedHelp() {
  return (
    <Container className="py-10 lg:py-20 flex flex-col items-center gap-0 lg:gap-1">
      <h1 className="text-3xl lg:text-5xl font-catamaran font-medium text-heading">Need Help?</h1>
      <p className="text-base lg:text-lg text-desc">We are here to help</p>
      <div className="w-full flex flex-col lg:flex-row gap-5 mt-5">
        {helps.map((help, index) => (
          <div className="w-full lg:w-1/3 px-10 py-5 flex flex-col gap-5 border rounded-2xl shadow border-gray-400" key={index}>
            <DualIcon Icon={help.icon} />
            <div className="flex flex-col gap-2">
              <h1 className="text-xl lg:text-2xl  font-medium text-heading">
                {help.title}
              </h1>
              <p className="text-sm lg:text-lg text-desc font-thin">{help.desc}</p>
              <a href={help.href} className="text-lg underline underline-offset-5 text-orange-600">{help.btnTxt}</a>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
