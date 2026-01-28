import React, { useEffect, useState } from "react";
import "./blogDetails.css";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { llcData } from "../../constants/llc";
import { incData } from "../../constants/inc";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCheck,
  FaCopy,
  FaFacebook,
  FaFacebookF,
} from "react-icons/fa";
import { Button, Modal } from "react-bootstrap";
import { IoMdShare } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import toast from "react-hot-toast";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import { blogDataUS } from "../../constants/blogDataUS";
import { blogDataCa } from "../../constants/blogDataCa";

const countryMap = {
  us: llcData,
  ca: incData,
};

// const RelatedPost = () => {
//   const { countryCode } = useParams();
//   const location = useLocation();
//   const navigate = useNavigate();

//   const [content, setContent] = useState(llcData);

//   useEffect(() => {
//     const country = (countryCode || "us").toLowerCase();
//     setContent(countryMap[country] || llcData);
//   }, [countryCode]);
//   const data = content.blogTetails;
//   const basePath = countryCode ? `/${countryCode}` : "";

//   //   console.log("contentData: ", contentData);
//   //   console.log("blogdata: ", blogdata);
//   //   console.log("fromPage: ", fromPage);
//   //   console.log("detailsData: ", detailsData);

//   // data collection

//   return (
//     <Swiper
//       modules={[Scrollbar]}
//       spaceBetween={20}
//       slidesPerGroup={1}
//       scrollbar={{ draggable: true }}
//       breakpoints={{
//         0: {
//           slidesPerView: 1,
//         },
//         768: {
//           slidesPerView: 2,
//         },
//         1200: {
//           slidesPerView: 3,
//         },
//       }}
//       className="newsSlider"
//     >
//       {data.relatedPost.map((item, index) => (
//         <SwiperSlide key={index}>
//           <Link
//             to={`${basePath}/blog/${data.id}`}
//             state={{
//               blog: item.blogData,
//               country: countryCode || "us",
//               from: location.pathname,
//             }}
//             className="NewsBox text-decoration-none d-block"
//           >
//             <div className="newsImgBox">
//               <img src={item.image} alt="" />
//             </div>
//             <h1 className="newsHeading">{item.title}</h1>
//             <p className="mb-0">{item.news}</p>
//           </Link>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

