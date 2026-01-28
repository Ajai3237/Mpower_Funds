import React, { useEffect, useState } from 'react';
import './about.css';
import NewsSlider from '../../components/newsSlider/NewsSlider'
import AboutSlider from './AboutSlider';
import { llcData } from '../../constants/llc';
import { incData } from '../../constants/inc';
import { Link, useParams } from 'react-router-dom';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { Col, Row } from 'react-bootstrap';
import { Modal, Button } from 'react-bootstrap';
import toast from 'react-hot-toast';


const countryMap = {
    us: llcData,
    ca: incData,
};

const About = () => {
    const { countryCode } = useParams();
    const [content, setContent] = useState(llcData);

    useEffect(() => {
        const country = (countryCode || 'us').toLowerCase();
        setContent(countryMap[country] || llcData);
    }, [countryCode]);

    const basePath = countryCode ? `/${countryCode}` : '';

    const data = content.aboutPageData;
    // data collection 
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.first_name || !formData.email || !formData.phone) {
            toast.error("Please fill in all required fields.");
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch(data.aiCoach.aiLink,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            if (!response.ok) {
                throw new Error("Failed to submit form");
            }

            toast.success("Form submitted successfully!");


            // Reset form
            setFormData({
                first_name: '',
                last_name: '',
                email: '',
                phone: '',
                message: '',
            });

            handleClose();
        } catch (error) {
            console.error("Submission error:", error);
            toast.error("Submission failed. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {/* <section className="bannerSection aboutBannerArea">
                <div className="container position-relative">
                    <div className="bannerBox">
                        <h1 className="bannerHeader">{data.banner.heading}</h1>
                        <p className="bannerDescription">{data.banner.description}</p>
                        <div className="dataBox d-flex">
                            {data.banner.data.map((data, index) => (
                                <div className="" key={index}>
                                    <h1 className="dataHead fw-bold">{data.number}</h1>
                                    <p className="mb-0 fw-semibold">{data.label}</p>
                                </div>
                            ))}
                        </div>
                        <Link to={`${basePath}/apply`} className="justify-content-end button">
                            {data.banner.buttonText}
                            <div>
                                <FaArrowRight />
                            </div>
                        </Link>
                    </div>
                    <div className="bannerImage position-absolute">
                        <img src={data.banner.image} alt="" className='w-100 h-100 object-fit-lg-cover object-fit-container' />
                    </div>
                </div>
            </section> */}

            <section className="setsApart aboutValue">
                <div className="container">
                    <Row >
                        <Col xl={6}>
                            <h1 className="heading">{data.ourValues.heading}</h1>
                            <p>{data.ourValues.description}</p>
                            {/* <button onClick={handleShow} className='button justify-content-end aiCoach'>
                                {data.ourValues.buttonText}
                                <div>
                                    <FaArrowRight />
                                </div>
                            </button> */}
                        </Col>
                        <Col className='ps-lg-0'>
                            <div className="setsList">
                                <ul className="list-unstyled">
                                    {data.ourValues.setsPoint.map((data, index) => (
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
                    <div className="setsBack position-absolute bottom-0 start-0 pb-xl-5">
                        <img src={data.ourValues.backPic} alt="" className='w-100' />
                        {/* <img src={data.ourValues.backPicSmall} alt="" className='position-absolute setsBack2' /> */}
                    </div>
                </div>
            </section>
            {/* 
            <section className='aboutSlider'>
                <div className="container">
                    <h1 className="heading text-center text-white">{data.history.heading}</h1>
                    <p className="text-center text-white">{data.history.subtitle}</p>
                    <AboutSlider />
                </div>
            </section> */}

            {/* <section className="aourTeam">
                <div className="container">
                    <h1 className="heading text-center mb-5">{data.ourTeam.heading}</h1>
                    <div className="teamBoxes d-flex">
                        {data.ourTeam.team.map((data, index) => (
                            <div className="teamBox" key={index}>
                                <div className="imagBox">
                                    <img src={data.image} alt="" className='w-100 h-100 object-fit-cover' />
                                </div>
                                <div className="fw-semibold teamName text-center">{data.name}</div>
                                <div className="text-center">{data.role}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            <section className="successSection">
                <div className="container">
                    <h1 className="text-center text-white heading">{data.success.heading}</h1>
                    <p className="text-center text-white">{data.success.subheading}</p>
                    <div className={`${countryCode?.toLowerCase() === 'ca' ? 'ca-About' : ''} gridData`}>
                        {data.success.points.map((data, index) => (
                            <div className={`successBox ${'success' + index} `} key={index} >
                                <img src={data.icon} alt="" className="icon" />
                                <div className="text-center text-white">{data.text}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <NewsSlider />

            <Modal show={showModal} onHide={handleClose} centered className='aiCoachModal'>
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h1 className="heading forum">{data.aiCoach.heading}</h1>
                    <div className="d-flex flex-column flex-lg-row align-items-lg-center gap-2">
                        <ul className="list-unstyled modUl mb-3">
                            {data.aiCoach.points.map((item, index) => (
                                <li key={index} className='d-flex gap-2 mb-2'>
                                    <FaCheckCircle />
                                    <div className='flex-1'>{item}</div>
                                </li>
                            ))}
                        </ul>
                        <div className='stamp1 flex-1'>
                            <div className="stampBox m-auto">
                                <img src={data.aiCoach.freeStamp} alt="" className='w-100 object-fit-cover' />
                            </div>
                        </div>
                    </div>

                    <form action="" onSubmit={handleSubmit}>
                        <p className='mb-3'>{data.aiCoach.description}</p>
                        <div className="mfData">
                            {data.aiCoach.form.map((field, index) => (
                                <div className=" frmBx" key={index}>
                                    <label htmlFor={field.name} className="form-label">
                                        {field.label}
                                    </label>

                                    {field.type === "textarea" ? (
                                        <textarea
                                            className="form-control"
                                            id={field.name}
                                            required
                                            name={field.name}
                                            value={formData[field.name]}
                                            onChange={handleChange}
                                            placeholder={field.placeholder || ''}
                                            rows="3"
                                        />
                                    ) : (
                                        <input
                                            type={field.type}
                                            className="form-control"
                                            id={field.name}
                                            name={field.name}
                                            value={formData[field.name]}
                                            onChange={handleChange}
                                            required
                                            placeholder={field.placeholder || ''}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>


                        <Modal.Footer className='border-0 justify-content-start p-0'>
                            <Button type="submit" disabled={isSubmitting} className='button justify-content-end mt-3'>
                                {isSubmitting ? (
                                    <>
                                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
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
            </Modal>
        </>
    )
}

export default About
