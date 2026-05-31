import { useState } from "react";
import "../style/interview.scss";
import { useInterview } from "../hooks/useInterview";
import { useEffect } from "react";
import { useParams } from "react-router";


const TABS = [
  { id: "technical", label: "Technical Questions" },
  { id: "behavioral", label: "Behavioral Questions" },
  { id: "roadmap", label: "Roadmap" },
];

const Interview = () => {
  const [activeTab, setActiveTab] = useState("technical");
  const {report,getReportById,loading,getResumePdf} = useInterview();
  const {interviewId} = useParams();
  const data = report; // Replace with actual data fetching logic

  
  

  console.log("data: "+ JSON.stringify(data));

  
  useEffect(()=>{
    if(interviewId){
      getReportById(interviewId);
    }
  },[interviewId]);

  const handleDownloadResume = async () => {
    const interviewReportId = interviewId;
    if (!interviewReportId) return;
    await getResumePdf({ interviewReportId });
  };

  if(loading || !data){
    return <div>
      <h1>Loading your interview plan</h1>
    </div>
  }

  const renderQuestions = (questions) => (
    <div className="question-list">
      {questions.map((q, idx) => (
        <article key={idx} className="question-card">
          <h3 className="question-title">
            <span className="question-index">{idx + 1}.</span> {q.question}
          </h3>
          <div className="question-meta">
            <p className="meta-label">Intention</p>
            <p className="meta-text">{q.intention}</p>
          </div>
          <div className="question-meta">
            <p className="meta-label">Suggested Answer</p>
            <p className="meta-text">{q.answer}</p>
          </div>
        </article>
      ))}
    </div>
  );

  const renderRoadmap = () => (
    <div className="roadmap-list">
      {data.preparationPlan.map((plan, idx) => (
        <article key={idx} className="roadmap-card">
          <div className="roadmap-head">
            <span className="day-badge">Day {plan.day}</span>
            <h3 className="roadmap-focus">{plan.focus}</h3>
          </div>
          <ul className="task-list">
            {plan.tasks.map((task, tIdx) => (
              <li key={tIdx}>{task}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );

  const renderContent = () => {
    if (activeTab === "technical") return renderQuestions(data.technicalQuestions);
    if (activeTab === "behavioral") return renderQuestions(data.behavioralQuestions);
    if (activeTab === "roadmap") return renderRoadmap();
    return null;
  };

  return (
    <main className="interview">
      <aside className="sidebar sidebar-left">
        <nav className="tab-nav">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </aside>

      <section className="main-content">
        <header className="main-header">
          <h2 className="main-title">
            {TABS.find((t) => t.id === activeTab)?.label}
          </h2>
          <span className="match-score">Match Score: {data.matchScore}%</span>
          <button onClick={handleDownloadResume}>Download Resume Button</button>
        </header>
        <div className="main-body">{renderContent()}</div>
      </section>

      <aside className="sidebar sidebar-right">
        <h3 className="sidebar-title">Skill Gaps</h3>
        <div className="skill-gap-list">
          {data.skillGaps.map((gap, idx) => (
            <span
              key={idx}
              className={`skill-chip severity-${gap.severity}`}
              title={`Severity: ${gap.severity}`}
            >
              {gap.skill}
            </span>
          ))}
        </div>
      </aside>
    </main>
  );
};

export default Interview;
