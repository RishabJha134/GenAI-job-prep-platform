import React, { useRef, useState } from "react";
import { useNavigate } from "react-router";
import "../style/home.scss";
import { useInterview } from "../hooks/useInterview";

const Home = () => {
  const { loading, generateReport, reports } = useInterview();
  const [jobDescription, setJobDescription] = useState("");
  const [selfDescription, setSelfDescription] = useState("");
  const resumeInputRef = useRef();
  const navigate = useNavigate();

  const handleGenerateReport = async()=>{
    const resumeFile = resumeInputRef.current.files[0];
    const data = await generateReport({jobDescription,selfDescription,resumeFile});
    console.log("Generated Report: ", data);
    if (data?._id) navigate(`/interview/${data._id}`);
  }

  console.log("reports: "+ JSON.stringify(reports));

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

      {/* recent reports list */}
      {reports.length > 0 && <div className="recent-reports">
        <h2>Recent Interview Reports</h2>
        <ul className="reports-list">
          {reports.map((report) => (
            <li key={report._id} className="report-item" onClick={()=>navigate(`/interview/${report._id}`)}>
              <h3>{report.title || "Untitled Position"}</h3>
              <p>{new Date(report.createdAt).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      </div>}
    </main>
  );
};

export default Home;
