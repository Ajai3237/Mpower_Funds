import React, { useEffect, useState } from 'react';
import './loans.css';
import NewsSlider from '../../components/newsSlider/NewsSlider';
import { llcData } from '../../constants/llc';
import { incData } from '../../constants/inc';
import { Link, useParams } from 'react-router-dom';
import Slider from 'react-slick';
import { Accordion, Col, Row } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
// import { HashLink } from 'react-router-hash-link';


const countryMap = {
    us: llcData,
    ca: incData,
};

const JoinUsSlider = () => {
    const { countryCode } = useParams();
    const [content, setContent] = useState(llcData);

    useEffect(() => {
        const country = (countryCode || 'us').toLowerCase();
        setContent(countryMap[country] || llcData);
    }, [countryCode]);

    const data = content.loanPageData;
    const basePath = countryCode ? `/${countryCode}` : '';
    // data collection

    var settings = {
        dots: false,
        speed: 2000,
        autoplaySpeed: 5000,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        pauseOnHover: true,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    speed: 3000,
                },
            },
        ],
    };
    return (
        < Slider {...settings}>
            {data.joinUs.joinusSlider.map((data, index) => (
                <div className='joinUsCard' key={index}>
                    <p className='w-100 m-0 text-start'>{data.text}</p>
                    <div className="joinUsCardimg d-flex align-items-center">
                        <div className='imgbx1'>
                            <img src={data.image} alt="" className='w-100 h-100 object-fit-cover' />
                        </div>
                        <div className='textbx1 text-start'>
                            <h1 className="m-0 fw-semibold">{data.name}</h1>
                            <p className="w-100 text-start m-0 p-0 jakarta" >{data.role}</p>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    );
}

const Loans = () => {

    const { countryCode } = useParams();
    const [content, setContent] = useState(llcData);

    useEffect(() => {
        const country = (countryCode || 'us').toLowerCase();
        setContent(countryMap[country] || llcData);
    }, [countryCode]);
    const data = content.loanPageData;

    const basePath = countryCode ? `/${countryCode}` : '';
    // data collection

    return (
        <>
            <section className="bannerSection loanPageBanner ">
                <div className="container position-relative">
                    <div className="bannerBox">
                        <h1 className="bannerHeader pe-xl-1">{data.banner.heading}</h1>
                        <p className="bannerDescription">{data.banner.description}</p>

                        <div >
                            <form action="" className="d-flex align-items-center flex-wrap gap-2">
                                <select name="" id="" className='form-select'>
                                    {data.banner.rateValues.map((data, index) => (
                                        <option value={data.value} key={index}>$ {data.label}</option>
                                    ))}
                                </select>

                                {/* <HashLink to={`${basePath}/#checkLoan`} type='submit' className="justify-content-end button">
                                    {data.banner.buttonText}
                                    <div>
                                        <FaArrowRight />
                                    </div>
                                </HashLink> */}
                            </form>
                        </div>
                    </div>
                    <div className="bannerImage position-absolute">
                        <img src={data.banner.image} alt="" className='w-100 h-100 object-fit-lg-cover object-fit-container' />
                    </div>
                </div>
            </section>

            <section className="LoanBanner2">
                <div className="container">
                    <div className="d-flex justify-content-lg-between justify-content-sm-center flex-wrap">
                        {data.banner2.map((data, index) => (
                            <div className="loanPoints" key={index}>
                                <div className="pointsImgBox">
                                    <img src={data.icon} alt="" className='w-100 h-100 object-fit-cover' />
                                </div>
                                <h1>{data.label}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="questionAnswearPart">
                <div className="container d-flex flex-column flex-xl-row justify-content-between align-items-center">
                    <div className="qaBox">
                        <h1 className="heading text-white">{data.questionAnswear.question}</h1>
                        <h1 className="heading loanHeading1">{data.questionAnswear.answear}</h1>
                        <p className="text-white">{data.questionAnswear.description}</p>
                    </div>
                    <div className="qaImg position-relative mt-xl-0 mt-4">
                        <img src={data.questionAnswear.mainImg} alt="" className="w-100 mainImg h-100 object-fit-cover" />
                        <img src={data.questionAnswear.leftImg} alt="" className="position-absolute leftImg" />
                        <img src={data.questionAnswear.rightImg} alt="" className="position-absolute rightImg" />
                    </div>
                </div>
            </section>

            <section className="joineUsHome">
                <div className="container">
                    <h1 className="heading text-center">{data.joinUs.heading}</h1>
                    <p className='roboto'>{data.joinUs.description}</p>
                    {/* <div className="joinUsSlider">
                        <JoinUsSlider />
                    </div> */}
                </div>
            </section>

            <section className="setsApart loanPagePolicy">
                <div className="container">
                    <Row >
                        <Col xl={6}>
                            <h1 className="heading">{data.loanPoints.heading}</h1>
                            <p>{data.loanPoints.description}</p>
                            {/* <Link to={`${basePath}`} className='button justify-content-end'>
                                {data.loanPoints.buttonText}
                                <div>
                                    <FaArrowRight />
                                </div>
                            </Link> */}
                        </Col>
                        <Col className='ps-lg-0'>
                            <div className="setsList">
                                <ul className="list-unstyled">
                                    {data.loanPoints.setsPoint.map((data, index) => (
                                        <li className='d-flex' key={index}>
                                            <div className="iconBox">
                                                <img src={data.icon} alt="" className='w-100 h-100' />
                                            </div>
                                            <div className='setsListItem'>
                                                <h1>{data.title}</h1>
                                                <p className='w-100'>{data.text}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <div className="setsBack position-absolute bottom-0 start-0">
                        <img src={data.loanPoints.backPic} alt="" className='w-100 loanBck' />
                        <img src={data.loanPoints.backPic1} alt="" className='w-100 loanBck1 position-absolute top-0 start-0' />
                        <img src={data.loanPoints.backPicSmall} alt="" className='position-absolute setsBack2' />
                    </div>
                </div>
            </section>

            <section className="stepsSection">
                <div className="container">
                    <div className="d-flex flex-column flex-lg-row align-items-center">
                        <div className="stepBox text-white">
                            <h1 className="heading text-white">{data.steps.heading}</h1>
                            <div className="stepHead fw-semibold ">{data.steps.description}</div>
                            <ul className="list-unstyled">
                                {data.steps.steps.map((data, index) => (
                                    <li className='d-flex' key={index}>
                                        <div className="stepNumber">{index + 1}</div>
                                        <div className='stepsofs'>
                                            <span className="fw-semibold">{data.title} : </span>
                                            <span className='fw-light'>{data.step}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <Link to={`${basePath}/apply`} className='button justify-content-end text-white border-white border'>
                                {data.steps.buttonText}
                                <div>
                                    <FaArrowRight />
                                </div>
                            </Link>
                        </div>
                        <div className="stepFlow d-flex align-items-center justify-content-center">
                            <div className="innerBox">
                                <div className='w-100'>
                                    <div className="chatbx1 chactBx11 d-flex border border-white">
                                        <div className="imgbx">
                                            <img src={data.steps.chatBoxData[0].icon} alt="" className='rounded-circle w-100 h-100 object-fit-cover' />
                                        </div>
                                        <div className="chatsAcc">
                                            <h1 className="text-white fw-semibold fs-5 mb-2">{data.steps.chatBoxData[0].name}</h1>
                                            <div className='jakarta text-white'>{data.steps.chatBoxData[0].text}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='mdlBx1 position-relative'>
                                    <img src={data.steps.chatBoxLogo} alt="mpowerfunds" className="mpwrLogo" />
                                </div>
                                <div className='w-100'>
                                    <div className="chatbx1 chatbx2 d-flex border border-white">
                                        <div className="imgbx">
                                            <img src={data.steps.chatBoxData[1].icon} alt="" className='rounded-circle w-100 h-100 object-fit-cover' />
                                        </div>
                                        <div className="chatsAcc">
                                            <h1 className="text-white fw-semibold fs-5 mb-2">{data.steps.chatBoxData[1].name}</h1>
                                            <div className='jakarta text-white'>{data.steps.chatBoxData[1].text}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="loanfaqSection">
                <div className="container">
                    <div className="d-flex flex-column-reverse flex-xl-row align-items-start justify-content-between">
                        <div className="faqImgBox">
                            <img src={data.loanFaq.image} alt="" className='w-100 h-100 object-fit-cover' />
                        </div>
                        <div className="faqArea">
                            <h1 className="heading">{data.loanFaq.heading}</h1>
                            <p className="descript my-3">{data.loanFaq.description}</p>

                            <Accordion defaultActiveKey="0">
                                {data.loanFaq.qa.map((data, index) => (
                                    <Accordion.Item eventKey={index.toString()} key={index} >
                                        <Accordion.Header>{data.question}</Accordion.Header>
                                        <Accordion.Body>
                                            {data.answear}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </div>
            </section>

            <section className="checkLoan">
                <div className="container text-center">
                    <h1 className="heading text-white">{data.checkLoan.heading}</h1>
                    <Link to={`${basePath}/apply`} className="justify-content-end button text-white">
                        {data.checkLoan.buttonText}
                        <div>
                            <FaArrowRight />
                        </div>
                    </Link>
                    <div className="text-center text-white">{data.checkLoan.description}</div>
                </div>
            </section>

            <NewsSlider />
        </>
    )
}

export default Loans
