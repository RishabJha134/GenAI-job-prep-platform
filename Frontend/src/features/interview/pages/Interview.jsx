import { useState } from "react";
import "../style/interview.scss";

const sampleData = {
  matchScore: 95,
  technicalQuestions: [
    {
      question: "How did you implement the debounced search in your 'Video Tube' project, and why was it necessary for performance?",
      intention: "To test the candidate's understanding of client-side performance optimization and practical implementation of common patterns.",
      answer: "Explain that debouncing limits the rate at which a function fires. In 'Video Tube', I used a timer (setTimeout) within a useEffect or a custom hook to delay the API call until the user stops typing for a specific duration (e.g., 300ms).",
    },
    {
      question: "In your internship at Pushplus, you mentioned implementing microservices. How did these services communicate with each other?",
      intention: "To assess knowledge of backend architecture and inter-service communication patterns.",
      answer: "Describe whether you used synchronous communication (REST/gRPC) or asynchronous (Message Queues like RabbitMQ or Redis Pub/Sub).",
    },
  ],
  behavioralQuestions: [
    {
      question: "You worked on maintaining a legacy codebase at CreateBytes. What was the biggest challenge you faced, and how did you resolve it?",
      intention: "To evaluate problem-solving skills in difficult environments and the ability to handle technical debt.",
      answer: "Focus on a specific instance, such as replacing the deprecated Stripe methods. Mention reading official documentation, testing in a sandbox environment, and ensuring backward compatibility.",
    },
  ],
  skillGaps: [
    { skill: "redis", severity: "medium" },
    { skill: "devops", severity: "low" },
    { skill: "ci/cd", severity: "medium" },
    { skill: "sockets", severity: "low" },
  ],
  preparationPlan: [
    {
      day: 1,
      focus: "Advanced JavaScript & React Fundamentals",
      tasks: [
        "Review Closures, Event Loop, and Promises in JavaScript.",
        "Practice React Hooks (useMemo, useCallback) to explain performance optimization.",
        "Deep dive into Next.js rendering patterns (SSR, SSG, ISR).",
      ],
    },
    {
      day: 2,
      focus: "Backend Architecture & Databases",
      tasks: [
        "Review Node.js Event Loop and non-blocking I/O.",
        "Study SQL vs NoSQL trade-offs and advanced Prisma features.",
      ],
    },
  ],
};

const TABS = [
  { id: "technical", label: "Technical Questions" },
  { id: "behavioral", label: "Behavioral Questions" },
  { id: "roadmap", label: "Roadmap" },
];

const Interview = ({ data = sampleData }) => {
  const [activeTab, setActiveTab] = useState("technical");

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
