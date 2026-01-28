import React, { useEffect, useRef, useState } from "react";
import "./loanCalculator.css";
import { llcData } from "../../constants/llc";
import { incData } from "../../constants/inc";
import { Link, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaArrowRight } from "react-icons/fa";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import toast from "react-hot-toast";

const countryMap = {
  us: llcData,
  ca: incData,
};

const ToggleButton = ({ label, active, onClick }) => {
  return (
    <button className={`LoanBtn ${active ? "active" : ""}`} onClick={onClick}>
      {label}
    </button>
  );
};

const SliderInput = ({ config, value, onChange }) => {
  const { label, min, max, step = 1, unit } = config;
  const [tempValue, setTempValue] = useState(value);

  useEffect(() => {
    setTempValue(value);
  }, [value]);

  const handleSliderChange = (val) => {
    onChange(val);
  };

  const handleInputChange = (e) => {
    const inputVal = e.target.value;

    // Allow empty or partial input while typing
    if (/^\d*\.?\d*$/.test(inputVal)) {
      setTempValue(inputVal);
    }
  };

  const handleInputBlur = () => {
    const numericValue = parseFloat(tempValue);

    if (isNaN(numericValue)) {
      setTempValue(value); // Reset to previous valid value
      return;
    }

    if (numericValue < min) {
      toast.error(
        `Minimum allowed value is ${
          unit == "Y" || unit == "M" || unit == "W" || unit == "%" ? "" : unit
        }  ${min} ${
          unit == "Y"
            ? "Year"
            : unit == "M"
            ? "Month"
            : unit == "W"
            ? "Week"
            : unit == "%"
            ? "%"
            : ""
        }`
      );
      setTempValue(min);
      onChange(min);
      return;
    }

    if (numericValue > max) {
      toast.error(
        `Maximum allowed value is ${
          unit == "Y" || unit == "M" || unit == "W" || unit == "%" ? "" : unit
        }   ${max} ${
          unit == "Y"
            ? "Year"
            : unit == "M"
            ? "Month"
            : unit == "W"
            ? "Week"
            : unit == "%"
            ? "%"
            : ""
        }`
      );
      setTempValue(max);
      onChange(max);
      return;
    }

    setTempValue(numericValue);
    onChange(numericValue);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      e.target.blur();
    }
  };

  const progress = ((value - min) / (max - min)) * 100;

  return (
    <div className="form-group mb-4">
      <label className="form-label fw-semibold">{label}</label>
      <div className="d-flex align-items-sm-center gap-3">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => handleSliderChange(Number(e.target.value))}
          className="form-range flex-grow-1 custom-range"
          aria-label={label}
          style={{
            background: `linear-gradient(to right, #2962ff ${progress}%, #d1d5db ${progress}%)`,
          }}
        />
        <div className="input-group amount-box" style={{ maxWidth: 180 }}>
          <input
            type="text"
            className="form-control text-end"
            value={tempValue}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onKeyDown={handleInputKeyDown}
            aria-label={`${label} input`}
            inputMode="numeric"
          />
          <span className="input-group-text bg-primary text-white fw-bold">
            {unit}
          </span>
        </div>
      </div>
    </div>
  );
};

const DateRangePicker = ({ startDate, setStartDate, endDate, setEndDate }) => (
  <div className="dateArea d-flex align-items-sm-center justify-content-between">
    <div className="dateBox">
      <label className="form-label">Start Date</label>
      <DatePicker
        selected={startDate}
        onChange={(date) => {
          setStartDate(date);
          if (endDate && date && date > endDate) setEndDate(null);
        }}
        placeholderText="Select Date (mm/dd/yyyy)"
        className="form-control soft-date"
        isClearable
        minDate={new Date()}
        dateFormat="MM/dd/yyyy"
        autoComplete="off"
        // This enables typing
        // customInputRef="input"
      />
    </div>
    <div className="dateBox">
      <label className="form-label">End Date</label>
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        placeholderText="Select Date (mm/dd/yyyy)"
        className="form-control soft-date"
        minDate={startDate}
        disabled={!startDate}
        isClearable
        dateFormat="MM/dd/yyyy"
        autoComplete="off"
        // This enables typing
        // customInputRef="input"
      />
    </div>
  </div>
);

