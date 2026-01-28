import React, { useEffect, useMemo, useRef, useState } from "react";
import "./applyNow.css";
import { llcData } from "../../constants/llc";
import { incData } from "../../constants/inc";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";
import Footer from "../../components/footer/Footer";
import { icons } from "../../constants/icons";
import { FaArrowLeft, FaArrowRight, FaCheckCircle } from "react-icons/fa";
import toast from "react-hot-toast";
import DatePicker from "react-datepicker";
import { Form } from "react-bootstrap";
import MetaUpdater from "../../router/MetaUpdater";

const countryMap = {
  us: llcData,
  ca: incData,
};

const ApplyNow = () => {
  const { countryCode } = useParams();
  const [content, setContent] = useState(llcData);

  useEffect(() => {
    const country = (countryCode || "us").toLowerCase();
    setContent(countryMap[country] || llcData);
  }, [countryCode]);

  const data = content.applyNow;

  const basePath = countryCode ? `/${countryCode}` : "";

  //data collected

  const [submitted, setSubmitted] = useState(false);
  const navRef = useRef(null); // imp
  const [isOpen, setIsOpen] = useState(false); //imp
  const [isScrolled, setIsScrolled] = useState(false); //imp
  const [step, setStep] = useState(0); // Tracks current step
  const [formData, setFormData] = useState({}); // Stores all inputs
  const [loading, setLoading] = useState(false); // For spinner
  const [isValid, setIsValid] = useState(false);

  const currentStep = data.formArea.formSteps[step];

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

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  // new
  useEffect(() => {
    const formSteps = data.formArea.formSteps;
    const currentStepData = formSteps[step];

    if (!currentStepData) {
      setIsValid(false);
      return;
    }
    if (countryCode?.toLowerCase() === "ca") {
    } else {
      // Step 7: Date of Birth
      if (step === 7) {
        const dob = formData.date_of_birth;
        const isValidDate = dob && !isNaN(new Date(dob).getTime());
        setIsValid(isValidDate);
        return;
      }
    }

    // Step 5: Purpose of funding – select with optional "Other"
    if (step === 5) {
      const selected = formData.purpose_of_funding;
      const isOther = selected === "Other";
      const otherVal = formData.other_purpose;

      if (!selected || selected.trim() === "") {
        setIsValid(false);
        return;
      }

      if (isOther && (!otherVal || otherVal.trim() === "")) {
        setIsValid(false);
        return;
      }

      setIsValid(true);
      return;
    }

    // Step 5: Funding Amount Range
    if (currentStepData.heading === "Select Funding ammount") {
      const amount = formData.funding_amount;
      setIsValid(amount >= 1000 && amount <= 50000);
      return;
    }

    // Radio group step (like step 2, 3, 4, 7) - if all selections have no `type`
    if (
      currentStepData.selections &&
      currentStepData.selections.every((s) => s.type === "radio" || !s.type)
    ) {
      const selectedValue = formData[step];
      setIsValid(
        typeof selectedValue === "string" && selectedValue.trim() !== ""
      );
      return;
    }

    // Steps with inputs: text, email, number, textarea (like step 0, 1, 9)
    if (
      currentStepData.selections &&
      currentStepData.selections.every((s) => s.type)
    ) {
      // const allValid = currentStepData.selections.every(field => {
      //     const value = formData[field.value];
      //     // Skip validation if field is conditionally hidden
      //     if (
      //         field.conditionalOn &&
      //         formData[field.conditionalOn.field] !== field.conditionalOn.value
      //     ) {
      //         return true;
      //     }

      //     return value && value.toString().trim() !== "";
      // });

      const allValid = currentStepData.selections.every((field) => {
        // If field is explicitly not required → skip validation
        if (field.required === false) return true;

        const value = formData[field.value];
        // Skip validation if field is conditionally hidden
        if (
          field.conditionalOn &&
          formData[field.conditionalOn.field] !== field.conditionalOn.value
        ) {
          return true;
        }

        return value && value.toString().trim() !== "";
      });

      // If 'Other' is selected in purpose of funding, validate the extra field
      if (formData.purpose_of_funding === "Other") {
        if (!formData.other_purpose || formData.other_purpose.trim() === "") {
          setIsValid(false);
          return;
        }
      }

      setIsValid(allValid);
      return;
    }

    // Fallback: numeric input (though not currently used)
    const value = formData[step];
    const valid = value !== undefined && !isNaN(value) && Number(value) > 0;
    setIsValid(valid);
  }, [formData, step, data.formArea.formSteps]);
  
// USA
  const handleNext = (e) => {
    e.preventDefault();

    // Only block for non-final steps
    if (step < data.formArea.formSteps.length - 1 && !isValid) {
      toast.error("Please enter a valid input ca.");
      return;
    }

    setLoading(true);

    if (step < data.formArea.formSteps.length - 1) {
      setStep((prev) => prev + 1);
    } else {
      // FINAL STEP — ALWAYS SUBMIT
      handleSubmit();
    }

    setTimeout(() => setLoading(false), 500);
  };



  const handleSubmit = () => {
  const form = document.createElement("form");
  form.action = data.formApi; // FROM constants/inc.js
  form.method = "POST";
  form.target = "_self";

  const append = (name, value) => {
    if (!name) return;
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = name;
    input.value = value ?? "";
    form.appendChild(input);
  };

  const formSteps = data?.formArea?.formSteps || [];

  formSteps.forEach((stepConfig, stepIndex) => {
    // 1️⃣ Steps with selections
    if (Array.isArray(stepConfig.selections)) {
      stepConfig.selections.forEach((field) => {
        if (!field.entry) return;

        // Text / number / email fields
        if (field.value && formData[field.value] !== undefined) {
          append(field.entry, formData[field.value]);
        }

        // Radio / select fields (stored by step index)
        if (
          !field.value &&
          typeof formData[stepIndex] === "string"
        ) {
          append(field.entry, formData[stepIndex]);
        }
      });
    }

    // 2️⃣ Slider / single-value steps (funding amount)
    if (stepConfig.entry && stepConfig.value) {
      if (formData[stepConfig.value] !== undefined) {
        append(stepConfig.entry, formData[stepConfig.value]);
      }
    }
  });

  // 3️⃣ Special case: "Other" purpose
  if (
    formData.purpose_of_funding === "Other" &&
    formData.other_purpose
  ) {
    append("entry.157222972", formData.other_purpose);
  }

  document.body.appendChild(form);
  form.submit();
};



  // for ca
  const handleNextCa = (e) => {
  e.preventDefault();

  // Only block navigation, not final submit
  if (step < data.formArea.formSteps.length - 1 && !isValid) {
    toast.error("Please enter a valid input.");
    return;
  }

  setLoading(true);

  if (step < data.formArea.formSteps.length - 1) {
    setStep((prev) => prev + 1);
  } else {
    // ✅ USE HTML FORM SUBMIT (same as US)
    handleSubmit();
  }

  setTimeout(() => setLoading(false), 500);
};


  const handleSubmitCa = async () => {
    setLoading(true);

    const payload = {
      business_operating_years: formData[2], //2
      average_monthly_revenue: formData.monthly_revenue, //
      first_name: formData.first_name, //
      last_name: formData.last_name, //
      business_name: formData.business_name, //
      date_of_birth: " ", //
      email: formData.email, //
      phone: formData.phone, //
      home_address: " ", //
      business_type: formData[6], //6
      business_operating_name: formData.business_operating_name || " ",
      business_legal_name: formData.business_legal_name || " ",
      industry_type: formData[1], //1
      business_address: formData.business_address || formData.company_website, //
      funding_amount: formData.funding_amount, //
      purpose_of_funding:
        formData.purpose_of_funding === "Other"
          ? formData.other_purpose || "Other"
          : formData.purpose_of_funding,
    };

    try {
      const response = await fetch(data.formApi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      // console.log("payload", payload)
      toast.success("Submitted successfully!");
      setFormData({});
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Submission failed. Please try again.");
    } finally {
      setSubmitted(true);
      setLoading(false);
    }

    // console.log("payload: ", payload);
    // setTimeout(() => {
    //   toast.success("Form submitted successfully! 🎉");
    //   setFormData({});
    //   setSubmitted(true);
    //   setLoading(false);
    // }, 1000);
  };

  const handleChange = (e, fieldName) => {
    setFormData({
      ...formData,
      [fieldName]: e.target.value,
    });
  };

  return (
    <>
      <MetaUpdater />
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
                  to={`${basePath}/partner`}
                  className="button navbDisc justify-content-end position-relative nav-link "
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

      <section className="applyNowSection">
        <div className="container">
          {!submitted && (
            <div className="formAreaApply">
              <div className="progress" role="progressbar">
                <div
                  className="progress-bar"
                  style={{
                    width: `${((step + 1) / data.formArea.formSteps.length) * 100
                      }%`,
                    transition: "width 0.5s ease",
                  }}
                ></div>
              </div>
              <form
                action=""
                className="py-3"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                {loading ? (
                  <div className="text-center applyLOader d-flex align-items-center justify-content-center">
                    <div
                      className="spinner-border text-primary"
                      role="status"
                    ></div>
                  </div>
                ) : countryCode?.toLowerCase() === "ca" ? (
                  <div className="applyAreaOnArea">
                    <h1 className="heading mt-3 fw-semibold text-center">
                      {data.formArea.formSteps[step].heading}
                    </h1>
                    <p>{data.formArea.formSteps[step].description}</p>
                    <div className="applyAreaInput">
                      {step === 0 ? (
                        data.formArea.formSteps[step].selections.map(
                          (field, index) => {
                            if (
                              field.conditionalOn &&
                              formData[field.conditionalOn.field] !==
                              field.conditionalOn.value
                            ) {
                              return null;
                            }

                            // Render select field
                            if (field.type === "select" && field.options) {
                              return (
                                <Form.Group
                                  className="mb-3"
                                  key={index}
                                  controlId={field.value}
                                >
                                  <Form.Label>{field.label}</Form.Label>
                                  <Form.Select
                                    value={formData[field.value] || ""}
                                    onChange={(e) =>
                                      handleChange(e, field.value)
                                    }
                                  >
                                    <option disabled value="">
                                      Select
                                    </option>
                                    {field.options.map((opt, i) => (
                                      <option key={i} value={opt}>
                                        {opt}
                                      </option>
                                    ))}
                                  </Form.Select>
                                </Form.Group>
                              );
                            }

                            return (
                              <Form.Group
                                className="mb-3"
                                key={index}
                                controlId={field.value}
                              >
                                <Form.Label>{field.label}</Form.Label>
                                <Form.Control
                                  type={field.type}
                                  placeholder={field.label}
                                  value={formData[field.value] || ""}
                                  onChange={(e) => handleChange(e, field.value)}
                                />
                              </Form.Group>
                            );
                          }
                        )
                      ) : step === 1 ? (
                        <>
                          {currentStep.selections.map((option, index) => (
                            <div
                              key={index}
                              className="form-check applyRadioBox"
                            >
                              <input
                                className="applyRadio d-none"
                                type="radio"
                                id={`business-type-${index}`}
                                name="business_type"
                                value={option.value}
                                required
                                checked={formData[step] === option.value}
                                onChange={(e) =>
                                  setFormData((prev) => ({
                                    ...prev,
                                    [step]: e.target.value,
                                  }))
                                }
                              />
                              <label
                                htmlFor={`business-type-${index}`}
                                className="form-check-label"
                              >
                                {option.label}
                                <span>
                                  <FaCheckCircle />
                                </span>
                              </label>
                            </div>
                          ))}
                        </>
                      ) : step === 2 ? (
                        <>
                          {currentStep.selections.map((option, index) => (
                            <div
                              key={index}
                              className="form-check applyRadioBox"
                            >
                              <input
                                className="applyRadio d-none"
                                type="radio"
                                id={`business-type-${index}`}
                                name="business_type"
                                value={option.value}
                                required
                                checked={formData[step] === option.value}
                                onChange={(e) =>
                                  setFormData((prev) => ({
                                    ...prev,
                                    [step]: e.target.value,
                                  }))
                                }
                              />
                              <label
                                htmlFor={`business-type-${index}`}
                                className="form-check-label"
                              >
                                {option.value}
                                <span>
                                  <FaCheckCircle />
                                </span>
                              </label>
                            </div>
                          ))}
                        </>
                      ) : step === 3 ? (
                        <>
                          {currentStep.selections.map((field, index) => (
                            <Form.Group
                              className="mb-3"
                              key={index}
                              controlId={field.value}
                            >
                              {/* <Form.Label>{field.label}</Form.Label> */}
                              <Form.Control
                                type={field.type}
                                placeholder={field.label}
                                value={formData[field.value] || ""}
                                onChange={(e) => handleChange(e, field.value)}
                              />
                            </Form.Group>
                          ))}
                        </>
                      ) : step === 4 ? (
                        <>
                          <div className="pb-3">
                            <div className="text-center heading headingApply">
                              ${parseInt(formData.funding_amount || 1000)}
                            </div>
                            <input
                              type="range"
                              id="funding_amount"
                              className="range-slider"
                              min={data.formArea.formSteps[step].min}
                              max={data.formArea.formSteps[step].max}
                              required
                              step={100}
                              value={
                                formData.funding_amount ||
                                data.formArea.formSteps[step].min
                              }
                              onChange={(e) =>
                                setFormData((prev) => ({
                                  ...prev,
                                  funding_amount: parseInt(e.target.value, 10),
                                }))
                              }
                            />
                            <div className="range-labels d-flex justify-content-between mt-2 pt-1 pb-2 mb-4">
                              <span>
                                ${data.formArea.formSteps[step].minVal}
                              </span>
                              <span>
                                ${data.formArea.formSteps[step].maxVal}
                              </span>
                            </div>
                            <div className="input-group mt-2">
                              <span className="input-group-text">
                                {data.formArea.formSteps[step].unit}
                              </span>

                              <input
                                type="number"
                                className="form-control"
                                required
                                placeholder="Enter amount"
                                min={data.formArea.formSteps[step].min}
                                max={data.formArea.formSteps[step].max}
                                value={formData.funding_amount || ""}
                                onChange={(e) => {
                                  const val = parseInt(e.target.value, 10);
                                  if (!isNaN(val)) {
                                    setFormData((prev) => ({
                                      ...prev,
                                      funding_amount: val,
                                    }));
                                  } else {
                                    setFormData((prev) => ({
                                      ...prev,
                                      funding_amount: "",
                                    }));
                                  }
                                }}
                              />
                            </div>
                          </div>
                        </>
                      ) : step === 5 ? (
                        <>
                          <Form.Group
                            className="mb-3"
                            controlId="purpose_of_funding"
                          >
                            <Form.Label className="applyInputLabel">
                              Purpose of Funding
                            </Form.Label>
                            <Form.Select
                              required
                              className="applyInput"
                              value={formData.purpose_of_funding || ""}
                              onChange={(e) => {
                                const value = e.target.value;
                                setFormData((prev) => ({
                                  ...prev,
                                  purpose_of_funding: value,
                                  other_purpose:
                                    value === "Other" ? "" : prev.other_purpose,
                                }));
                              }}
                            >
                              <option value="">Select</option>
                              {data.formArea.formSteps[step].selections.map(
                                (option, idx) => (
                                  <option key={idx} value={option.value}>
                                    {option.value}
                                  </option>
                                )
                              )}
                            </Form.Select>
                          </Form.Group>

                          {/* Conditional field for "Other" option */}
                          {formData.purpose_of_funding === "Other" && (
                            <Form.Group
                              className="mb-3"
                              controlId="other_purpose"
                            >
                              <Form.Label className="applyInputLabel">
                                Please specify
                              </Form.Label>
                              <Form.Control
                                required
                                type="text"
                                className="applyInput"
                                placeholder="Enter custom purpose"
                                value={formData.other_purpose || ""}
                                onChange={(e) =>
                                  setFormData((prev) => ({
                                    ...prev,
                                    other_purpose: e.target.value,
                                  }))
                                }
                              />
                            </Form.Group>
                          )}
                        </>
                      ) : step === 6 ? (
                        <>
                          {currentStep.selections.map((option, index) => (
                            <div
                              key={index}
                              className="form-check applyRadioBox"
                            >
                              <input
                                className="applyRadio d-none"
                                type="radio"
                                id={`business-type-${index}`}
                                name="business_type"
                                value={option.value}
                                required
                                checked={formData[step] === option.value}
                                onChange={(e) =>
                                  setFormData((prev) => ({
                                    ...prev,
                                    [step]: e.target.value,
                                  }))
                                }
                              />
                              <label
                                htmlFor={`business-type-${index}`}
                                className="form-check-label"
                              >
                                {option.value}
                                <span>
                                  <FaCheckCircle />
                                </span>
                              </label>
                            </div>
                          ))}
                        </>
                      ) : // : step === 7 ? (
                        //   <>
                        //     <div className="mb-3">
                        //       <DatePicker
                        //         selected={
                        //           formData.date_of_birth
                        //             ? new Date(formData.date_of_birth)
                        //             : null
                        //         }
                        //         onChange={(date) =>
                        //           setFormData((prev) => ({
                        //             ...prev,
                        //             date_of_birth: date
                        //               .toISOString()
                        //               .split("T")[0],
                        //           }))
                        //         }
                        //         dateFormat="dd/MM/yyyy"
                        //         showMonthDropdown
                        //         showYearDropdown
                        //         dropdownMode="select"
                        //         className="form-control"
                        //         placeholderText="Select DOB (dd/mm/yyyy)"
                        //         maxDate={
                        //           new Date(
                        //             new Date().setFullYear(
                        //               new Date().getFullYear() - 18
                        //             )
                        //           )
                        //         }
                        //       />
                        //     </div>
                        //   </>
                        // ) : step === 8 ? (
                        //   <>
                        //     {currentStep.selections.map((option, index) => (
                        //       <div key={index} className="form-check">
                        //         <label
                        //           htmlFor={option.value}
                        //           className="form-label"
                        //         >
                        //           {option.label}
                        //         </label>
                        //         <textarea
                        //           id={option.value}
                        //           required
                        //           className="form-control"
                        //           placeholder={option.label}
                        //           value={formData[option.value] || ""}
                        //           onChange={(e) =>
                        //             setFormData((prev) => ({
                        //               ...prev,
                        //               [option.value]: e.target.value,
                        //             }))
                        //           }
                        //         />
                        //       </div>
                        //     ))}
                        //   </>
                        // )
                        step === 7 ? (
                          <>
                            {data.formArea.formSteps[step].selections.map(
                              (field) => (
                                <div className="pb-3" key={field.value}>
                                  <label
                                    htmlFor={field.value}
                                    className="form-label"
                                  >
                                    {field.label}
                                  </label>
                                  <input
                                    type={field.type}
                                    id={field.value}
                                    className="form-control"
                                    placeholder={field.label}
                                    value={formData[field.value] || ""}
                                    onChange={(e) =>
                                      setFormData((prev) => ({
                                        ...prev,
                                        [field.value]: e.target.value,
                                      }))
                                    }
                                    required
                                  />
                                </div>
                              )
                            )}
                          </>
                        ) : null}
                      <div className="d-flex btnapl gap-2 mt-3">
                        {step > 0 && (
                          <button
                            type="button"
                            className="button w-100 bckBtnApl"
                            onClick={handleBack}
                          >
                            <div className="position-absolute right-0">
                              <FaArrowLeft />
                            </div>
                            <span className="text-center w-100"> Back</span>
                          </button>
                        )}
                        <button
                          type={
                            step < data.formArea.formSteps.length - 1
                              ? "button"
                              : "submit"
                          }
                          className={`button w-100 ${!isValid ? "disabled-look" : ""
                            }`}
                          onClick={handleNextCa}
                        >
                          <span className="text-center w-100">
                            {step < data.formArea.formSteps.length - 1
                              ? "Next"
                              : "Submit"}
                          </span>
                          <div className="position-absolute right-0">
                            <FaArrowRight />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="applyAreaOnArea">
                    <h1 className="heading mt-3 fw-semibold text-center">
                      {data.formArea.formSteps[step].heading}
                    </h1>
                    <p>{data.formArea.formSteps[step].description}</p>
                    <div className="applyAreaInput">
                      {step === 0 ? (
                        data.formArea.formSteps[step].selections.map(
                          (field, index) => {
                            // Conditionally hide LinkedIn URL if not selected "Yes"
                            if (
                              field.conditionalOn &&
                              formData[field.conditionalOn.field] !==
                              field.conditionalOn.value
                            ) {
                              return null;
                            }

                            // Render select field
                            if (field.type === "select" && field.options) {
                              return (
                                <Form.Group
                                  className="mb-3"
                                  key={index}
                                  controlId={field.value}
                                >
                                  <Form.Label>{field.label}</Form.Label>
                                  <Form.Select
                                    value={formData[field.value] || ""}
                                    onChange={(e) =>
                                      handleChange(e, field.value)
                                    }
                                  >
                                    <option disabled value="">
                                      Select
                                    </option>
                                    {field.options.map((opt, i) => (
                                      <option key={i} value={opt}>
                                        {opt}
                                      </option>
                                    ))}
                                  </Form.Select>
                                </Form.Group>
                              );
                            }

                            // Render all other input fields (text, number, email, etc.)
                            return (
                              <Form.Group
                                className="mb-3"
                                key={index}
                                controlId={field.value}
                              >
                                <Form.Label>{field.label}</Form.Label>
                                <Form.Control
                                  type={field.type}
                                  placeholder={field.label}
                                  value={formData[field.value] || ""}
                                  onChange={(e) => handleChange(e, field.value)}
                                />
                              </Form.Group>
                            );
                          }
                        )
                      ) : step === 1 ? (
                        <>
                          {currentStep.selections.map((option, index) => (
                            <div
                              key={index}
                              className="form-check applyRadioBox"
                            >
                              <input
                                className="applyRadio d-none"
                                type="radio"
                                id={`business-type-${index}`}
                                name="business_type"
                                value={option.value}
                                required
                                checked={formData[step] === option.value}
                                onChange={(e) =>
                                  setFormData((prev) => ({
                                    ...prev,
                                    [step]: e.target.value,
                                  }))
                                }
                              />
                              <label
                                htmlFor={`business-type-${index}`}
                                className="form-check-label"
                              >
                                {option.label}
                                <span>
                                  <FaCheckCircle />
                                </span>
                              </label>
                            </div>
                          ))}
                        </>
                      ) : step === 2 ? (
                        <>
                          {currentStep.selections.map((option, index) => (
                            <div
                              key={index}
                              className="form-check applyRadioBox"
                            >
                              <input
                                className="applyRadio d-none"
                                type="radio"
                                id={`business-type-${index}`}
                                name="business_type"
                                value={option.value}
                                required
                                checked={formData[step] === option.value}
                                onChange={(e) =>
                                  setFormData((prev) => ({
                                    ...prev,
                                    [step]: e.target.value,
                                  }))
                                }
                              />
                              <label
                                htmlFor={`business-type-${index}`}
                                className="form-check-label"
                              >
                                {option.value}
                                <span>
                                  <FaCheckCircle />
                                </span>
                              </label>
                            </div>
                          ))}
                        </>
                      ) : step === 3 ? (
                        <>
                          {currentStep.selections.map((field, index) => (
                            <Form.Group
                              className="mb-3"
                              key={index}
                              controlId={field.value}
                            >
                              {/* <Form.Label>{field.label}</Form.Label> */}
                              <Form.Control
                                type={field.type}
                                placeholder={field.label}
                                value={formData[field.value] || ""}
                                onChange={(e) => handleChange(e, field.value)}
                              />
                            </Form.Group>
                          ))}
                        </>
                      ) : step === 4 ? (
                        <>
                          <div className="pb-3">
                            <div className="text-center heading headingApply">
                              ${parseInt(formData.funding_amount || 1000)}
                            </div>
                            <input
                              type="range"
                              id="funding_amount"
                              className="range-slider"
                              min={data.formArea.formSteps[step].min}
                              max={data.formArea.formSteps[step].max}
                              required
                              step={100}
                              value={
                                formData.funding_amount ||
                                data.formArea.formSteps[step].min
                              }
                              onChange={(e) =>
                                setFormData((prev) => ({
                                  ...prev,
                                  funding_amount: parseInt(e.target.value, 10),
                                }))
                              }
                            />
                            <div className="range-labels d-flex justify-content-between mt-2 pt-1 pb-2 mb-4">
                              <span>
                                ${data.formArea.formSteps[step].minVal}
                              </span>
                              <span>
                                ${data.formArea.formSteps[step].maxVal}
                              </span>
                            </div>
                            <div className="input-group mt-2">
                              <span className="input-group-text">
                                {data.formArea.formSteps[step].unit}
                              </span>

                              <input
                                type="number"
                                className="form-control"
                                required
                                placeholder="Enter amount"
                                min={data.formArea.formSteps[step].min}
                                max={data.formArea.formSteps[step].max}
                                value={formData.funding_amount || ""}
                                onChange={(e) => {
                                  const val = parseInt(e.target.value, 10);
                                  if (!isNaN(val)) {
                                    setFormData((prev) => ({
                                      ...prev,
                                      funding_amount: val,
                                    }));
                                  } else {
                                    setFormData((prev) => ({
                                      ...prev,
                                      funding_amount: "",
                                    }));
                                  }
                                }}
                              />
                            </div>
                          </div>
                        </>
                      ) : step === 5 ? (
                        <>
                          <Form.Group
                            className="mb-3"
                            controlId="purpose_of_funding"
                          >
                            <Form.Label className="applyInputLabel">
                              Purpose of Funding
                            </Form.Label>
                            <Form.Select
                              required
                              className="applyInput"
                              value={formData.purpose_of_funding || ""}
                              onChange={(e) => {
                                const value = e.target.value;
                                setFormData((prev) => ({
                                  ...prev,
                                  purpose_of_funding: value,
                                  other_purpose:
                                    value === "Other" ? "" : prev.other_purpose,
                                }));
                              }}
                            >
                              <option value="">Select</option>
                              {data.formArea.formSteps[step].selections.map(
                                (option, idx) => (
                                  <option key={idx} value={option.value}>
                                    {option.value}
                                  </option>
                                )
                              )}
                            </Form.Select>
                          </Form.Group>

                          {/* Conditional field for "Other" option */}
                          {formData.purpose_of_funding === "Other" && (
                            <Form.Group
                              className="mb-3"
                              controlId="other_purpose"
                            >
                              <Form.Label className="applyInputLabel">
                                Please specify
                              </Form.Label>
                              <Form.Control
                                required
                                type="text"
                                className="applyInput"
                                placeholder="Enter custom purpose"
                                value={formData.other_purpose || ""}
                                onChange={(e) =>
                                  setFormData((prev) => ({
                                    ...prev,
                                    other_purpose: e.target.value,
                                  }))
                                }
                              />
                            </Form.Group>
                          )}
                        </>
                      ) : step === 6 ? (
                        <>
                          {currentStep.selections.map((option, index) => (
                            <div
                              key={index}
                              className="form-check applyRadioBox"
                            >
                              <input
                                className="applyRadio d-none"
                                type="radio"
                                id={`business-type-${index}`}
                                name="business_type"
                                value={option.value}
                                required
                                checked={formData[step] === option.value}
                                onChange={(e) =>
                                  setFormData((prev) => ({
                                    ...prev,
                                    [step]: e.target.value,
                                  }))
                                }
                              />
                              <label
                                htmlFor={`business-type-${index}`}
                                className="form-check-label"
                              >
                                {option.value}
                                <span>
                                  <FaCheckCircle />
                                </span>
                              </label>
                            </div>
                          ))}
                        </>
                      ) : step === 7 ? (
                        <>
                          <div className="mb-3">
                            <DatePicker
                              selected={
                                formData.date_of_birth
                                  ? new Date(formData.date_of_birth)
                                  : null
                              }
                              onChange={(date) =>
                                setFormData((prev) => ({
                                  ...prev,
                                  date_of_birth: date
                                    .toISOString()
                                    .split("T")[0],
                                }))
                              }
                              dateFormat="dd/MM/yyyy"
                              showMonthDropdown
                              showYearDropdown
                              dropdownMode="select"
                              className="form-control"
                              placeholderText="Select DOB (dd/mm/yyyy)"
                              maxDate={
                                new Date(
                                  new Date().setFullYear(
                                    new Date().getFullYear() - 18
                                  )
                                )
                              }
                            />
                          </div>
                        </>
                      ) : step === 8 ? (
                        <>
                          {currentStep.selections.map((option, index) => (
                            <div key={index} className="form-check">
                              <label
                                htmlFor={option.value}
                                className="form-label"
                              >
                                {option.label}
                              </label>
                              <textarea
                                id={option.value}
                                required
                                className="form-control"
                                placeholder={option.label}
                                value={formData[option.value] || ""}
                                onChange={(e) =>
                                  setFormData((prev) => ({
                                    ...prev,
                                    [option.value]: e.target.value,
                                  }))
                                }
                              />
                            </div>
                          ))}
                        </>
                      ) : step === 9 ? (
                        <>
                          {data.formArea.formSteps[step].selections.map(
                            (field) => (
                              <div className="pb-3" key={field.value}>
                                <label
                                  htmlFor={field.value}
                                  className="form-label"
                                >
                                  {field.label}
                                </label>
                                <input
                                  type={field.type}
                                  id={field.value}
                                  className="form-control"
                                  placeholder={field.label}
                                  value={formData[field.value] || ""}
                                  onChange={(e) =>
                                    setFormData((prev) => ({
                                      ...prev,
                                      [field.value]: e.target.value,
                                    }))
                                  }
                                  required
                                />
                              </div>
                            )
                          )}
                        </>
                      ) : null}
                      <div className="d-flex btnapl gap-2 mt-3">
                        {step > 0 && (
                          <button
                            type="button"
                            className="button w-100 bckBtnApl"
                            onClick={handleBack}
                          >
                            <div className="position-absolute right-0">
                              <FaArrowLeft />
                            </div>
                            <span className="text-center w-100"> Back</span>
                          </button>
                        )}
                        <button
                          type={
                            step < data.formArea.formSteps.length - 1
                              ? "button"
                              : "submit"
                          }
                          className={`button w-100 ${!isValid ? "disabled-look" : ""
                            }`}
                          onClick={handleNext}
                        >
                          <span className="text-center w-100">
                            {step < data.formArea.formSteps.length - 1
                              ? "Next"
                              : "Submit"}
                          </span>
                          <div className="position-absolute right-0">
                            <FaArrowRight />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </form>
              <p className="text-center">{data.formArea.disclaimer}</p>
              <p className="text-center">{data.formArea.lastLine}</p>
            </div>
          )}
          {submitted && (
            <div className="afterSubmit">
              <div className="heading text-center">
                {data.formArea.afterApply.heading}
              </div>
              <p className="text-center">
                {data.formArea.afterApply.description}
              </p>
              <div className="afterApplyImage">
                <img
                  src={data.formArea.afterApply.image}
                  alt=""
                  className="w-100 h-100 object-fit-cover"
                />
              </div>
              <Link
                to={`${basePath}/`}
                className="button justify-content-start"
              >
                <div>
                  <FaArrowRight />
                </div>
                {data.formArea.afterApply.buttonText}
              </Link>
            </div>
          )}
        </div>
      </section>

      <section className="joineUsHome">
        <div className="container">
          <h1 className="heading text-center">{data.joinUs.heading}</h1>
          <p className="roboto">{data.joinUs.description}</p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ApplyNow;

// average_monthly_revenue : "",
// business_address : "",
// business_legal_name : "",
// business_name : "",
// business_operating_name: "", {not needed}
// business_operating_years : "", {not needed}
// business_type : "",
// date_of_birth : "",
// email : "",
// first_name: "",
// funding_amount : "",
// home_address : "",
// industry_type : "",
// last_name : "",
// phone : "",
// purpose_of_funding : ""

//linkedin,company_website