const BlogDetails = () => {
  const { countryCode, id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [content, setContent] = useState(llcData);

  useEffect(() => {
    const country = (countryCode || "us").toLowerCase();
    setContent(countryMap[country] || llcData);
  }, [countryCode]);

  const data = content.blogTetails;
  const basePath = countryCode ? `/${countryCode}` : "";
  //data collection

  const country = (countryCode || "us").toLowerCase();
  const contentData = country === "ca" ? blogDataCa : blogDataUS;

  // Make sure contentData is defined and an array
  const blogArray = Array.isArray(contentData)
    ? contentData
    : contentData && typeof contentData === "object"
    ? Object.values(contentData)
    : [];

  const detailsData = blogArray.find((b) => b.id?.toString() === id);

  useEffect(() => {
    if (!detailsData) {
      navigate(`/${country}/blogs`, { replace: true });
    }
  }, [detailsData, navigate, country]);

  if (!detailsData) return null;

  // const state = location.state;
  // const blogdata = location.state?.blog;
  // const stateCountry = location.state?.country;
  // const fromPage = state?.from || "/blogs";

  // const contentData = stateCountry === "ca" ? blogDataCa : blogDataUS;
  // const detailsData = contentData[blogdata];

  //   console.log("contentData: ", contentData);
  //   console.log("blogdata: ", blogdata);
  //   console.log("fromPage: ", fromPage);
  //   console.log("detailsData: ", detailsData);

  // useEffect(() => {
  //   if (!state?.blog) {
  //     navigate(fromPage, { replace: true });
  //   }
  // }, [state, navigate, fromPage]);

  // if (!blogdata) return null;

  //data collection

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
  });

  const [show, setShow] = useState(false);
  const pageUrl = window.location.href;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(pageUrl);
      toast.success("Link copied to clipboard !");
    } catch (err) {
      toast.error("Failed to copy:", err);
    }
  };

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    pageUrl
  )}`;

  const emailShare = `mailto:?subject=Check this out&body=${encodeURIComponent(
    pageUrl
  )}`;

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const payload = {
      first_name: formData.first_name,
      last_name: formData.last_name,
      email: formData.email,
      phone: formData.phone,
      message: "From Blog Details Page 'get in touch' form",
    };
    // console.log('payload :', payload)
    // console.log('api', content.HompageData.getInTouch.formApi)
    try {
      const response = await fetch(content.HompageData.getInTouch.formApi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
      });
      setErrors({});
      toast.success("Submitted successfully!");
    } catch (error) {
      console.error("Error submitting:", error);
      toast.error("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const getRandomFont = () => {
    const fontClasses = ["fs-5", "fs-4", "fs-3", "fs-2", "fs-1"];
    return fontClasses[Math.floor(Math.random() * fontClasses.length)];
  };

  return (
    <>
      <section className="BlogDetailBanner">
        <div className="container">
          <div className="d-flex gap-3 flex-column flex-xl-row align-items-center justify-content-between mb-5">
            <div className="detailBlogBannerImg">
              <img
                src={detailsData.image}
                alt="Blog Picture"
                className="w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="blogDetailHeadingBox">
              <div className="blogtag d-inline-block text-white">
                {detailsData.tag}
              </div>
              <h1 className="heading py-3">{detailsData.heading}</h1>
              <div className="blogAuthorBox">
                <div className="author">
                  <div className="imgAuthor">
                    <img
                      src={detailsData.author.image}
                      alt=""
                      className="w-100 h-100 object-fit-cover"
                    />
                  </div>
                  {detailsData.author.name}
                </div>
                <div className="dateBoxBlog text-center align-items-center justify-content-center">
                  {detailsData.date}
                </div>
                <div className="readTime text-center align-items-center justify-content-center">
                  {detailsData.read}
                </div>
              </div>
              <div className="socialLinks">
                <a href={facebookShare} className="socialLink rounded-circle">
                  <FaFacebookF />
                </a>
                <button
                  className="socialLink rounded-circle"
                  onClick={() => setShow(true)}
                >
                  <IoMdShare />
                </button>
              </div>
            </div>
          </div>
          <div className="blogPostArea">
            <div className="blogPost">
              {detailsData.blogPost.map((item, index) => {
                if (item.type == "quote")
                  return (
                    <div className="quote" key={index}>
                      "{item.text}"
                    </div>
                  );
                if (item.type == "image")
                  return (
                    <div className="blogImg" key={index}>
                      <img src={item.src} alt="" />
                    </div>
                  );
                if (item.type == "list")
                  return (
                    <ul className="list" key={index}>
                      {item.list.map((datItem, i) => (
                        <li key={i}>
                          <div className="listIconSvg">
                            <FaCheck />
                          </div>{" "}
                          <p>
                            <span>{datItem.bold}</span>{" "}
                            {datItem.bold ? ":" : ""} {datItem.text}
                          </p>
                        </li>
                      ))}
                    </ul>
                  );
                else
                  return (
                    <div className={item.type} key={index}>
                      {Array.isArray(item.text)
                        ? item.text.map((t, i) =>
                            typeof t === "string" ? (
                              t
                            ) : (
                              <a
                                key={i}
                                href={t.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="textLink"
                              >
                                {t.linkText}
                              </a>
                            )
                          )
                        : item.text}
                    </div>
                  );
              })}
            </div>
            <div className="blogSideBar">
              {/* <h1 className="blogHead">{data.sidebar.heading}</h1>
              <ul className="list-unstyled">
                {data.sidebar.tableOfCondent.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul> */}
              <div className="getInTouchFormHome text-white">
                <form className="border" onSubmit={handleSubmit}>
                  <h1 className="fw-semibold">
                    {content.HompageData.getInTouch.formHead}
                  </h1>
                  {content.HompageData.getInTouch.formData.map(
                    (data, index) => (
                      <div className="inptBox text-white" key={index}>
                        <label htmlFor={data.name}>
                          <img src={data.icon} alt="" />
                        </label>
                        <input
                          type={data.type}
                          id={data.name}
                          name={data.name}
                          placeholder={data.placeholder}
                          value={formData[data.name] || ""}
                          onChange={handleChange}
                          className="text-white"
                          required
                        />
                      </div>
                    )
                  )}
                  <button
                    type="submit"
                    className="button justify-content-end text-white border-white border"
                    disabled={loading}
                  >
                    {loading
                      ? "Submitting"
                      : content.HompageData.getInTouch.formBtn}
                    <div>
                      <FaArrowRight />
                    </div>
                  </button>
                </form>
              </div>
              {/* <h1 className="blogHead">{data.sidebar.topicHeading}</h1>
              <div className="textTags d-flex flex-wrap gap-2">
                {data.sidebar.topics.map((topic, idx) => (
                  <span key={idx} className={`${getRandomFont()}`}>
                    {topic}
                  </span>
                ))}
              </div> */}
            </div>
          </div>
          {/* <h1 className="heading mt-5 pt-4 ">{data.postHeading}</h1> */}
          {/* <div className="newsArea"><RelatedPost /></div> */}
          <div className="text-center my-4">
            <button
              type="button"
              className="button mx-auto bckBtnApl"
              style={{ width: "200px" }}
              onClick={() => navigate(-1)}
            >
              <div className="position-absolute right-0">
                <FaArrowLeft />
              </div>
              <span className="text-center w-100"> Back</span>
            </button>
          </div>
        </div>
      </section>

      {/* modal to share  */}
      <Modal
        show={show}
        onHide={() => setShow(false)}
        className="shareModal"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Share This Page</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-body-tertiary">
          <input
            type="text"
            value={pageUrl}
            readOnly
            className="form-control"
          />
        </Modal.Body>
        <Modal.Footer className="bg-body-tertiary border-0 justify-content-start">
          <div className="btnBoxes d-flex gap-2">
            <Button variant="outline-dark" onClick={handleCopy}>
              <FaCopy /> Copy Link
            </Button>
            <a href={facebookShare} target="_blank" rel="noopener noreferrer">
              <Button variant="outline-primary">
                {" "}
                <FaFacebook /> Facebook
              </Button>
            </a>
            <a href={emailShare}>
              <Button variant="outline-secondary">
                <MdEmail /> Email
              </Button>
            </a>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BlogDetails;
