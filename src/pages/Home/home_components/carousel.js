import React, { useEffect, useState } from "react";
import "../home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import axios from "axios";
function Carousel() {
  const [partner, setPartner] = useState([])
  useEffect(() => {
    axios
      .get('http://localhost:3000/partners')
      .then(function (response) {
        setPartner(response.data)
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [])

  const partnersImg = partner.map((image) => {
    return (
      <SwiperSlide>
        <img src={image.imgURL} alt="brand" />
      </SwiperSlide>
    );
  })

  return (
    <>
      <section id="carousel">
        <div className="carousel">
          <h1>Our partners</h1>
          <div className="flex space-x-10 p-10 mainer">
            <Swiper
              slidesPerView={6}
              spaceBetween={20}
              loop={true}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >{partnersImg}
              {/* {partners.map((image) => {
                return (
                  <SwiperSlide>
                    <img src={image.imgURL} alt="brand" />
                  </SwiperSlide>
                );
              })} */}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}

export default Carousel;
