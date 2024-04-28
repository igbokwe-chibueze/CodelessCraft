import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Car, Combs, Hair, Lens, Massage } from "../assets";


const Carousel = () => {

    const settings = {
        dots: false,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 4,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
    };
      
  return (
    <div className="mt-[44px] mb-[24px] w-full px-4">
        <div className="testimonial">
            <Slider {...settings}>
                <div>
                    <img src={Hair} alt="hair" className="object-cover"/>
                </div>
                <div>
                    <img src={Massage} alt="massage" className="object-cover" />
                </div>
                <div>
                    <img src={Lens} alt="lens" className="object-cover" />
                </div>
                <div>
                    <img src={Car} alt="car" className="object-cover" />
                </div>
                <div>
                    <img src={Combs} alt="combs" className="object-cover" />
                </div>
            </Slider>    
        </div>
    </div>
  )
}

export default Carousel