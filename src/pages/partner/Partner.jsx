import React, { useEffect, useState } from "react";
import "./partner.css";
import { llcData } from "../../constants/llc";
import { incData } from "../../constants/inc";
import { useParams } from "react-router-dom";
import { Form } from "react-bootstrap";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import toast from "react-hot-toast";

const countryMap = {
  us: llcData,
  ca: incData,
};

const Partner = () => {
  const { countryCode } = useParams();
  const [content, setContent] = useState(llcData);

  useEffect(() => {
    const country = (countryCode || "us").toLowerCase();
    setContent(countryMap[country] || llcData);
  }, [countryCode]);

  const data = content.partner;
  
  const basePath = countryCode ? `/${countryCode}` : "";
  // content added

  const [formValues, setFormValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const newErrors = {};

  data.form.forEach((field, index) => {
    if (index < 4 && !formValues[field.name]) {
      newErrors[field.name] = `${field.label} is required`;
    }
  });

  setErrors(newErrors);

  if (Object.keys(newErrors).length > 0) {
    toast.error("Please fill all required fields.");
    return;
  }

  setIsSubmitting(true);

  try {
    // ✅ Google Form payload
    const payload = new URLSearchParams();

    // Append all entry.xxxx fields dynamically
    data.form.forEach((field) => {
      const value = formValues[field.name];
      if (value) {
        payload.append(field.name, value);
      }
    });

    // Required hidden fields
    payload.append("fvv", "1");
    payload.append("pageHistory", "0");
    payload.append("fbzx", Date.now().toString());
    payload.append("submit", "Submit");

    await fetch(data.formApi, {
      method: "POST",
      mode: "no-cors", // ✅ REQUIRED
      body: payload,
    });

    toast.success("Submitted successfully!");
    setFormValues({});
  } catch (error) {
    console.error("Submission error:", error);
    toast.error("Submission failed. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};


  const renderFormField = (field, index) => {
    const commonProps = {
      name: field.name,
      value: formValues[field.name] || "",
      onChange: handleChange,
      isInvalid: !!errors[field.name],
    };

    if (field.type === "radio") {
      return (
        <Form.Group
          className="mb-1 radioInp"
          key={index}
          controlId={field.name}
        >
          <Form.Label>{field.label}</Form.Label>
          <div className="d-flex gap-4">
            {["Yes", "No"].map((option) => (
              <Form.Check
                key={option}
                type="radio"
                label={option}
                name={field.name}
                id={`${field.name}_${option.toLowerCase()}`}
                value={option}
                checked={formValues[field.name] === option}
                onChange={handleChange}
                isInvalid={!!errors[field.name]}
              />
            ))}
          </div>
          <Form.Control.Feedback type="invalid" style={{ display: "block" }}>
            {errors[field.name]}
          </Form.Control.Feedback>
        </Form.Group>
      );
    }

    if (field.type === "select") {
      return (
        <Form.Group className="mb-1" key={index} controlId={field.name}>
          <Form.Label>{field.label}</Form.Label>
          <Form.Select {...commonProps}>
            <option disabled value="">
              Select an option
            </option>
            {field.options.map((option, i) => (
              <option key={i} value={option}>
                {option}
              </option>
            ))}
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            {errors[field.name]}
          </Form.Control.Feedback>
        </Form.Group>
      );
    }

    if (
      field.conditional &&
      formValues[field.conditional] !== field.showIfValue
    )
      return null;

    return (
      <Form.Group className="mb-1" key={index} controlId={field.name}>
        <Form.Label>{field.label}</Form.Label>
        <Form.Control
          as={field.name === "message" ? "textarea" : "input"}
          type={field.type === "message" ? undefined : field.type}
          placeholder={field.label}
          {...commonProps}
        />
        <Form.Control.Feedback type="invalid">
          {errors[field.name]}
        </Form.Control.Feedback>
      </Form.Group>
    );
  };

  return (
    <>
      {/* Banner */}
      <section className="partnerSsectBanner">
        <div className="container">
          <div className="bannerHeader mb-4">{data.banner.heading}</div>
          {data.banner.description.map((item, i) => (
            <p key={i} className="mb-3">
              {item}
            </p>
          ))}
          <div className="d-flex pt-3">
            <button
              className="button justify-content-end ps-3"
              onClick={() => {
                const target = document.getElementById("partnerWithUs");
                if (target) {
                  target.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {data.banner.btnText}
              <div>
                <FaArrowRight />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Get Started */}
      <section className="getstratedSection">
        <div className="container">
          <div className="heading text-white mb-3">
            {data.getStartBox.heading}
          </div>
          <ul className="list-unstyled">
            {data.getStartBox.steps.map((item, i) => (
              <li key={i} className="d-flex text-white gap-2 mb-3">
                <div className="stepNumber">{i + 1}</div>
                <div className="partnerSteps">{item}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why Partner */}
      <section className="whyPartner">
        <div className="container">
          <div className="heading mb-4">{data.partnerUsBox.heading}</div>
          <ul className="list-unstyled">
            {data.partnerUsBox.description.map((item, i) => (
              <li key={i} className="mb-3">
                <div className="d-flex prtStq1 gap-2 mb-3">
                  <FaCheckCircle />
                  <div className="partnerSteps">{item.label}</div>
                </div>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Partner Values */}
      <section className="partnerValueSection text-center">
        <div className="container">
          <div className="heading text-white mb-lg-5">
            {data.partnerValues.heading}
          </div>
          <div className="partvaluesBox">
            {data.partnerValues.values.map((item, i) => (
              <div className="partnerVal text-white" key={i}>
                <div className="partssImg">
                  <img src={item.icon} alt="" />
                </div>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Form */}
      <section className="bePartnerSection contactSection" id="partnerWithUs">
        <div className="container">
          <h1 className="heading mb-3">{data.heading}</h1>
          <p className="mb-4">{data.subheading}</p>
          <form onSubmit={handleSubmit}>
            <div className="partnerSAreas">
              {data.form.map((field, index) => renderFormField(field, index))}
            </div>
            <button
              type="submit"
              className="button justify-content-end mt-4"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Submitting
                </>
              ) : (
                data.buttonText
              )}
              <div>
                <FaArrowRight />
              </div>
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Partner;



//US
// Payload=
// are_you_an_iso: "",
// company_name: "",
// email: "",
// first_name: "",
// industry_other: "",
// industry_type: "",
// last_name: "",
// message: "",
// phone : "",
// state: "",
// website: "",


// Canada
// Payload=
// company_name: "",
// email: "",
// first_name: "",
// industry_other : "",
// industry_type : "",
// last_name : "",
// message: "",
// phone :  "",
// state : "",
// website: "",