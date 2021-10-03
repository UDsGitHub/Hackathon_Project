import React, { useState } from "react";
import Report from "./components/Report";
import ReportSuccess from "./components/ReportSuccess";
import "./components/report.css";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitReport() {
    setIsSubmitted(true);
  }

  return (
    <>
      <div className="form-container">
        <span className="close-btn">x</span>
        {!isSubmitted ? (
          <Report submitReport={submitReport} />
        ) : (
          <ReportSuccess />
        )}
      </div>
    </>
  );
}

export default App;
