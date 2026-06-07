import { useState } from "react";
import { useInterview } from "../hooks/useInterview";


const TABS = [
  { id: "technical", label: "Technical Questions" },
  { id: "behavioral", label: "Behavioral Questions" },
  { id: "roadmap", label: "Roadmap" },
];

const Interview = () => {
  const [activeTab, setActiveTab] = useState("technical");
  const {report,loading,getResumePdf} = useInterview();
  const interviewId = report?._id;
  const data = report; // Replace with actual data fetching logic

  
  

  console.log("data: "+ JSON.stringify(data));

  
  const handleDownloadResume = async () => {
    const interviewReportId = interviewId;
    if (!interviewReportId) return;
    await getResumePdf({ interviewReportId });
  };

  if(loading || !data){
    return (
      <div className="flex min-h-screen items-center justify-center px-4" style={{ background: '#09090B' }}>
        <div className="flex flex-col items-center gap-4">
          <div className="h-10 w-10 rounded-full border-2 border-indigo-500/30 border-t-indigo-500 animate-spin"></div>
          <h1 className="text-sm font-medium text-zinc-400">Loading your interview plan</h1>
        </div>
      </div>
    )
  }

  const skillGaps = data.skillGaps ?? [];
  const technicalQuestions = data.technicalQuestions ?? [];
  const behavioralQuestions = data.behavioralQuestions ?? [];
  const preparationPlan = data.preparationPlan ?? [];

  const tabLabel = TABS.find((t) => t.id === activeTab)?.label;

  const severityStyles = {
    low: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
    medium: "border-amber-500/30 bg-amber-500/10 text-amber-400",
    high: "border-rose-500/30 bg-rose-500/10 text-rose-400",
  };

  const renderSeverityClass = (severity) => severityStyles[severity] ?? "border-zinc-700 text-zinc-300";

  const renderQuestions = (questions) => (
    <div className="flex flex-col gap-4">
      {questions.map((q, idx) => (
        <article key={idx} className="rounded-xl border border-zinc-700 p-5" style={{ background: '#27272A' }}>
          <h3 className="text-sm font-semibold leading-6 text-white">
            <span className="mr-2 text-indigo-400">{idx + 1}.</span> {q.question}
          </h3>
          <div className="mt-4 space-y-1.5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-violet-400">Intention</p>
            <p className="text-sm leading-6 text-zinc-300">{q.intention}</p>
          </div>
          <div className="mt-4 space-y-1.5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-violet-400">Suggested Answer</p>
            <p className="text-sm leading-6 text-zinc-300">{q.answer}</p>
          </div>
        </article>
      ))}
    </div>
  );

  const renderRoadmap = () => (
    <div className="flex flex-col gap-4">
      {preparationPlan.map((plan, idx) => (
        <article key={idx} className="rounded-xl border border-zinc-700 p-5" style={{ background: '#27272A' }}>
          <div className="mb-3 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-bold text-indigo-400">Day {plan.day}</span>
            <h3 className="text-base font-semibold text-white">{plan.focus}</h3>
          </div>
          <ul className="ml-4 list-disc space-y-1 text-sm leading-6 text-zinc-300">
            {plan.tasks.map((task, tIdx) => (
              <li key={tIdx}>{task}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );

  const renderContent = () => {
    if (activeTab === "technical") return renderQuestions(technicalQuestions);
    if (activeTab === "behavioral") return renderQuestions(behavioralQuestions);
    if (activeTab === "roadmap") return renderRoadmap();
    return null;
  };

  return (
    <main className="min-h-screen px-4 py-8 text-zinc-100 sm:px-6 lg:px-8">
      <div className="animate-fadeIn mx-auto grid w-full max-w-7xl gap-6 xl:grid-cols-[240px_minmax(0,1fr)_280px]">
      <aside className="rounded-2xl border border-zinc-800 p-4 shadow-xl shadow-black/30 xl:sticky xl:top-8 xl:self-start" style={{ background: '#18181B' }}>
        <nav className="flex flex-col gap-2">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              className={`relative rounded-xl border px-4 py-3 text-left text-sm font-medium transition ${activeTab === tab.id ? "border-zinc-700 bg-zinc-800 text-white before:absolute before:left-0 before:top-1/2 before:h-5 before:w-0.5 before:-translate-y-1/2 before:rounded-full before:bg-indigo-500 before:content-['']" : "border-transparent bg-transparent text-zinc-400 hover:bg-zinc-800/60 hover:text-zinc-200"} pl-5`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </aside>

      <section className="min-w-0 rounded-2xl border border-zinc-800 p-6 shadow-xl shadow-black/30 sm:p-7" style={{ background: '#18181B' }}>
        <header className="mb-5 flex flex-col gap-4 border-b border-zinc-800 pb-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-violet-400">Interview overview</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              {tabLabel}
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-400">
              Match Score: {data.matchScore}%
            </span>
            <button
              onClick={handleDownloadResume}
              className="btn-shimmer inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/20"
            >
              Download Resume
            </button>
          </div>
        </header>
        <div>{renderContent()}</div>
      </section>

      <aside className="rounded-2xl border border-zinc-800 p-5 shadow-xl shadow-black/30 xl:sticky xl:top-8 xl:self-start" style={{ background: '#18181B' }}>
        <h3 className="text-sm font-bold tracking-tight text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Skill Gaps</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {skillGaps.map((gap, idx) => (
            <span
              key={idx}
              className={`inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-medium ${renderSeverityClass(gap.severity)}`}
              title={`Severity: ${gap.severity}`}
            >
              {gap.skill}
            </span>
          ))}
        </div>
      </aside>
      </div>
    </main>
  );
};

export default Interview;
