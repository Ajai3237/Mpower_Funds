import React, { useEffect, useState } from "react";
import "./contact.css";
import { llcData } from "../../constants/llc";
import { incData } from "../../constants/inc";
import { useParams, Link } from "react-router-dom";
import { Accordion, Form } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import toast from "react-hot-toast";

const countryMap = {
    us: llcData,
    ca: incData,
};

/* ---------------- CONTACT FORM ---------------- */
const ContactForm = () => {
    const { countryCode } = useParams();
    const [content, setContent] = useState(llcData);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const country = (countryCode || "us").toLowerCase();
        setContent(countryMap[country] || llcData);
    }, [countryCode]);

    const data = content.contactPage;

    return (
        <>
            {/* Hidden iframe for Google Forms */}
            <iframe
                name="hidden_iframe"
                style={{ display: "none" }}
                onLoad={() => {
                    if (window.submitted) {
                        toast.success("Enquiry submitted successfully!");
                        setIsSubmitting(false);
                        window.submitted = false;
                    }
                }}
            />

            <form
                action={data.formApi}
                method="POST"
                target="hidden_iframe"
                onSubmit={() => {
                    window.submitted = true;
                    setIsSubmitting(true);
                }}
            >
                {/* REQUIRED hidden fields for Google Forms */}
                <input type="hidden" name="fvv" value="1" />
                <input type="hidden" name="pageHistory" value="0" />
                <input type="hidden" name="fbzx" value={Date.now()} />

                {data.form.map((field, index) => (
                    <Form.Group className="mb-3" key={index}>
                        <Form.Label>{field.label}</Form.Label>

                        <Form.Control
                            as={field.type === "textarea" ? "textarea" : "input"}
                            type={field.type !== "textarea" ? field.type : undefined}
                            name={field.name}
                            placeholder={field.label}
                            required
                        />
                    </Form.Group>
                ))}

                <button type="submit" className="button justify-content-end">
                    {isSubmitting ? "Submitting..." : data.buttonText}
                    <FaArrowRight />
                </button>
            </form>

        </>
    );
};

/* ---------------- CONTACT PAGE ---------------- */
const Contact = () => {
    const { countryCode } = useParams();
    const [content, setContent] = useState(llcData);

    useEffect(() => {
        const country = (countryCode || "us").toLowerCase();
        setContent(countryMap[country] || llcData);
    }, [countryCode]);

    const data = content.contactPage;
    const basePath = countryCode ? `/${countryCode}` : "";

    return (
        <>
            <section className="contactSection">
                <div className="container">
                    <div className="d-flex flex-column flex-lg-row contactctFlex justify-content-between">
                        <div className="cotactForm">
                            <h1 className="heading mb-3">{data.heading}</h1>
                            <p className="mb-4">{data.description}</p>
                            <ContactForm />
                        </div>

                        <div className="contactAddress">
                            <h1>{data.cotactAddress.heading}</h1>

                            {data.cotactAddress.addressBox.map((item, index) => (
                                <div key={index}>
                                    <h2 className="contactAddressHead">{item.heading}</h2>

                                    {item.contact.map((c, i) => {
                                        const Icon = c.icon;
                                        let href = c.path;

                                        if (c.type === "tel") href = `tel:${c.label}`;
                                        else if (c.type === "email") href = `mailto:${c.label}`;
                                        else href = `${basePath}${c.path}`;

                                        return (
                                            <div
                                                key={i}
                                                className="d-flex addressDiv align-items-center"
                                            >
                                                <span className="me-2">
                                                    <Icon />
                                                </span>

                                                {c.as === "link" ? (
                                                    <Link
                                                        to={href}
                                                        className="btn btn-link p-0 text-decoration-none"
                                                    >
                                                        {c.label}
                                                    </Link>
                                                ) : (
                                                    <div>{c.label}</div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* MAP SECTION */}
            <section className="sectionMap">
                <div className="container">
                    <h1 className="heading text-center text-white">
                        {data.locationSection.heading}
                    </h1>
                    <p className="my-4 text-center text-white sectionMapDesc">
                        {data.locationSection.description}
                    </p>
                    <div className="mapBox border">
                        <iframe
                            title="Google Map"
                            src={data.locationSection.mapLocation}
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="loanfaqSection">
                <div className="container">
                    <div className="d-flex flex-column-reverse flex-xl-row align-items-start justify-content-between">
                        <div className="faqImgBox">
                            <img
                                src={data.contactFaq.image}
                                alt=""
                                className="w-100 h-100 object-fit-cover"
                            />
                        </div>

                        <div className="faqArea">
                            <h1 className="heading">{data.contactFaq.heading}</h1>
                            <p className="descript my-3">
                                {data.contactFaq.description}
                            </p>

                            <Accordion defaultActiveKey="0">
                                {data.contactFaq.qa.map((q, index) => (
                                    <Accordion.Item eventKey={index.toString()} key={index}>
                                        <Accordion.Header>{q.question}</Accordion.Header>
                                        <Accordion.Body>{q.answear}</Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
