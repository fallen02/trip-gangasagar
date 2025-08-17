import { Container } from "../Container";
import carBook from "@/app/assets/car_offer.jpeg";
import boatBook from "@/app/assets/boatbook.jpg";
import hotelBook from "@/app/assets/hotel_offer.jpeg";
import dharmashalaBook from "@/app/assets/dharmashala_offer.jpeg";
import { bookLink } from "@/constant/navmenu";
const offers = [
  {
    name: "Private Car Booking",
    img: carBook,
    desc: "Discover the joy of travel with our private car booking service, offering comfort and convenience whenever you need it.",
  },
  
  {
    name: "Hotel and Resort Booking",
    img: hotelBook,
    desc: "Book your dream hotel or resort today and indulge in luxury, comfort, and relaxation, offering a wide range of accommodations to suit every taste.",
  },
  {
    name: "Daramashala Booking",
    img: dharmashalaBook,
    desc: "Enjoy serene beauty of Dharamshala with our booking service, where you can find cozy accommodations nestled near Kapilmuni Temple.",
  },
  {
    name: "Private Boat Booking",
    img: boatBook,
    desc: "Set sail on your own adventure with our private boat booking service, offering exclusive access to stunning waterways and breathtaking views.",
  },
];

export function OurOffer() {
  return (
    <div className="bg-orange-50">
      <Container className="py-10">
        <div className="flex flex-col justify-center items-center py-15 gap-3">
          <p className="text-sm lg:text-base uppercase text-orange-700">
          Our Offer
        </p>
          <h1 className="text-4xl text-heading font-semibold tracking-wide">
            What We Offer?
          </h1>
          <p className="text-center text-desc">
            We offer a comprehensive range of services to enhance your travel experience.1
          </p>
        </div>
        <div className="flex flex-col lg:flex-row w-full justify-between  gap-3">
          {offers.map((offer, index) => (
            <div
              className=" w-full lg:w-1/4 flex flex-col gap-5 bg-gray-100 rounded-xl shadow pb-5"
              key={index}
            >
              <img
                src={offer.img}
                alt=""
                className="w-full h-full object-cover rounded-t-2xl"
              />
              <div className="flex flex-col gap-2 p-5">
                <p className="text-xl font-semibold text-orange-600">
                  {offer.name}
                </p>
                <p className="text-sm font-light text-desc">{offer.desc}</p>
              <a
                href={bookLink}
                className="px-3 mt-5 py-1.5 bg-orange-600 rounded-full border-2 border-orange-700 w-fit text-white font-medium"
                >
                Call Us Now
              </a>
                </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
