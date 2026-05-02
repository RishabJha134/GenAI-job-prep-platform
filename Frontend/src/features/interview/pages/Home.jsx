import React, { useRef, useState } from "react";
import "../style/home.scss";
import { useInterview } from "../hooks/useInterview";

const Home = () => {
  const { loading, generateReport } = useInterview();
  const { jobDescription, setJobDescription } = useState("");
  const { selfDescription, setSelfDescription } = useState("");
  const resumeInputRef = useRef();

  const handleGenerateReport = async()=>{
    const resumeFile = resumeInputRef.current.files[0];
    const data = await generateReport({jobDescription,selfDescription,resumeFile});
    navigate(`/interview/${data._id}`);
  }

  if(loading){
    return (
      <main>
        <h1>Loading your interview plan</h1>
      </main>
    )
  }

  return (
    <main className="home">
      <div className="interview-input-group">
        <div className="left">
          <textarea
            onChange={(e) => {
              setJobDescription(e.target.value);
            }}
            name="jobDescription"
            id="jobDescription"
            placeholder="Enter job description here"
          ></textarea>
        </div>
        <div className="right">
          <div className="input-group">
            <label className="file-label" htmlFor="resume">
              Upload Resume
            </label>
            <input
              ref={resumeInputRef}
              hidden
              type="file"
              name="resume"
              id="resume"
              accept=".pdf"
            />
          </div>
          <div className="input-group">
            <label htmlFor="selfDescription">Self Description</label>
            <textarea
              onChange={(e) => {
                setSelfDescription(e.target.value);
              }}
              name="selfDescription"
              id="selfDescription"
              placeholder="Describe Yourself in few sentences"
            ></textarea>
          </div>
          <button onClick={handleGenerateReport} className="generate-btn">Generate Interview Report </button>
        </div>
      </div>
    </main>
  );
};

export default Home;
