import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import "./bannerSlider.css";
import { Link, useLocation, useParams } from "react-router-dom";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

import { llcData } from "../../constants/llc.js";
import { incData } from "../../constants/inc.js";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Button, Col, Modal, Row } from "react-bootstrap";
import toast from "react-hot-toast";
import NewsSlider from "../../components/newsSlider/NewsSlider.jsx";
import LoanCalculator from "./LoanCalculator.jsx";

const countryMap = {
  us: llcData,
  ca: incData,
};

// const LoanSlider1 = () => {
//     const swiperRef = useRef(null);
//     const { countryCode } = useParams();
//     const [content, setContent] = useState(llcData);

//     useEffect(() => {
//         const country = (countryCode || 'us').toLowerCase();
//         setContent(countryMap[country] || llcData);
//     }, [countryCode]);

//     const data = content.HompageData;
//     const basePath = countryCode ? `/${countryCode}` : '';

//     //data collected

//     const handleSlideChange = (swiper) => {
//         swiper.slides.forEach((slide) => {
//             slide?.classList?.remove('before-prev', 'after-next');
//         });

//         const totalSlides = swiper.slides.length;
//         const active = swiper.activeIndex;

//         const prevIndex = active - 1 < 0 ? totalSlides - 1 : active - 1;
//         const beforePrevIndex = prevIndex - 1 < 0 ? totalSlides - 1 : prevIndex - 1;

//         const nextIndex = (active + 1) % totalSlides;
//         const afterNextIndex = (nextIndex + 1) % totalSlides;

//         // Check existence before modifying classList
//         if (swiper.slides[beforePrevIndex]) {
//             swiper.slides[beforePrevIndex].classList.add('before-prev');
//         }

//         if (swiper.slides[afterNextIndex]) {
//             swiper.slides[afterNextIndex].classList.add('after-next');
//         }
//     };

//     return (
//         <Swiper
//             ref={swiperRef}
//             loop={true}
//             centeredSlides={true}
//             slidesPerView={5}
//             autoplay={{ delay: 2500, disableOnInteraction: false, reverseDirection: true, }}
//             // autoplay={false}
//             grabCursor={false}
//             allowTouchMove={false}
//             onSwiper={(swiper) => {
//                 swiperRef.current = swiper;
//                 handleSlideChange(swiper);
//             }}
//             onSlideChange={handleSlideChange}
//             breakpoints={{
//                 320: { slidesPerView: 3 },
//                 768: { slidesPerView: 3 },
//                 992: { slidesPerView: 5 },
//                 1280: { slidesPerView: 5 },
//             }}
//             modules={[Autoplay]}
//             className="loan-swiper"
//         >
//             {data.banner.bannerSlides.map((item, index) => (
//                 <SwiperSlide key={index} className="loan-slide">
//                     <div className="slide-card">
//                         <div className={`homebanSlideBx position-relative mt-4 cardbox${index + 1}`}>
//                             <img src={item.image} alt={item.label} className="slide-image w-100" />
//                             <div className="slide-label ">{item.label}</div>
//                         </div>
//                     </div>
//                 </SwiperSlide>
//             ))}
//         </Swiper>
//     );
// };

// const ServicesSlider = () => {
//     const { countryCode } = useParams();
//     const [content, setContent] = useState(llcData);

//     useEffect(() => {
//         const country = (countryCode || 'us').toLowerCase();
//         setContent(countryMap[country] || llcData);
//     }, [countryCode]);

//     const data = content.HompageData;
//     const basePath = countryCode ? `/${countryCode}` : '';
//     // set content data

//     const [slidesToShow, setSlidesToShow] = useState(2.5);
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const totalSlides = data.servisesSlider.length;

//     const settings = {
//         infinite: false,
//         speed: 500,
//         slidesToShow: 2.5,
//         slidesToScroll: 1,
//         arrows: true,
//         beforeChange: (oldIndex, newIndex) => {
//             setCurrentSlide(newIndex);
//         },
//         prevArrow: (
//             <PrevArrow
//                 isDisabled={currentSlide === 0}
//             />
//         ),
//         nextArrow: (
//             <NextArrow
//                 isDisabled={currentSlide >= totalSlides - slidesToShow}
//             />
//         ),
//         responsive: [
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 1.5,
//                 },
//             },
//             {
//                 breakpoint: 575,
//                 settings: {
//                     slidesToShow: 1,
//                 },
//             },
//         ],
//     };

