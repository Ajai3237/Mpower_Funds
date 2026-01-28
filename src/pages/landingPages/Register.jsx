import React, { useEffect, useRef, useState } from "react";
import "./register.css";
import { llcData } from "../../constants/llc";
import { incData } from "../../constants/inc";
import { Link, Links, useNavigate, useParams } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Footer from "../../components/footer/Footer";
import { Button, Form, Modal, Spinner } from "react-bootstrap";
import toast from "react-hot-toast";
import MetaUpdater from "../../router/MetaUpdater";

const countryMap = {
  us: llcData,
  ca: incData,
};

const DynamicForm = ({ formPart, formApi, heading, description }) => {
  const { countryCode } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState(llcData);

  useEffect(() => {
    const country = (countryCode || "us").toLowerCase();
    setContent(countryMap[country] || llcData);
  }, [countryCode]);

  const data = content.register;

  const basePath = countryCode ? `/${countryCode}` : "";

  //data collected

  const [formData, setFormData] = useState({});
  const [selectedFundNeed, setSelectedFundNeed] = useState("");
  const [loading, setLoading] = useState(false);

  const [modalshow, setModalshow] = useState(false);
  const handleClose = () => {
    setModalshow(false);
    navigate(`${basePath}/register`); // when modal closes, go back to base
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "fund_need") {
      setSelectedFundNeed(value);
    }
  };

  const validateForm = () => {
    for (let field of formPart) {
      // Skip conditional field if condition not met
      if (
        field.conditionalField &&
        formData[field.conditionalField] !== field.conditionalValue
      ) {
        continue;
      }

      if (field.required && !formData[field.name]) {
        toast.error(`Please fill out "${field.label}".`);
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    toast.dismiss();

    // const payload = {
    //   first_name: formData.first_name || "",
    //   last_name: formData.last_name || "",
    //   email: formData.email || "",
    //   phone: formData.phone || "",
    //   funding_amount: formData.funding_amount || "",
    //   funding_purpose:
    //     formData.funding_purpose === "Others"
    //       ? formData.funding_purpose_other || ""
    //       : formData.funding_purpose || "",
    //   residency_status: formData.residency_status || "",
    //   annual_revenue: formData.annual_revenue || "",
    //   business_operating: formData.business_operating || "",
    // };

    const payload = {
      first_name: formData.first_name || "",
      last_name: formData.last_name || "",
      email: formData.email || "",
      phone: formData.phone || "",
      funding_amount: formData.funding_amount || "",
      fund_need: formData.funding_purpose || "",
      fund_need_other: formData.funding_purpose_other || "",
      // funding_purpose:
      //   formData.funding_purpose === "Others"
      //     ? formData.funding_purpose_other || ""
      //     : formData.funding_purpose || "",
      residency_status: formData.residency_status || "",
      annual_revenue: formData.annual_revenue || "",
      business_operating: formData.business_operating || "",
    };

    try {
      const res = await fetch(formApi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Server error");

      toast.success("Form submitted successfully!");
      setFormData({});
      setSelectedFundNeed("");
      e.target.reset();

      setModalshow(true);
      navigate(`${basePath}/thank-you`);
    } catch (error) {
      toast.error(error.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }

    // console.log("payload: ", payload);
    // setTimeout(() => {
    //   toast.success("Form submitted successfully! 🎉");
    //   setFormData({});
    //   setSelectedFundNeed("");
    //   e.target.reset();

    //   setModalshow(true);
    //   navigate(`${basePath}/thank-you`);
    //   setLoading(false);
    // }, 1000);
  };

  useEffect(() => {
    const hideChatWidget = () => {
      const chatWidget = document.querySelector("chat-widget");
      if (chatWidget) {
        chatWidget.style.display = "none";
      }
    };

    // Try immediately in case it's already loaded
    hideChatWidget();

    // Also keep checking in case it loads late
    const interval = setInterval(hideChatWidget, 500);

    return () => {
      clearInterval(interval);
      const chatWidget = document.querySelector("chat-widget");
      if (chatWidget) {
        chatWidget.style.display = "";
      }
    };
  }, []);

  return (
    <>
      <MetaUpdater />
      <h1 className=" heading my-3">{heading}</h1>
      <div>{description}</div>
      <div className="formInputs">
        <Form onSubmit={handleSubmit}>
          <div className="formflxReg">
            {formPart.map((field, index) => {
              // Conditional "Others" logic
              if (
                field.conditionalField &&
                formData[field.conditionalField] !== field.conditionalValue
              ) {
                return null;
              }

              return (
                <Form.Group key={index} className=" formRegBx">
                  <Form.Label>{field.label}</Form.Label>

                  {field.type === "select" ? (
                    <Form.Select
                      name={field.name}
                      onChange={handleChange}
                      required={field.required}
                      value={formData[field.name] || ""}
                    >
                      <option disabled value="">
                        Select...
                      </option>
                      {field.options.map((opt, i) => (
                        <option key={i} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </Form.Select>
                  ) : (
                    <Form.Control
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      min={field.min}
                      max={field.max}
                      value={formData[field.name] || ""}
                      onChange={handleChange}
                      required={field.required}
                    />
                  )}
                </Form.Group>
              );
            })}
          </div>

          <button
            type="submit"
            className="button registerSubmitButton justify-content-end"
            disabled={loading}
          >
            {loading ? (
              <>
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Submitting
                </>
              </>
            ) : (
              "Submit"
            )}
            <div>
              <FaArrowRight />
            </div>
          </button>
        </Form>
      </div>

      <Modal
        show={modalshow}
        onHide={handleClose}
        centered
        className="registerThankModal"
      >
        <Modal.Header closeButton>
          {/* <Modal.Title>Modal heading</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <h1 className="heading text-center">Thank you</h1>
          <div className="pb-3 text-center">
            A Funding Specialist will be in touch within 48 hours to explore the
            best options for you.
          </div>
          <div className="d-flex gap-2 justify-content-center">
            <button className="button " onClick={handleClose}>
              Close
              <div>
                <FaArrowRight />
              </div>
            </button>
            <Link
              to={`${basePath}/services`}
              className="button button1 "
              onClick={handleClose}
            >
              Explore More
              <div>
                <FaArrowRight />
              </div>
            </Link>
          </div>
        </Modal.Body>
        <Modal.Footer className="border-0">
          {/* <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
};

const Register = () => {
  const { countryCode } = useParams();
  const [content, setContent] = useState(llcData);

  useEffect(() => {
    const country = (countryCode || "us").toLowerCase();
    setContent(countryMap[country] || llcData);
  }, [countryCode]);

  const data = content.register;

  const basePath = countryCode ? `/${countryCode}` : "";

  //data collected

  const navRef = useRef(null); // imp
  const [isOpen, setIsOpen] = useState(false); //imp
  const [isScrolled, setIsScrolled] = useState(false); //imp

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed-top ${isScrolled || isOpen ? "bluredBack" : ""} `}
        ref={navRef}
      >
        <nav className="navbar navbar-expand-lg">
          <div className="container position-relative">
            <Link className="navbar-brand m-auto m-sm-0" to={`${basePath}/`}>
              <img
                src={data.navigation.navbarIcon}
                alt="Logo"
                className="navLogo"
              />
            </Link>

            <ul className="list-unstyled lastMenu lastmenu1 mb-lg-0 mb-2 end-0 m-0">
              <li className="nav-item">
                <Link
                  to={`${basePath}/contact`}
                  className="button rgstrBtns navbDisc justify-content-end position-relative nav-link "
                >
                  {data.navigation.navbarText}
                  <div className=" right-0">
                    <FaArrowRight />
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <section className="registersection">
        <div className="container">
          <div className="py-5 mt-5">
            <h1 className=" heading my-3">{data.heading}</h1>
            <p>{data.subTitle}</p>
            <div className="">{data.description1}</div>
            <p className="">{data.description2}</p>
            <div className="d-flex pt-3 ">
              <button
                className="button justify-content-end ps-3 mx-auto d-flex d-sm-none"
                onClick={() => {
                  const target = document.getElementById("registerBox");
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {data.btnText}
                <div>
                  <FaArrowRight />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="registerBox my-3 py-4" id="registerBox">
        <div className="container">
          {/* <h1 className=" heading my-3">{data.registerBox.heading}</h1> */}
          {/* <div>{data.registerBox.description}</div> */}
          {/* <div className="formInputs"> */}
          <DynamicForm
            formPart={data.registerBox.formPart}
            formApi={data.formApi}
            heading={data.registerBox.heading}
            description={data.registerBox.description}
          />

          {/* </div> */}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Register;

// annual_revenue
// business_operating
// email
// first_name
// funding_amount
// funding_purpose
// last_name
// phone
// residency_status
