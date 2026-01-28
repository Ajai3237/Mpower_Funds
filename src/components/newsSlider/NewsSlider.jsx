import React, { useEffect, useState } from "react";
import "./newsSlider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, FreeMode } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { llcData } from "../../constants/llc";
import { incData } from "../../constants/inc";

const countryMap = {
  us: llcData,
  ca: incData,
};

const NewsSlider = () => {
  const { countryCode } = useParams();
  const [content, setContent] = useState(llcData);

  useEffect(() => {
    const country = (countryCode || "us").toLowerCase();
    setContent(countryMap[country] || llcData);
  }, [countryCode]);
  const basePath = countryCode ? `/${countryCode}` : "";
  // data collection

  return (
    <section className="newsArea">
      <div className="container">
        <div className="mb-5 d-flex flex-column flex-md-row justify-content-between align-items-start align-items-lg-center">
          <h1 className="heading mb-3 mb-md-0">{content.newsData.heading}</h1>
          <Link
            to={`${basePath}${content.newsData.path}`}
            className="button justify-content-end newsBtn"
          >
            {content.newsData.newsButton}
            <div>
              <FaArrowRight />
            </div>
          </Link>
        </div>

        <Swiper
          modules={[Scrollbar]}
          spaceBetween={20}
          slidesPerGroup={1}
          scrollbar={{ draggable: true }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          className="newsSlider"
        >
          {content.newsData.newsData.map((data, index) => (
            <SwiperSlide key={index}>
              <Link
                to={`${basePath}/blog/${data.id}`}
                state={{
                  blog: data.blogData,
                  country: countryCode || "us",
                  from: location.pathname,
                }}
                className="NewsBox text-decoration-none d-block"
              >
                <div className="newsImgBox">
                  <img src={data.image} alt="" />
                </div>
                <h1 className="newsHeading">{data.title}</h1>
                <p className="mb-0">{data.news}</p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default NewsSlider;
