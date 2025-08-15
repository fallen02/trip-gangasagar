import { Container } from "../Container";
import One from "@/app/assets/one.png";
import Two from "@/app/assets/two.png";
import Three from "@/app/assets/three.png";
const processes = [
  {
    anno: "Step 1",
    title: "View and Select  Services",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, animi provident mollitia.",
    img: One,
  },
  {
    anno: "Step 2",
    title: "Call Us & Get all Details",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, animi provident mollitia.",
    img: Two,
  },
  {
    anno: "Step 3",
    title: "Get Confirmation & Enjoy",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, animi provident mollitia.",
    img: Three,
  },
];

export function Process() {
  return (
    <Container className="py-20 flex flex-col gap-10">
      <div className="flex flex-col gap-1 justify-center items-center">
        <p className="text-sm lg:text-base uppercase  text-orange-700">
          Step By Step Process
        </p>
        <h1 className="text-2xl text-center lg:text-4xl font-medium text-heading">
          How To Book an Epic Adventure to Gangasagar?
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row w-full justify-center items-center gap-5 lg:gap-20">
        {processes.map((process, index) => (
          <div
            className="relative flex flex-row lg:flex-col items-center py-3 px-1.5 lg:py-15 lg:px-10 justify-center gap-3 bg-orange-50 shadow rounded-xl"
            key={index}
          >
            <p className="absolute top-1/12  left-1 lg:left-5 bg-orange-600 px-2.5 lg:px-3.5 py-0.5 lg:py-1.5 text-sm text-white font-semibold rounded-2xl">{process.anno}</p>
            <img src={process.img} alt="" className="size-30 lg:size-54" />
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-base lg:text-xl font-medium  text-heading mt-2 mb-3">
                {process.title}
              </h1>
              <p className="text-xs lg:text-sm text-desc text-start lg:text-center font-light">{process.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