const LoanCalculator = () => {
  const { countryCode } = useParams();
  const [content, setContent] = useState(llcData);

  useEffect(() => {
    const country = (countryCode || "us").toLowerCase();
    setContent(countryMap[country] || llcData);
  }, [countryCode]);

  const basePath = countryCode ? `/${countryCode}` : "";
  const currencyUnit = countryCode?.toLowerCase() === "ca" ? "$" : "$";

  // data collection

  const sliderConfigs = content.HompageData.loanCalculator.sliderConfigs;

  const chartRef = useRef(null);
  const [term, setTerm] = useState("Yearly");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [loanAmount, setLoanAmount] = useState(
    sliderConfigs[term].loanAmount.min
  );
  const [interestRate, setInterestRate] = useState(
    sliderConfigs[term].interestRate.min
  );
  const [loanDuration, setLoanDuration] = useState(
    sliderConfigs[term].loanDuration.min
  );
  const [visibleStates, setVisibleStates] = useState([true, true]);

  useEffect(() => {
    setLoanAmount(sliderConfigs[term].loanAmount.min);
    setInterestRate(sliderConfigs[term].interestRate.min);
    setLoanDuration(sliderConfigs[term].loanDuration.min);
  }, [term]);

  const calculateEMI = () => {
    const P = loanAmount;
    const isCanada = countryCode?.toLowerCase() === "ca";
    let R, N;

    if (term === "Yearly") {
      N = loanDuration * 12;

      if (isCanada) {
        // Semi-annual compounding adjustment for Canadian mortgages
        const effectiveAnnualRate = Math.pow(1 + interestRate / 200, 2) - 1;
        R = Math.pow(1 + effectiveAnnualRate, 1 / 12) - 1;
      } else {
        R = interestRate / 12 / 100;
      }
    } else if (term === "Monthly") {
      N = loanDuration;
      R = interestRate / 12 / 100;
    } else if (term === "Weekly") {
      N = loanDuration;
      R = interestRate / 52 / 100;
    }

    if (R === 0) return { emi: P / N, total: P, interest: 0 };

    const EMI = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    const totalPayment = EMI * N;
    const interestPayable = totalPayment - P;

    return {
      emi: EMI,
      total: totalPayment,
      interest: interestPayable,
    };
  };

  const { emi, total, interest } = calculateEMI();

  const toggleVisibility = (index) => {
    const chart = chartRef.current?.chart;
    if (chart && chart.series[0]?.data[index]) {
      const point = chart.series[0].data[index];
      const newVisibility = !point.visible;
      point.setVisible(newVisibility);

      // Update local visibility state
      setVisibleStates((prev) => {
        const updated = [...prev];
        updated[index] = newVisibility;
        return updated;
      });
    }
  };

  const highchartsOptions = {
    accessibility: {
      enabled: false,
    },
    chart: {
      type: "pie",
      width: 300,
      height: 355,
      spacing: [20, 20, -20, 20],
      margin: [0, 0, 0, 0],
      backgroundColor: "transparent", // Optional: no background
      style: {
        overflow: "visible", // Ensure overflow doesn't clip chart
      },
      events: {
        render() {
          const chart = this;
          const visiblePoints = chart.series[0].data.filter((p) => p.visible);

          let label;
          if (visiblePoints.length === 1) {
            label = `<span style="font-size:16px; color:#6A737C;">${
              visiblePoints[0].name
            }</span><br/>
                                 <span style="font-size:26px; font-weight:bold; color:#18181B">${currencyUnit}${visiblePoints[0].y.toLocaleString(
              undefined,
              {
                minimumFractionDigits: 2,
              }
            )}</span>`;
          } else {
            const total = visiblePoints.reduce(
              (sum, point) => sum + point.y,
              0
            );
            label = `<span style="font-size:16px; color:#6A737C;">Total Amount</span><br/>
                                 <span style="font-size:26px; font-weight:bold; color:#18181B">${currencyUnit}${total.toLocaleString(
              undefined,
              {
                minimumFractionDigits: 2,
              }
            )}</span>`;
          }

          chart.setTitle({ text: label });
        },
      },
    },
    title: {
      text: `<span style="font-size:13px; color:#999;">Total Amount</span><br/><span style="font-size:18px; font-weight:bold;">${currencyUnit}${total.toLocaleString(
        undefined,
        {
          minimumFractionDigits: 2,
        }
      )}</span>`,
      align: "center",
      verticalAlign: "middle",
      y: 0,
      useHTML: true,
    },
    tooltip: {
      pointFormat: "<b>${point.y:.2f}</b>",
    },
    plotOptions: {
      pie: {
        innerSize: "80%",
        dataLabels: {
          enabled: false,
        },
        showInLegend: true,
        borderWidth: 0,
        reversed: true,
        startAngle: 45,
        slicedOffset: 0,
        borderRadius: 0,
      },
    },
    colors: ["#344BFD", "#E07C7D"],
    legend: {
      align: "center",
      verticalAlign: "bottom",
      layout: "horizontal",
      symbolRadius: 5,
      itemStyle: {
        fontSize: "14px",
      },
      enabled: false,
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: "Amount",
        data: [
          { name: "Principal Amount", y: loanAmount },
          { name: "Interest Payable", y: interest },
        ],
      },
    ],
  };

  return (
    <section className="loanCalculatorSection" id="checkLoan">
      <div className="container">
        <div className="heading text-center">
          {content.HompageData.loanCalculator.heading}
        </div>
        <div className="loanCalculator">
          <div className="d-flex loanCalculatorFlex">
            <div className="calculatorArea">
              <h1>{content.HompageData.loanCalculator.calCulatorText}</h1>
              <div>
                {content.HompageData.loanCalculator.calculetorBtnText}
                <div className="bttnBox d-flex">
                  {content.HompageData.loanCalculator.loanTerms.map((item) => (
                    <ToggleButton
                      key={item}
                      label={item}
                      active={term === item}
                      onClick={() => setTerm(item)}
                    />
                  ))}
                </div>
              </div>
              <div className="rangeBox">
                <SliderInput
                  config={sliderConfigs[term].loanAmount}
                  value={loanAmount}
                  onChange={setLoanAmount}
                />

                <SliderInput
                  config={sliderConfigs[term].interestRate}
                  value={interestRate}
                  onChange={setInterestRate}
                />

                <SliderInput
                  config={sliderConfigs[term].loanDuration}
                  value={loanDuration}
                  onChange={setLoanDuration}
                />
              </div>
              {/* <DateRangePicker
                                startDate={startDate}
                                setStartDate={setStartDate}
                                endDate={endDate}
                                setEndDate={setEndDate}
                            /> */}
            </div>
            <div className="resultDiv">
              <div className="chartBox mb-4">
                <HighchartsReact
                  highcharts={Highcharts}
                  options={highchartsOptions}
                  ref={chartRef}
                />
                <div className="custom-legend d-flex justify-content-center gap-4">
                  <div
                    className="legend-item d-flex align-items-center gap-2"
                    onClick={() => toggleVisibility(0)}
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      style={{
                        width: 10,
                        height: 10,
                        backgroundColor: "#344BFD",
                        borderRadius: "50%",
                        textDecoration: visibleStates[0]
                          ? "none"
                          : "line-through",
                      }}
                    ></span>
                    <span
                      className="legandText"
                      style={{
                        textDecoration: visibleStates[0]
                          ? "none"
                          : "line-through",
                      }}
                    >
                      {content.HompageData.loanCalculator.legandText[0]}
                    </span>
                  </div>
                  <div
                    className="legend-item d-flex align-items-center gap-2"
                    onClick={() => toggleVisibility(1)}
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      style={{
                        width: 10,
                        height: 10,
                        backgroundColor: "#E07C7D",
                        borderRadius: "50%",
                        textDecoration: visibleStates[0]
                          ? "none"
                          : "line-through",
                      }}
                    ></span>
                    <span
                      className="legandText"
                      style={{
                        textDecoration: visibleStates[1]
                          ? "none"
                          : "line-through",
                      }}
                    >
                      {content.HompageData.loanCalculator.legandText[1]}
                    </span>
                  </div>
                </div>
              </div>
              <div className="resultBox">
                <div className="d-flex justify-content-between">
                  <span>
                    {content.HompageData.loanCalculator.calculationText[0]}
                  </span>
                  <span className="resultAmount">
                    {content.HompageData.loanCalculator.unit}
                    {total.toFixed(2)}
                  </span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>
                    {content.HompageData.loanCalculator.calculationText[1]}
                  </span>
                  <span className="resultAmount">
                    {content.HompageData.loanCalculator.unit}
                    {interest.toFixed(2)}
                  </span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>
                    {content.HompageData.loanCalculator.calculationText[2]}
                  </span>
                  <span className="resultAmount">
                    {loanDuration} {sliderConfigs[term].loanDuration.name}
                  </span>
                </div>
                <div className="d-flex emiBox justify-content-between">
                  <span>
                    {content.HompageData.loanCalculator.calculationText[3]}
                  </span>
                  <span className="resultAmount">
                    {content.HompageData.loanCalculator.unit}
                    {emi.toFixed(2)}
                  </span>
                </div>
              </div>
              <Link
                to="/contact"
                className="px-2 ps-3 mb-4 button justify-content-between"
              >
                {content.HompageData.loanCalculator.buttonText}
                <div>
                  <FaArrowRight />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanCalculator;
