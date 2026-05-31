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
      <main className="flex min-h-screen items-center justify-center px-4">
        <h1 className="text-lg font-medium text-slate-700 dark:text-slate-200">Loading your interview plan</h1>
      </main>
    )
  }

  const recentReports = reports ?? [];

  return (
    <main className="min-h-screen px-4 py-10 text-slate-900 dark:text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
        <header className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-500 dark:text-orange-400">
            Interview planner
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            Build a stronger interview plan in one pass.
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
            Drop in a job description, your resume, and a short self summary to generate a tailored interview roadmap.
          </p>
        </header>

        <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-3xl border border-white/70 bg-white/85 p-6 shadow-xl shadow-slate-900/10 backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80 dark:shadow-black/30 sm:p-7">
            <div className="mb-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Input</p>
              <h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-950 dark:text-white">Job description</h2>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Paste the role details to anchor the report.</p>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="jobDescription" className="text-sm font-medium text-slate-600 dark:text-slate-300">
                Role requirements
              </label>
              <textarea
                onChange={(e) => {
                  setJobDescription(e.target.value);
                }}
                name="jobDescription"
                id="jobDescription"
                placeholder="Enter job description here"
                className="min-h-72 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/15 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
              ></textarea>
            </div>
          </section>

          <section className="rounded-3xl border border-white/70 bg-white/85 p-6 shadow-xl shadow-slate-900/10 backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80 dark:shadow-black/30 sm:p-7">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-600 dark:text-slate-300" htmlFor="resume">
                  Upload Resume
                </label>
                <label
                  className="flex cursor-pointer items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 py-4 text-sm font-medium text-slate-600 transition hover:border-orange-500 hover:text-orange-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-orange-400 dark:hover:text-orange-300"
                  htmlFor="resume"
                >
                  Choose PDF resume
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
                <label htmlFor="selfDescription" className="text-sm font-medium text-slate-600 dark:text-slate-300">
                  Self Description
                </label>
                <textarea
                  onChange={(e) => {
                    setSelfDescription(e.target.value);
                  }}
                  name="selfDescription"
                  id="selfDescription"
                  placeholder="Describe Yourself in few sentences"
                  className="min-h-36 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/15 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                ></textarea>
              </div>

              <button
                onClick={handleGenerateReport}
                className="inline-flex w-full items-center justify-center rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-0.5 hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-500/20"
              >
                Generate Interview Report
              </button>
            </div>
          </section>
        </div>

        {recentReports.length > 0 && (
          <section className="rounded-3xl border border-white/70 bg-white/85 p-6 shadow-xl shadow-slate-900/10 backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80 dark:shadow-black/30 sm:p-7">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Recent</p>
                <h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
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
                    className="flex h-full w-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-orange-500 hover:bg-white dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-800/90"
                  >
                    <h3 className="text-base font-semibold text-slate-950 dark:text-white">
                      {report.title || "Untitled Position"}
                    </h3>
                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
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
