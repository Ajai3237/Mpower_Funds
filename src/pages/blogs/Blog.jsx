import React, { useEffect, useState } from "react";
import "./blog.css";
import { llcData } from "../../constants/llc";
import { incData } from "../../constants/inc";
import { Link, useParams } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const countryMap = {
  us: llcData,
  ca: incData,
};

const LoansOnBlogSection = ({ content, basePath }) => {
  const [activeTab, setActiveTab] = useState(0); // Default to first tab

  const tabData = content.blogPage.loansOnBlogPersonal.personalLoans;
  const currentTab = tabData[activeTab];

  return (
    <div className="blogBox">
      <div className="buttonBlogBox">
        {tabData.map((data, index) => (
          <button
            key={index}
            className={`btnBlogTab ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {data.name}
          </button>
        ))}
      </div>

      <div className="blogBoxNews">
        <div className="blogTopArea">
          <div className="blogBanner">
            <div className="blogBannerBox position-relative">
              <img
                src={currentTab.mainImage}
                alt=""
                className="banImgBlog object-fit-cover"
              />
              <div className="position-absolute blogBannerText">
                <div>
                  <span className="blogtag d-inline-block text-white">
                    {currentTab.tag}
                  </span>
                  <h1 className="heading">{currentTab.heading}</h1>
                  <div className="date">{currentTab.date}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="popularBlog">
            <div className="d-flex newsArea justify-content-between">
              {currentTab.blogs.slice(0, 3).map((data, index) => (
                <>
                  {/* <Link
                                        to={`${basePath}/blog`}
                                        className="NewsBox text-decoration-none d-block"
                                        key={index}
                                    >
                                        <div className="newsImgBox">
                                            <img src={data.image} alt="" />
                                        </div>
                                        <h1 className="newsHeading">{data.title}</h1>
                                        <p className="mb-0">{data.news}</p>
                                    </Link> */}
                  <div
                    className="NewsBox text-decoration-none d-block"
                    key={index}
                  >
                    <div className="newsImgBox">
                      <img src={data.image} alt="" />
                    </div>
                    <h1 className="newsHeading">{data.title}</h1>
                    <p className="mb-0">{data.news}</p>
                  </div>
                </>
              ))}
            </div>
          </div>
          {/* <div className="text-center pt-5">
                        <Link to={`${basePath}`} className="justify-content-end button mx-auto newsBtn">
                            {currentTab.moreButton}
                            <div>
                                <FaArrowRight />
                            </div>
                        </Link>
                    </div> */}
        </div>
      </div>
    </div>
  );
};

const LoansOnBlogSection1 = ({ content, basePath }) => {
  const [activeTab, setActiveTab] = useState(0); // Default to first tab

  const tabData = content.blogPage.loansOnBlogBusiness.personalLoans;
  const currentTab = tabData[activeTab];

  return (
    <div className="blogBox">
      <div className="buttonBlogBox">
        {tabData.map((data, index) => (
          <button
            key={index}
            className={`btnBlogTab ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {data.name}
          </button>
        ))}
      </div>

      <div className="blogBoxNews">
        <div className="blogTopArea">
          <div className="blogBanner">
            <div className="blogBannerBox position-relative">
              <img
                src={currentTab.mainImage}
                alt=""
                className="banImgBlog object-fit-cover"
              />
              <div className="position-absolute blogBannerText">
                <div>
                  <span className="blogtag d-inline-block text-white">
                    {currentTab.tag}
                  </span>
                  <h1 className="heading">{currentTab.heading}</h1>
                  <div className="date">{currentTab.date}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="popularBlog">
            <div className="d-flex newsArea justify-content-between">
              {currentTab.blogs.slice(0, 3).map((data, index) => (
                <>
                  {/* <Link
                                        to={`${basePath}/blog`}
                                        className="NewsBox text-decoration-none d-block"
                                        key={index}
                                    >
                                        <div className="newsImgBox">
                                            <img src={data.image} alt="" />
                                        </div>
                                        <h1 className="newsHeading">{data.title}</h1>
                                        <p className="mb-0">{data.news}</p>
                                    </Link> */}
                  <div
                    className="NewsBox text-decoration-none d-block"
                    key={index}
                  >
                    <div className="newsImgBox">
                      <img src={data.image} alt="" />
                    </div>
                    <h1 className="newsHeading">{data.title}</h1>
                    <p className="mb-0">{data.news}</p>
                  </div>
                </>
              ))}
            </div>
          </div>
          {/* <div className="text-center pt-5">
                        <Link to={`${basePath}/`} className="justify-content-end button mx-auto newsBtn">
                            {currentTab.moreButton}
                            <div>
                                <FaArrowRight />
                            </div>
                        </Link>
                    </div> */}
        </div>
      </div>
    </div>
  );
};

const Blog = () => {
  const { countryCode } = useParams();
  const [content, setContent] = useState(llcData);

  useEffect(() => {
    const country = (countryCode || "us").toLowerCase();
    setContent(countryMap[country] || llcData);
  }, [countryCode]);
  const data = content.blogPage;
  const basePath = countryCode ? `/${countryCode}` : "";

  // data collection

  return (
    <>
      <section className="blogTopArea">
        <div className="container">
          <div className="blogBanner">
            <div className="blogBannerBox position-relative">
              <img
                src={data.mainImg}
                alt=""
                className="banImgBlog object-fit-cover"
              />
              <div className="position-absolute blogBannerText">
                <div>
                  <span className="blogtag d-inline-block text-white">
                    {data.bannerText.tag}
                  </span>
                  <h1 className="heading">{data.bannerText.text}</h1>
                  <div className="date">{data.bannerText.date}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="popularBlog">
            <h1 className="heading">{data.popularBlog.heading}</h1>
            <div className="d-flex newsArea justify-content-between">
              {data.popularBlog.popularNews.slice(0, 3).map((data, index) => (
                <Link
                  to={`${basePath}/blog/${data.id}`}
                  state={{
                    blog: data.blogData,
                    country: countryCode || "us",
                    from: location.pathname,
                  }}
                  className="NewsBox text-decoration-none d-block"
                  key={index}
                >
                  <div className="newsImgBox">
                    <img src={data.image} alt="" />
                  </div>
                  <h1 className="newsHeading">{data.title}</h1>
                  <p className="mb-0">{data.news}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="checkLoan blogPageChck">
        <div className="container text-center">
          <h1 className="heading text-white">{data.checkLoan.heading}</h1>
          {/* <Link
            to={`${basePath}/apply`}
            className="justify-content-end button text-white"
          >
            {data.checkLoan.buttonText}
            <div>
              <FaArrowRight />
            </div>
          </Link> */}
          <div className="text-center text-white">
            {data.checkLoan.description}
          </div>
        </div>
      </section>

      {/* <section className="loansOnBlog">
                <div className="container">
                    <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center justify-content-sm-between">
                        <h1 className="heading">{data.loansOnBlogPersonal.heading}</h1>
                        <Link to={`${basePath}`} className="justify-content-end button newsBtn">
                            {data.loansOnBlogPersonal.buttonText}
                            <div><FaArrowRight /></div>
                        </Link>
                    </div>
                    <LoansOnBlogSection content={content} basePath={basePath} />
                </div>
            </section> */}

      {/* <section className="loansOnBlog pb-5">
                <div className="container">
                    <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center justify-content-sm-between">
                        <h1 className="heading">{data.loansOnBlogBusiness.heading}</h1>
                        <Link to={`${basePath}`} className="justify-content-end button newsBtn">
                            {data.loansOnBlogBusiness.buttonText}
                            <div><FaArrowRight /></div>
                        </Link>
                    </div>
                    <LoansOnBlogSection1 content={content} basePath={basePath} />
                </div>
            </section> */}
    </>
  );
};

export default Blog;
