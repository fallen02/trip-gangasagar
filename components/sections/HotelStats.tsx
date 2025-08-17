const stats = [
  {
    number: "302+",
    text: "Room & Suits",
  },
  {
    number: "24x7",
    text: "Support",
  },
  {
    number: "500+",
    text: "Exceptional foods",
  },
  {
    number: "20+",
    text: "Destinations",
  },
];
export function HotelStats() {
  return (
    <div className="relative  mx-auto max-w-[86rem] w-dvw  my-10 ">
      <div className="absolute bg-[url(./img/beach.webp)] bg-no-repeat bg-cover bg-center top-0 left-0 h-full w-full" />
      <div className="absolute bg-black/30 top-0 left-0 h-full w-full" />
      <div className="relative grid grid-cols-2 lg:grid-flow-col w-full justify-between lg:p-20">
        {stats.map((stat, index) => (
          <div className="flex justify-between gap-1 items-center">
            <div className="p-5 lg:p-10 flex flex-col gap-3" key={index}>
              <p className="text-3xl lg:text-5xl font-medium font-catamaran text-gray-50">
                {stat.number}
              </p>
              <p className="text-xl lg:text-2xl text-gray-100">{stat.text}</p>
            </div>
            {
                index + 1 != stats.length ? (<div className="h-[80%] w-[1px] bg-gray-50"/>) : ""
            }
          </div>
        ))}
      </div>
    </div>
  );
}
