import React, { useRef, useState } from "react";
import { useNavigate } from "react-router";
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
      <main className="flex min-h-screen items-center justify-center px-4" style={{ background: '#09090B' }}>
        <div className="flex flex-col items-center gap-4">
          <div className="h-10 w-10 rounded-full border-2 border-indigo-500/30 border-t-indigo-500 animate-spin"></div>
          <h1 className="text-sm font-medium text-zinc-400">Loading your interview plan</h1>
        </div>
      </main>
    )
  }

  const recentReports = reports ?? [];

  return (
    <main className="min-h-screen px-4 py-10 text-zinc-100 sm:px-6 lg:px-8">
      <div className="animate-fadeIn mx-auto flex w-full max-w-7xl flex-col gap-8">
        <header className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-ai-gradient">
            ✦ Interview Planner
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Build a stronger interview plan{" "}
            <span className="text-indigo-400">in one pass.</span>
          </h1>
          <p className="mt-4 text-base leading-7 text-zinc-400">
            Drop in a job description, your resume, and a short self summary to generate a tailored interview roadmap.
          </p>
        </header>

        <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-2xl border border-zinc-800 p-6 shadow-xl shadow-black/30 sm:p-7" style={{ background: '#18181B' }}>
            <div className="mb-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-violet-400">Input</p>
              <h2 className="mt-2 text-xl font-bold tracking-tight text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Job description</h2>
              <p className="mt-1 text-sm text-zinc-500">Paste the role details to anchor the report.</p>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="jobDescription" className="text-sm font-medium text-zinc-400">
                Role requirements
              </label>
              <textarea
                onChange={(e) => {
                  setJobDescription(e.target.value);
                }}
                name="jobDescription"
                id="jobDescription"
                placeholder="Enter job description here"
                className="min-h-72 w-full rounded-xl border border-zinc-700 bg-zinc-800/80 px-4 py-3 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              ></textarea>
            </div>
          </section>

          <section className="rounded-2xl border border-zinc-800 p-6 shadow-xl shadow-black/30 sm:p-7" style={{ background: '#18181B' }}>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-zinc-400" htmlFor="resume">
                  Upload Resume
                </label>
                <label
                  className="flex cursor-pointer items-center justify-center rounded-xl border-2 border-dashed border-zinc-700 bg-zinc-800/50 px-4 py-4 text-sm font-medium text-zinc-400 transition hover:border-indigo-500 hover:text-indigo-400 hover:bg-indigo-500/5"
                  htmlFor="resume"
                >
                  <span className="mr-2">📄</span> Choose PDF resume
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

              <div className="flex flex-col gap-2">
                <label htmlFor="selfDescription" className="text-sm font-medium text-zinc-400">
                  Self Description
                </label>
                <textarea
                  onChange={(e) => {
                    setSelfDescription(e.target.value);
                  }}
                  name="selfDescription"
                  id="selfDescription"
                  placeholder="Describe Yourself in few sentences"
                  className="min-h-36 w-full rounded-xl border border-zinc-700 bg-zinc-800/80 px-4 py-3 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                ></textarea>
              </div>

              <button
                onClick={handleGenerateReport}
                className="btn-shimmer inline-flex w-full items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:-translate-y-0.5 hover:bg-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/20"
              >
                ✦ Generate Interview Report
              </button>
            </div>
          </section>
        </div>

        {recentReports.length > 0 && (
          <section className="rounded-2xl border border-zinc-800 p-6 shadow-xl shadow-black/30 sm:p-7" style={{ background: '#18181B' }}>
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-violet-400">Recent</p>
                <h2 className="mt-2 text-xl font-bold tracking-tight text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Recent Interview Reports
                </h2>
              </div>
            </div>

            <ul className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {recentReports.map((report) => (
                <li key={report._id}>
                  <button
                    type="button"
                    onClick={()=>navigate(`/interview/${report._id}`)}
                    className="hover-glow flex h-full w-full flex-col rounded-xl border border-zinc-700 bg-zinc-800/60 p-5 text-left shadow-sm transition hover:-translate-y-0.5"
                  >
                    <h3 className="text-base font-semibold text-white">
                      {report.title || "Untitled Position"}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-500">
                      {new Date(report.createdAt).toLocaleString()}
                    </p>
                  </button>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </main>
  );
};

export default Home;
