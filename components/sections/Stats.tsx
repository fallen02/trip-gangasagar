import { Container } from "../Container";

const stats = [
  {
    number: "5000+",
    text: "Happy Travelers",
  },
  {
    number: "3000+",
    text: "Tours and Activities",
  },
  {
    number: "5+",
    text: "Places to Visit",
  },
  {
    number: "50+",
    text: "Local Partners",
  },
];

export function Stats() {
  return (
    <Container className="py-15 flex flex-col justify-center items-center gap-3 bg-[url('/img/map.svg')] bg-no-repeat bg-center mt-5">
      <h1 className="text-center text-2xl lg:text-3xl w-full lg:w-[600px] font-medium text-heading">
        We're here to introduce you to all the places at <span className="font-semibold text-orange-600">Gangasagar</span>
      </h1>
      <p className="text-sm lg:text-base text-desc w-full lg:w-[600px] text-center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
        cupiditate dicta ullam perspiciatis harum quam ratione praesentium illo.
      </p>
      <div className="flex flex-col lg:flex-row w-full justify-between mt-5 gap-3">
        {stats.map((stat, index) => (
          <div
            className="w-full lg:w-1/4 border-2 border-orange-600 rounded-2xl px-7.5 lg:px-13 py-5 lg:py-10"
            key={index}
          >
            <p className="text-orange-600 text-2xl lg:text-3xl font-medium">
              {stat.number}
            </p>
            <p className="text-orange-700 text-lg lg:text-xl">{stat.text}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}
