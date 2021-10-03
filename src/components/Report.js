import React from "react";
import useReport from "./useReport";
import validate from "./validateInfo";
import "./report.css";
import riskTypes from "./riskTypes";

const Report = ({ submitReport }) => {
  const { handleChange, values, handleSubmit, errors } = useReport(
    submitReport,
    validate
  );

  return (
    <div className="form-content">
      {/* <h1>Report</h1> */}
      <form className="form" onSubmit={handleSubmit}>
        <h1>Notify us quickly so we can help you swiftly</h1>
        <div className="report-dets">
          <div className="form-inputs">
            <riskTypes/>
          </div>
          <div className="form-inputs">
            <label for="appt">Select a time:</label>
            <input type="time" id="appt" name="appt"/>
            <input type="submit"/>
          </div>
        </div>

        <div className="form-inputs">
          <label htmlFor="report" className="form-label">
            Report
          </label>
          <input
            id="report"
            type="text"
            name="report"
            className="form-input"
            placeholder="Enter your report here"
            value={values.report}
            onChange={handleChange}
          />
          {errors.report && <p>{errors.report}</p>}
        </div>
        <button className="form-input-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Report;