//     useEffect(() => {
//         const updateSlidesToShow = () => {
//             const width = window.innerWidth;
//             if (width < 575) {
//                 setSlidesToShow(1);
//             }
//             else if (width < 768) {
//                 setSlidesToShow(1.5);
//             }
//             // else if (width < 1400) {
//             //     setSlidesToShow(2);
//             // }
//             else {
//                 setSlidesToShow(2.5);
//             }
//         };

//         updateSlidesToShow();
//         window.addEventListener('resize', updateSlidesToShow);
//         return () => window.removeEventListener('resize', updateSlidesToShow);
//     }, []);

//     return (
//         <div className="services-slider-wrapper position-relative">
//             <Slider {...settings}>
//                 <div className="frstSliderSrvc"></div>
//                 {data.servisesSlider.map((data, index) => (
//                     <Link to={`${basePath}/`} key={index} className="px-2 text-decoration-none d-block">
//                         <div className="homeServicesBox">
//                             <div>
//                                 <h1 className="fw-semibold">{data.title}</h1>
//                                 <p>{data.description}</p>
//                             </div>
//                             <div className="homeServicesImgBox">
//                                 <img
//                                     src={data.image}
//                                     alt=""
//                                     className="w-100 h-100 object-fit-cover"
//                                     loading="lazy"
//                                 />
//                             </div>
//                         </div>
//                     </Link>
//                 ))}
//             </Slider>
//         </div>
//     );
// };

// const PrevArrow = ({ onClick, isDisabled }) => (
//     <button
//         className={`custom-slick-arrow prev position-absolute top-50 translate-middle-y ${isDisabled ? 'd-none' : 'active'}`}
//         onClick={onClick}
//         disabled={isDisabled}
//     >
//         <LuArrowLeft />
//     </button>
// );

// const NextArrow = ({ onClick, isDisabled }) => (
//     <button
//         className={`custom-slick-arrow next position-absolute top-50 translate-middle-y ${isDisabled ? 'd-none' : 'active'}`}
//         onClick={onClick}
//         disabled={isDisabled}
//     >
//         <LuArrowRight />
//     </button>
// );

// const JoinUsSlider = () => {
//     const { countryCode } = useParams();
//     const [content, setContent] = useState(llcData);

//     useEffect(() => {
//         const country = (countryCode || 'us').toLowerCase();
//         setContent(countryMap[country] || llcData);
//     }, [countryCode]);

//     const data = content.HompageData;
//     const basePath = countryCode ? `/${countryCode}` : '';
//     // data collection

//     var settings = {
//         dots: false,
//         speed: 2000,
//         autoplaySpeed: 5000,
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         arrows: false,
//         autoplay: true,
//         pauseOnHover: true,
//         cssEase: "linear",
//         responsive: [
//             {
//                 breakpoint: 1200,
//                 settings: {
//                     slidesToShow: 2,
//                 },
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 1,
//                     speed: 3000,
//                 },
//             },
//         ],
//     };
//     return (
//         < Slider {...settings}>
//             {data.joinusSlider.map((item, index) => (
//                 <div className='joinUsCard' key={index}>
//                     <p className='w-100 m-0 text-start'>{item.text}</p>
//                     <div className="joinUsCardimg d-flex align-items-center">
//                         <div className='imgbx1'>
//                             <img src={item.image} alt="" className='w-100 h-100 object-fit-cover' />
//                         </div>
//                         <div className='textbx1 text-start'>
//                             <h1 className="m-0 fw-semibold">{item.name}</h1>
//                             <p className="w-100 text-start m-0 p-0 jakarta" >{item.role}</p>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </Slider>
//     );
// };

