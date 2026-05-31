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
      <div className="flex min-h-screen items-center justify-center px-4 text-slate-700 dark:text-slate-200">
        <h1 className="text-lg font-medium">Loading your interview plan</h1>
      </div>
    )
  }

  const skillGaps = data.skillGaps ?? [];
  const technicalQuestions = data.technicalQuestions ?? [];
  const behavioralQuestions = data.behavioralQuestions ?? [];
  const preparationPlan = data.preparationPlan ?? [];

  const tabLabel = TABS.find((t) => t.id === activeTab)?.label;

  const severityStyles = {
    low: "border-emerald-500/30 text-emerald-700 dark:text-emerald-300",
    medium: "border-amber-500/30 text-amber-700 dark:text-amber-300",
    high: "border-rose-500/30 text-rose-700 dark:text-rose-300",
  };

  const renderSeverityClass = (severity) => severityStyles[severity] ?? "border-slate-300 text-slate-700 dark:text-slate-300";

  const renderQuestions = (questions) => (
    <div className="flex flex-col gap-4">
      {questions.map((q, idx) => (
        <article key={idx} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800/90">
          <h3 className="text-sm font-semibold leading-6 text-slate-950 dark:text-white">
            <span className="mr-2 text-slate-500 dark:text-slate-400">{idx + 1}.</span> {q.question}
          </h3>
          <div className="mt-4 space-y-1.5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500 dark:text-slate-400">Intention</p>
            <p className="text-sm leading-6 text-slate-700 dark:text-slate-200">{q.intention}</p>
          </div>
          <div className="mt-4 space-y-1.5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500 dark:text-slate-400">Suggested Answer</p>
            <p className="text-sm leading-6 text-slate-700 dark:text-slate-200">{q.answer}</p>
          </div>
        </article>
      ))}
    </div>
  );

  const renderRoadmap = () => (
    <div className="flex flex-col gap-4">
      {preparationPlan.map((plan, idx) => (
        <article key={idx} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800/90">
          <div className="mb-3 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-bold text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">Day {plan.day}</span>
            <h3 className="text-base font-semibold text-slate-950 dark:text-white">{plan.focus}</h3>
          </div>
          <ul className="ml-4 list-disc space-y-1 text-sm leading-6 text-slate-700 dark:text-slate-200">
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
    <main className="min-h-screen px-4 py-8 text-slate-900 dark:text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-6 xl:grid-cols-[240px_minmax(0,1fr)_280px]">
      <aside className="rounded-3xl border border-white/70 bg-white/85 p-4 shadow-xl shadow-slate-900/10 backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80 dark:shadow-black/30 xl:sticky xl:top-8 xl:self-start">
        <nav className="flex flex-col gap-2">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              className={`relative rounded-2xl border px-4 py-3 text-left text-sm font-medium transition before:absolute before:left-4 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:content-[''] ${activeTab === tab.id ? "border-slate-200 bg-slate-50 text-slate-950 before:bg-orange-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white" : "border-transparent bg-transparent text-slate-500 hover:bg-slate-50 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"} pl-9`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </aside>

      <section className="min-w-0 rounded-3xl border border-white/70 bg-white/85 p-6 shadow-xl shadow-slate-900/10 backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80 dark:shadow-black/30 sm:p-7">
        <header className="mb-5 flex flex-col gap-4 border-b border-slate-200 pb-5 dark:border-slate-700 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Interview overview</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
              {tabLabel}
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
              Match Score: {data.matchScore}%
            </span>
            <button
              onClick={handleDownloadResume}
              className="inline-flex items-center justify-center rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-500/20"
            >
              Download Resume
            </button>
          </div>
        </header>
        <div>{renderContent()}</div>
      </section>

      <aside className="rounded-3xl border border-white/70 bg-white/85 p-5 shadow-xl shadow-slate-900/10 backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80 dark:shadow-black/30 xl:sticky xl:top-8 xl:self-start">
        <h3 className="text-sm font-semibold tracking-tight text-slate-950 dark:text-white">Skill Gaps</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {skillGaps.map((gap, idx) => (
            <span
              key={idx}
              className={`inline-flex items-center rounded-full border bg-slate-50 px-3 py-1.5 text-xs font-medium dark:bg-slate-800 ${renderSeverityClass(gap.severity)}`}
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
