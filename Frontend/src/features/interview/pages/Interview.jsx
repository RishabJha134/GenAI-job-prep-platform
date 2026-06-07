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
      <div className="flex min-h-screen items-center justify-center px-4" style={{ background: '#0e0e11' }}>
        <div className="flex flex-col items-center gap-5">
          <div className="relative flex items-center justify-center">
            <div className="absolute h-16 w-16 rounded-full bg-indigo-500/20 animate-ping"></div>
            <div className="relative h-12 w-12 rounded-full border-2 border-indigo-500/30 border-t-indigo-500 animate-spin"></div>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <h1 className="text-sm font-semibold text-zinc-200" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Loading your interview plan</h1>
            <p className="text-xs text-zinc-500">Preparing questions, roadmap & insights…</p>
          </div>
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

  const severityDotColor = {
    low: "bg-emerald-400",
    medium: "bg-amber-400",
    high: "bg-rose-400",
  };

  const tabIcons = {
    technical: "code",
    behavioral: "record_voice_over",
    roadmap: "route",
  };

  const renderQuestions = (questions) => (
    <div className="flex flex-col gap-4">
      {questions.map((q, idx) => (
        <article
          key={idx}
          className="group relative rounded-xl border border-[#48474b] p-5 sm:p-6 transition-all duration-200 hover:border-indigo-500/30"
          style={{ background: '#19191d' }}
        >
          {/* Question header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full px-2.5 py-0.5 text-xs font-medium">
                Question {idx + 1}
              </span>
            </div>
          </div>
          <h3 className="text-base leading-relaxed text-white mb-4">
            {q.question}
          </h3>

          {/* Intention */}
          <div className="space-y-1.5 mb-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#acaaae]">
              Intention
            </p>
            <p className="text-sm leading-relaxed text-[#acaaae]">{q.intention}</p>
          </div>

          {/* Suggested Answer */}
          <div className="space-y-1.5">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#acaaae]">
              Suggested Answer
            </p>
            <p className="text-sm leading-relaxed text-zinc-300 border-l-2 border-indigo-500/40 pl-3 italic">{q.answer}</p>
          </div>
        </article>
      ))}
    </div>
  );

  const renderRoadmap = () => (
    <div className="flex flex-col gap-4">
      {preparationPlan.map((plan, idx) => (
        <article
          key={idx}
          className="group relative rounded-xl border border-[#48474b] p-5 sm:p-6 transition-all duration-200 hover:border-indigo-500/30"
          style={{ background: '#19191d' }}
        >
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full px-2.5 py-0.5 text-xs font-bold">
              Day {plan.day}
            </span>
            <h3 className="text-[15px] font-semibold text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              {plan.focus}
            </h3>
          </div>
          <ul className="space-y-2 text-sm leading-relaxed text-[#acaaae]">
            {plan.tasks.map((task, tIdx) => (
              <li key={tIdx} className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-indigo-500/50 text-[16px] mt-0.5">check_circle</span>
                <span>{task}</span>
              </li>
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
    <main className="min-h-screen text-white antialiased" style={{ background: '#0e0e11' }}>

      {/* ═══ Top Header Bar (Stitch Interview header style) ═══ */}
      <header className="h-16 border-b border-[#48474b] flex items-center justify-between px-6 shrink-0 sticky top-0 z-50" style={{ background: '#19191d' }}>
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
            <span className="material-symbols-outlined text-indigo-400 text-base">neurology</span>
          </div>
          <h1 className="text-sm font-semibold tracking-wide truncate max-w-xs sm:max-w-md">
            {data.title || "Interview Report"}
          </h1>
        </div>
        <div className="flex items-center gap-4">
          {/* Match Score Badge */}
          <div className="bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full px-3 py-1 text-xs font-medium flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px]">analytics</span>
            Match: {data.matchScore}%
          </div>
          {/* Question count */}
          <div className="bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full px-3 py-1 text-xs font-medium flex items-center gap-2 hidden sm:flex">
            <span className="material-symbols-outlined text-[16px]">quiz</span>
            {technicalQuestions.length + behavioralQuestions.length} Questions
          </div>
          {/* Download button */}
          <button
            onClick={handleDownloadResume}
            className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 hover:scale-105 flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">download</span>
            <span className="hidden sm:inline">Resume</span>
          </button>
        </div>
      </header>

      {/* ═══ Main Content ═══ */}
      <div className="mx-auto max-w-[1280px] px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid gap-6 xl:grid-cols-[260px_minmax(0,1fr)_280px]">

          {/* ─── Left Sidebar: Tab Navigation ─── */}
          <aside
            className="rounded-xl border border-[#48474b] p-4 xl:sticky xl:top-24 xl:self-start"
            style={{ background: '#19191d' }}
          >
            <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-wider text-[#acaaae]">
              Navigate
            </p>
            <nav className="flex flex-col gap-1.5" role="tablist" aria-label="Interview sections">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? "bg-indigo-500/10 text-indigo-400 font-semibold"
                      : "text-[#acaaae] hover:text-white hover:bg-[#252529] transition-colors"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <span className="material-symbols-outlined text-[20px]">{tabIcons[tab.id]}</span>
                  {tab.label}
                </button>
              ))}
            </nav>

            {/* Sidebar stats */}
            <div className="mt-6 border-t border-[#48474b]/50 pt-4 space-y-3 px-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#acaaae]">Roadmap Days</span>
                <span className="font-semibold text-white">{preparationPlan.length}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#acaaae]">Total Q&apos;s</span>
                <span className="font-semibold text-white">{technicalQuestions.length + behavioralQuestions.length}</span>
              </div>
            </div>
          </aside>

          {/* ─── Center: Main Content Panel ─── */}
          <section
            className="min-w-0 rounded-xl border border-[#48474b] p-5 sm:p-7"
            style={{ background: '#19191d' }}
          >
            {/* Section Header */}
            <header className="mb-6 border-b border-[#48474b] pb-5">
              <div className="flex items-center gap-2 mb-1">
                <span className={`material-symbols-outlined text-[20px] ${activeTab === 'technical' ? 'text-indigo-400' : activeTab === 'behavioral' ? 'text-violet-400' : 'text-emerald-400'}`}>
                  {tabIcons[activeTab]}
                </span>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#acaaae]">
                  {activeTab === "roadmap" ? "Preparation" : "Practice"}
                </p>
              </div>
              <h2
                className="text-2xl font-bold tracking-tight text-white"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {tabLabel}
              </h2>
              <p className="text-sm text-[#acaaae] mt-1">
                {activeTab === "technical" && `${technicalQuestions.length} technical questions tailored to the role`}
                {activeTab === "behavioral" && `${behavioralQuestions.length} behavioral questions to practice`}
                {activeTab === "roadmap" && `${preparationPlan.length}-day preparation roadmap`}
              </p>
            </header>

            {/* Tab Content */}
            <div>{renderContent()}</div>
          </section>

          {/* ─── Right Sidebar: Skill Gaps ─── */}
          <aside
            className="rounded-xl border border-[#48474b] p-5 xl:sticky xl:top-24 xl:self-start"
            style={{ background: '#19191d' }}
          >
            {/* Heading */}
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-amber-400 text-[18px]">warning</span>
              </div>
              <h3
                className="text-sm font-bold tracking-tight text-white"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Skill Gaps
              </h3>
              {skillGaps.length > 0 && (
                <span className="ml-auto rounded-full bg-zinc-800 px-2 py-0.5 text-[10px] font-semibold text-zinc-400">
                  {skillGaps.length}
                </span>
              )}
            </div>

            {/* Severity Legend */}
            <div className="mb-4 flex items-center gap-4 text-[10px] font-medium text-[#acaaae]">
              <span className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span> Low
              </span>
              <span className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span> Medium
              </span>
              <span className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-400"></span> High
              </span>
            </div>

            {/* Skill Gap Badges */}
            <div className="flex flex-wrap gap-2">
              {skillGaps.map((gap, idx) => (
                <span
                  key={idx}
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-200 hover:scale-105 ${renderSeverityClass(gap.severity)}`}
                  title={`Severity: ${gap.severity}`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${severityDotColor[gap.severity] ?? "bg-zinc-500"}`}></span>
                  {gap.skill}
                </span>
              ))}
            </div>

            {/* Breakdown */}
            {skillGaps.length > 0 && (
              <div className="mt-5 rounded-lg border border-[#48474b] p-4" style={{ background: '#0e0e11' }}>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#acaaae] mb-3">Breakdown</p>
                <div className="space-y-2">
                  {["high", "medium", "low"].map((level) => {
                    const count = skillGaps.filter(g => g.severity === level).length;
                    if (count === 0) return null;
                    return (
                      <div key={level} className="flex items-center justify-between text-xs">
                        <span className="flex items-center gap-1.5">
                          <span className={`h-1.5 w-1.5 rounded-full ${severityDotColor[level]}`}></span>
                          <span className="capitalize text-[#acaaae]">{level}</span>
                        </span>
                        <span className="font-semibold text-white">{count}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </aside>

        </div>
      </div>
    </main>
  );
};

export default Interview;
