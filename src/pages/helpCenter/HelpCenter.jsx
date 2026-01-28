import React, { useEffect, useState } from 'react'
import { llcData } from '../../constants/llc';
import { incData } from '../../constants/inc';
import './helpcenter.css'
import { Link, useParams } from 'react-router-dom';
import { FaArrowRight, FaSearch, FaCheckCircle } from 'react-icons/fa';
import { Modal } from 'react-bootstrap';

const countryMap = {
    us: llcData,
    ca: incData,
};

const HelpCenter = () => {
    const { countryCode } = useParams();
    const [content, setContent] = useState(llcData);

    useEffect(() => {
        const country = (countryCode || 'us').toLowerCase();
        setContent(countryMap[country] || llcData);
    }, [countryCode]);

    const data = content.helpCenter;
    const basePath = countryCode ? `/${countryCode}` : '';

    //data collected

    const [show, setShow] = useState(false);
    const [currentAnswer, setCurrentAnswer] = useState('');
    const [currentQuestion, setCurrentQuestion] = useState('');
    const [currentPoints, setCurrentPoints] = useState('');
    const [currentLink, setCurrentLink] = useState('');


    const handleShow = (question, answer, points, link) => {
        setCurrentQuestion(question);
        setCurrentAnswer(answer);
        setCurrentPoints(points);
        setCurrentLink(link)
        setShow(true);
    };

    return (
        <>
            {/* <section className="bannerSection helpBanner">
                <div className="container">
                    <div className="d-flex flex-column-reverse flex-lg-row align-items-center">
                        <div className="bannerImage">
                            <img src={data.banner.image} alt="" className='w-100 h-100 object-fit-lg-cover object-fit-container' />
                        </div>
                        <div className="bannerBox">
                            <h1 className="bannerHeader">{data.banner.heading}</h1>
                            <p className="heading">{data.banner.description}</p>
                            <form className="helpSearch">
                                <label htmlFor="bannerSearch"><FaSearch /></label>
                                <input type="text" id='bannerSearch' placeholder={data.banner.searchPlaceHolder} />
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="applySection">
                <div className="container">
                    <div className=" d-flex flex-column flex-lg-row">
                        {data.applyBox.map((item, index) => (
                            <div className="applyBox" key={index}>
                                <div className="heading text-center text-white">{item.heading}</div>
                                <p className="text-center text-white roboto">{item.description}</p>
                                <Link to={`${basePath}/apply`} className="justify-content-end button text-white">
                                    {item.buttonText}
                                    <div>
                                        <FaArrowRight />
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            <section className="applySectionFaq">
                <div className="container">
                    <div className="heading text-center">{data.faq.heading}</div>
                    <div className="applyFaqBox mb-5 d-flex justify-content-center align-content-stretch gap-3 flex-wrap">
                        {data.faq.faqBox.map((item, index) => (
                            <div key={index} className='faqDivBox'>
                                <h1 className="fw-semibold text-uppercase mb-4">{item.heading}</h1>
                                {item.questionAnswear.map((data, index) => (
                                    <button
                                        key={index}
                                        className='text-start px-0'
                                        onClick={() => handleShow(data.question, data.answear, data.points, data.link)}>
                                        {data.question}
                                    </button>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="supportSection">
                <div className="container">
                    <h1 className="heading text-center text-white">{data.support.heading}</h1>
                    <Link to={`${basePath}/contact`} className="justify-content-end button text-white">
                        {data.support.buttonText}
                        <div>
                            <FaArrowRight />
                        </div>
                    </Link>
                </div>
            </section>

            <Modal show={show} onHide={() => setShow(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title className='faqQuestion'>{currentQuestion}</Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-body-tertiary faqAnswear'>
                    {currentAnswer}
                    {currentPoints &&
                        <ul className='list-unstyled mt-3'>
                            {currentPoints.map((item, index) => (
                                <li className='d-flex gap-2 mb-2' key={index}>
                                    <FaCheckCircle />
                                    <div className='flex-1'>{item}</div>
                                </li>
                            ))}
                        </ul>
                    }
                    {currentLink &&
                        <Link to={`${basePath}${currentLink.path}`} className='ms-1 text-decoration-none'>{currentLink.label}</Link>
                    }
                </Modal.Body>
                <Modal.Footer className='bg-body-tertiary border-0'>
                    {/* <Button variant="secondary" onClick={() => setShow(false)}>Close</Button> */}
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default HelpCenter
