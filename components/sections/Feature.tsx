import { Container } from "../Container";
import FeatureImg from "@/app/assets/feature.webp";

const features = ["24-hour support", "No hidden fees", "Booking flexibility"];

export function Feature() {
  return (
    <Container className="py-10 w-full flex flex-col lg:flex-row">
      <div className="w-full lg:w-2/5 h-full p-5 lg:p-10  flex flex-col gap-5 lg:gap-10">
        <div className="flex flex-col mt-1 lg:mt-10 gap-2.5 lg:gap-5">
          <p className="text-sm lg:text-base uppercase  text-orange-700">
            About Us
          </p>
          <h1 className="text-3xl lg:text-4xl  font-medium tracking-tight text-heading ">
            Bring you ultimate travel experience
          </h1>
          <p className="text-base lg:text-lg text-desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            animi provident mollitia blanditiis dignissimos quam ad fuga
            repellat obcaecati atque placeat alias est quia amet quasi porro ea
            ratione odio..
          </p>
        </div>
        <div className="flex flex-col gap-0.5 lg:gap-2 ">
          {features.map((feature, index) => (
            <div className="flex items-center gap-3" key={index}>
              <LinkSign />
              <p className="text-base lg:text-xl text-gray-700">{feature}</p>
            </div>
          ))}
        </div>
        <a
          href="#"
          className="px-3 lg:px-5 py-1.5 lg:py-2.5 bg-orange-600 w-fit rounded-full text-base lg:text-lg font-medium text-white border-2 border-orange-800/50"
        >
          Learn More
        </a>
      </div>
      <div className="w-full lg:w-3/5 my-5 lg:my-15  relative ">
        <div className="absolute bottom-0 bg-white pt-3 pr-3 rounded-tr-3xl">
          <div className="relative bg-orange-500/50 py-5 lg:py-10 px-3 lg:px-5 rounded-xl flex flex-col justify-center items-center">
            <p className="text-2xl lg:text-4xl font-bold text-heading">5+</p>
            <p className="text-sm lg:text-lg text-gray-700">
              Years Of Experience
            </p>
          </div>
        </div>
        <div className="absolute right-0 bg-white pl-3 pb-3 rounded-bl-3xl">
          <div className="relative bg-lime-500/50 py-5 lg:py-10 px-3 lg:px-5 rounded-xl flex flex-col justify-center items-center">
            <p className="text-2xl lg:text-4xl font-bold text-heading">5+</p>
            <p className="text-sm lg:text-lg text-gray-700">
              Years Of Experience
            </p>
          </div>
        </div>
        <img
          src="/img/feature.webp"
          alt=""
          className="h-full w-full  object-cover rounded-xl"
        />
        {/* <div 
        className="bg-[url(/img/feature.webp)] h-full w-full bg-cover bg-no-repeat " 
        /> */}
      </div>
    </Container>
  );
}

const LinkSign = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    className="stroke-orange-700 size-5 lg:size-6"
  >
    <path
      d="m7.48 18.35 3.1 2.4c.4.4 1.3.6 1.9.6h3.8c1.2 0 2.5-.9 2.8-2.1l2.4-7.3c.5-1.4-.4-2.6-1.9-2.6h-4c-.6 0-1.1-.5-1-1.2l.5-3.2c.2-.9-.4-1.9-1.3-2.2-.8-.3-1.8.1-2.2.7l-4.1 6.1"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    ></path>
    <path
      d="M2.38 18.35v-9.8c0-1.4.6-1.9 2-1.9h1c1.4 0 2 .5 2 1.9v9.8c0 1.4-.6 1.9-2 1.9h-1c-1.4 0-2-.5-2-1.9Z"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
);