const FormBox = () => {
  const { countryCode } = useParams();
  const [content, setContent] = useState(llcData);

  useEffect(() => {
    const country = (countryCode || "us").toLowerCase();
    setContent(countryMap[country] || llcData);
  }, [countryCode]);

  const data = content.HompageData;

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // ✅ IMPORTANT: empty object (keys are entry.xxxx)
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    data.getInTouch.formData.forEach((field) => {
      const value = formData[field.name];
      if (!value || !value.trim()) {
        newErrors[field.name] = `${field.placeholder} is required`;
      }

      if (field.type === "email" && value) {
        const emailPattern = /\S+@\S+\.\S+/;
        if (!emailPattern.test(value)) {
          newErrors[field.name] = "Enter a valid email address";
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    // ✅ Google Form payload
    const payload = new URLSearchParams();

    // ✅ Dynamically append entry.xxxx fields
    data.getInTouch.formData.forEach((field) => {
      const value = formData[field.name];
      if (value) {
        payload.append(field.name, value);
      }
    });

    // ✅ Required Google hidden fields
    payload.append("fvv", "1");
    payload.append("pageHistory", "0");
    payload.append("fbzx", Date.now().toString());
    payload.append("submit", "Submit");

    try {
      await fetch(data.getInTouch.formApi, {
        method: "POST",
        mode: "no-cors", // REQUIRED for Google Forms
        body: payload,
      });

      setFormData({});
      setErrors({});
      toast.success("Submitted successfully!");
    } catch (error) {
      console.error("Error submitting:", error);
      toast.error("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <form className="border border-white" onSubmit={handleSubmit}>
      <h1 className="fw-semibold">{data.getInTouch.formHead}</h1>

      {data.getInTouch.formData.map((field, index) => (
        <div className="inptBox text-white" key={index}>
          <label>
            <img src={field.icon} alt="" />
          </label>

          <input
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            value={formData[field.name] || ""}
            onChange={handleChange}
            className={`text-white ${
              errors[field.name] ? "border border-danger" : ""
            }`}
          />

          {errors[field.name] && (
            <div className="text-danger small mt-1">
              {errors[field.name]}
            </div>
          )}
        </div>
      ))}

      <button
        type="submit"
        className="button justify-content-end text-white border-white border"
        disabled={loading}
      >
        {loading ? (
          <>
            <span className="spinner-border spinner-border-sm me-2" />
            Submitting
          </>
        ) : (
          data.getInTouch.formBtn
        )}
        <div>
          <FaArrowRight />
        </div>
      </button>
    </form>
  );
};

const Home = () => {
  const { countryCode } = useParams();
  const [content, setContent] = useState(llcData);

  useEffect(() => {
    const country = (countryCode || "us").toLowerCase();
    setContent(countryMap[country] || llcData);
  }, [countryCode]);

  const data = content.HompageData;
  const basePath = countryCode ? `/${countryCode}` : "";
  // set content data

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === `${basePath}/services`) {
      const el = document.getElementById("services");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
 const [formData, setFormData] = useState({});


  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);

  const payload = new URLSearchParams();

  // ✅ dynamically append ALL fields from llc.js
  data.getInTouch.formData.forEach((field) => {
    const value = formData[field.name];
    if (value) {
      payload.append(field.name, value);
    }
  });

  // ✅ REQUIRED Google Form hidden fields
  payload.append("fvv", "1");
  payload.append("pageHistory", "0");
  payload.append("fbzx", Date.now().toString());
  payload.append("submit", "Submit");

  try {
    await fetch(data.getInTouch.formApi, {
      method: "POST",
      mode: "no-cors",
      body: payload,
    });

    setFormData({});
    toast.success("Submitted successfully!");
  } catch (error) {
    console.error("Submission failed:", error);
    toast.error("Submission failed. Please try again.");
  } finally {
    setLoading(false);
  }
};

  return (
    <>
      <section className="homeHero">
        <div className="container pb-sm-5">
          <div className="homeHeaderBox text-center m-auto">
            <h1
              className={`bannerHeader my-5 ${countryCode?.toLowerCase() === "ca" ? "ca-width" : ""
                }`}
            >
              {data.banner.heading}
            </h1>
            <p className="py-3">{data.banner.description}</p>
            <div className="btnBox pb-5">
              <Link
                to={`${data.banner.button[0].path}`}
                target="_blank"
                className="button btnhm1 justify-content-end"
              >
                {data.banner.button[0].label}
                <div>
                  <FaArrowRight />
                </div>
              </Link>
              {/* <button
                onClick={handleShow}
                className="button buttontt justify-content-end"
              >
                {data.banner.button[1].label}
                <div>
                  <FaArrowRight />
                </div>
              </button> */}
            </div>
          </div>
        </div>
      </section>

      <section className="topServices" id="services">
        <div className="container">
          <div className="d-flex flex-column flex-lg-row justify-content-between align-items-start align-items-lg-center">
            <h1 className="heading mb-5">{data.topServices.heading}</h1>
          </div>
          {data.servisesSlider.map((srvcx, index) => (
            <div className={`homeServicesArea mb-4`} key={index}>
              <div className="subHeading fw-semibold">{srvcx.heading}</div>
              <div className="hmSrvcs">
                {srvcx.services.map((item, index) => (
                  <div
                    className={`servicesBoxes ${countryCode?.toLowerCase() === "ca" ? "caServices" : ""
                      }`}
                    key={index}
                  >
                    <div>
                      <h1>{item.title}</h1>
                      <p className="py-2">{item.description}</p>
                    </div>
                    <img
                      src={item.image}
                      alt=""
                      className="w-100 svximg"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="joineUsHome">
        <div className="container">
          <h1 className="heading text-center">{data.joineUs.heading}</h1>
          <p className="roboto">{data.joineUs.description}</p>
        </div>
      </section>

      <section className="setsApart">
        <div className="container">
          <Row>
            <Col xl={6}>
              <h1 className="heading">{data.setsApart.heading}</h1>
              <p>{data.setsApart.description}</p>
            </Col>
            <Col className="ps-lg-0">
              <div className="setsList">
                <ul className="list-unstyled">
                  {data.setsApart.setsPoint.map((data, index) => (
                    <li className="d-flex" key={index}>
                      <div className="iconBox">
                        <img src={data.icon} alt="" className="w-100 h-100" />
                      </div>
                      <div className="setsListItem">
                        <h1>{data.title}</h1>
                        <p className="w-100">{data.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
          <div className="setsBack position-absolute bottom-0 start-0">
            <img src={data.setsApart.backPic} alt="" className="w-100" />
            <img
              src={data.setsApart.backPicSmall}
              alt=""
              className="position-absolute setsBack2"
            />
          </div>
        </div>
      </section>

      <section className="stepsSection">
        <div className="container">
          <div className="d-flex flex-column flex-lg-row align-items-center">
            <div className="stepBox text-white">
              <h1 className="heading text-white">{data.steps.heading}</h1>
              <div className="stepHead fw-semibold ">
                {data.steps.description}
              </div>
              <ul className="list-unstyled">
                {data.steps.steps.map((data, index) => (
                  <li className="d-flex" key={index}>
                    <div className="stepNumber">{index + 1}</div>
                    <div className="stepsofs">
                      <span className="fw-semibold">{data.title} : </span>
                      <span className="fw-light">{data.step}</span>
                    </div>
                  </li>
                ))}
              </ul>
            <Link
  to={`${basePath}/contact`}
  className="button justify-content-end text-white border-white border"
>
  {data.steps.buttonText}
  <div>
    <FaArrowRight />
  </div>
</Link>


            </div>
            <div className="stepFlow d-flex align-items-center justify-content-center">
              <div className="innerBox">
                <div className="w-100">
                  <div className="chatbx1 chactBx11 d-flex border border-white">
                    <div className="imgbx">
                      <img
                        src={data.steps.chatBoxData[0].icon}
                        alt=""
                        className="rounded-circle w-100 h-100 object-fit-cover"
                      />
                    </div>
                    <div className="chatsAcc">
                      <h1 className="text-white fw-semibold fs-5 mb-2">
                        {data.steps.chatBoxData[0].name}
                      </h1>
                      <div className="jakarta text-white">
                        {data.steps.chatBoxData[0].text}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mdlBx1 position-relative">
                  <img
                    src={data.steps.chatBoxLogo}
                    alt="mpowerfunds"
                    className="mpwrLogo"
                  />
                </div>
                <div className="w-100">
                  <div className="chatbx1 chatbx2 d-flex border border-white">
                    <div className="imgbx">
                      <img
                        src={data.steps.chatBoxData[1].icon}
                        alt=""
                        className="rounded-circle w-100 h-100 object-fit-cover"
                      />
                    </div>
                    <div className="chatsAcc">
                      <h1 className="text-white fw-semibold fs-5 mb-2">
                        {data.steps.chatBoxData[1].name}
                      </h1>
                      <div className="jakarta text-white">
                        {data.steps.chatBoxData[1].text}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LoanCalculator />

      <section className="getInTouch">
        <div className="container">
          <Row>
            <Col lg={6}>
              <div className="gtfrst text-white">
                <div className="heading text-white">
                  {data.getInTouch.heading}
                </div>
                <p>{data.getInTouch.description}</p>
                <div className="d-flex align-items-start justify-content-center justify-content-sm-start">
                  {data.getInTouch.customer.map((data, index) => (
                    <div className="customerData text-center" key={index}>
                      <h1 className="heading text-center">{data.number}</h1>
                      <div>{data.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="getInTouchFormHome text-white">
                <FormBox />
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <NewsSlider />

      {/* <Modal
        show={showModal}
        onHide={handleClose}
        centered
        className="aiCoachModal"
      >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1 className="heading forum">{data.banner.aiCoach.heading}</h1>
          <div className="d-flex flex-column flex-lg-row align-items-lg-center gap-2">
            <ul className="list-unstyled modUl mb-3">
              {data.banner.aiCoach.points.map((item, index) => (
                <li key={index} className="d-flex gap-2 mb-2">
                  <FaCheckCircle />
                  <div className="flex-1">{item}</div>
                </li>
              ))}
            </ul>
            <div className="stamp1 flex-1">
              <div className="stampBox m-auto">
                <img
                  src={data.banner.aiCoach.freeStamp}
                  alt=""
                  className="w-100 object-fit-cover"
                />
              </div>
            </div>
          </div>

          <form
            action="https://docs.google.com/forms/d/e/1FAIpQLSd_CHv0a-wEJMdfth9R7PyKG0VAbbMOorzegX4j677zkJA5yA/formResponse"
            method="POST"
            target="hidden_iframe"
            onSubmit={() => {
              window.submitted = true;
              setIsSubmitting(true);
            }}
          >
            <p className="mb-3">{data.banner.aiCoach.description}</p>

            <div className="mfData">
              
              <div className="frmBx">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  name="entry.463070712"
                  className="form-control"
                  placeholder="Enter first name"
                  required
                />
              </div>

              
              <div className="frmBx">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  name="entry.1605085929"
                  className="form-control"
                  placeholder="Enter last name"
                  required
                />
              </div>

              
              <div className="frmBx">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="entry.176844128"
                  className="form-control"
                  placeholder="Enter email"
                  required
                />
              </div>

              <div className="frmBx">
                <label className="form-label">Mobile</label>
                <input
                  type="text"
                  name="entry.1372509536"
                  className="form-control"
                  placeholder="Enter mobile number"
                  required
                />
              </div>
            </div>

            <Modal.Footer className="border-0 justify-content-start p-0">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="button justify-content-end mt-3"
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" />
                    Submitting
                  </>
                ) : (
                  "Submit"
                )}
                <div>
                  <FaArrowRight />
                </div>
              </Button>
            </Modal.Footer>
          </form>


        </Modal.Body>
      </Modal> */}
    </>
  );
};

export default Home;

// payload = {
//             first_name: "",
//             last_name: "",
//             email: "",
//             phone: "",
//             message: "It is comming from homepage 'Get in touch' form"
//         };
