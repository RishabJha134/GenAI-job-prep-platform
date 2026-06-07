import React, { useRef, useState } from "react";
import { useNavigate, Link } from "react-router";
import { useInterview } from "../hooks/useInterview";

const Home = () => {
  const { loading, generateReport, reports } = useInterview();
  const [jobDescription, setJobDescription] = useState("");
  const [selfDescription, setSelfDescription] = useState("");
  const [fileName, setFileName] = useState("");
  const resumeInputRef = useRef();
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("");
    }
  };

  const handleGenerateReport = async()=>{
    const resumeFile = resumeInputRef.current.files[0];
    const data = await generateReport({jobDescription,selfDescription,resumeFile});
    console.log("Generated Report: ", data);
    if (data?._id) navigate(`/interview/${data._id}`);
  }

  console.log("reports: "+ JSON.stringify(reports));

  if(loading){
    return (
      <main className="flex min-h-screen items-center justify-center px-4" style={{ background: '#0e0e11' }}>
        <div className="flex flex-col items-center gap-5">
          <div className="relative flex items-center justify-center">
            <div className="absolute h-20 w-20 rounded-full bg-indigo-500/15 animate-ping"></div>
            <div className="absolute h-14 w-14 rounded-full bg-indigo-500/10 animate-pulse"></div>
            <div className="relative h-12 w-12 rounded-full border-2 border-indigo-500/30 border-t-indigo-500 animate-spin"></div>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <h1 className="text-sm font-semibold text-zinc-200" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Preparing your workspace</h1>
            <p className="text-xs text-zinc-500">AI is generating your interview plan…</p>
          </div>
        </div>
      </main>
    )
  }

  const recentReports = reports ?? [];

  return (
    <main className="min-h-screen px-4 py-8 text-white antialiased sm:px-6 lg:px-8 relative" style={{ background: '#0e0e11' }}>
      {/* Background decorative blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-8 relative z-10">

        {/* ═══ Dashboard Top Bar ═══ */}
        <div className="flex justify-between items-center border-b border-zinc-800 pb-4">
          <Link to="/" className="text-xl font-bold text-primary tracking-tighter" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            ResumeAI
          </Link>
        </div>

        {/* ═══ Page Header (Stitch Prepare style) ═══ */}
        <header className="fade-slide-up" style={{ animationDelay: '0.1s' }}>
          <h1 className="text-[32px] font-bold tracking-tight leading-[1.25]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Prepare Resume
          </h1>
          <p className="text-[#acaaae] mt-2 max-w-2xl text-base leading-relaxed">
            Upload your current resume and the target job description to get AI-powered tailored suggestions and analysis.
          </p>
        </header>

        {/* ═══ 60/40 Grid (Stitch 7/5 col layout) ═══ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* ─── Left Column (60%) ─── */}
          <div className="lg:col-span-7 space-y-6">

            {/* Upload Section */}
            <div className="border border-[#48474b] rounded-xl p-6 fade-slide-up" style={{ background: '#19191d', animationDelay: '0.15s' }}>
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-indigo-400">upload_file</span>
                <h3 className="text-base font-semibold">Upload Your Resume</h3>
              </div>

              {/* Upload Dropzone */}
              <label
                className={`group flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-8 cursor-pointer transition-all duration-300 ${fileName ? 'border-emerald-500/50 hover:border-emerald-500 bg-emerald-500/5' : 'border-[#48474b] hover:border-indigo-500/50 bg-[#1f1f23]'}`}
                htmlFor="resume"
              >
                {fileName ? (
                  <>
                    <span className="material-symbols-outlined text-4xl text-emerald-400 transition-colors mb-4 animate-bounce">check_circle</span>
                    <p className="text-white font-semibold mb-1 text-sm tracking-wide truncate max-w-full px-4">{fileName}</p>
                    <p className="text-emerald-400/80 text-xs mt-1">Successfully selected. Click to replace file.</p>
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-4xl text-indigo-500/50 group-hover:text-indigo-400 transition-colors mb-4">cloud_upload</span>
                    <p className="text-white font-medium mb-1">Drag & drop your resume here</p>
                    <p className="text-[#acaaae] text-sm mb-4">or click to browse</p>
                    <div className="flex gap-2">
                      <span className="bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full px-2.5 py-0.5 text-xs font-medium">PDF</span>
                    </div>
                  </>
                )}
              </label>
              <input
                ref={resumeInputRef}
                hidden
                type="file"
                name="resume"
                id="resume"
                accept=".pdf"
                onChange={handleFileChange}
              />
            </div>

            {/* Job Description Section */}
            <div className="border border-[#48474b] rounded-xl p-6 fade-slide-up" style={{ background: '#19191d', animationDelay: '0.25s' }}>
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-indigo-400">description</span>
                <h3 className="text-base font-semibold">Job Description</h3>
              </div>
              <textarea
                onChange={(e) => {
                  setJobDescription(e.target.value);
                }}
                name="jobDescription"
                id="jobDescription"
                placeholder="Paste the full job description here..."
                className="w-full min-h-[240px] border border-[#48474b] focus:border-indigo-500 text-white rounded-lg px-4 py-3 text-sm ring-offset-[#0e0e11] focus:ring-2 focus:ring-indigo-500/20 transition-all resize-y outline-none placeholder:text-zinc-500"
                style={{ background: '#0e0e11' }}
              ></textarea>
              <div className="flex justify-between items-center mt-2">
                <span className="text-xs text-[#acaaae]">Recommended: Paste the entire description for best results.</span>
              </div>
            </div>

            {/* Self Description Section */}
            <div className="border border-[#48474b] rounded-xl p-6 fade-slide-up" style={{ background: '#19191d', animationDelay: '0.3s' }}>
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-indigo-400">person</span>
                <h3 className="text-base font-semibold">About You</h3>
              </div>
              <textarea
                onChange={(e) => {
                  setSelfDescription(e.target.value);
                }}
                name="selfDescription"
                id="selfDescription"
                placeholder="Describe yourself in a few sentences..."
                className="w-full min-h-[140px] border border-[#48474b] focus:border-indigo-500 text-white rounded-lg px-4 py-3 text-sm ring-offset-[#0e0e11] focus:ring-2 focus:ring-indigo-500/20 transition-all resize-y outline-none placeholder:text-zinc-500"
                style={{ background: '#0e0e11' }}
              ></textarea>
            </div>
          </div>

          {/* ─── Right Column (40% - Sticky) ─── */}
          <div className="lg:col-span-5 relative">
            <div className="lg:sticky lg:top-8 space-y-6">

              {/* CTA Card */}
              <div className="relative overflow-hidden rounded-xl border border-[#48474b]/50 p-6 fade-slide-up group" style={{ background: '#19191d', animationDelay: '0.35s' }}>
                {/* Subtle gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-50"></div>
                <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined text-indigo-500 text-2xl">auto_awesome</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Ready to Analyze</h3>
                    <p className="text-sm text-[#acaaae] mt-1">Our AI will compare your resume against the job description and provide actionable insights.</p>
                  </div>
                  <button
                    onClick={handleGenerateReport}
                    className="w-full bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg px-4 py-3 font-semibold transition-all duration-200 hover:scale-[1.02] mt-2"
                    style={{ boxShadow: '0 0 15px rgba(99,102,241,0.3)' }}
                  >
                    Start AI Analysis
                  </button>
                  <div className="flex items-center gap-1.5 text-xs text-[#acaaae]">
                    <span className="material-symbols-outlined text-[14px]">timer</span>
                    <span>Estimated time: ~2-3 minutes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ═══ Recent Reports ═══ */}
        {recentReports.length > 0 && (
          <section className="rounded-xl border border-[#48474b] p-6 fade-slide-up" style={{ background: '#19191d', animationDelay: '0.4s' }}>
            <div className="flex items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <span className="material-symbols-outlined text-xl">history</span>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">Recent Activity</h3>
                </div>
              </div>
              <span className="bg-zinc-800 border border-zinc-700 rounded-full px-3 py-1 text-xs font-medium text-zinc-400">
                {recentReports.length} {recentReports.length === 1 ? 'report' : 'reports'}
              </span>
            </div>

            <div className="flex flex-col gap-4">
              {recentReports.map((report) => (
                <button
                  key={report._id}
                  type="button"
                  onClick={()=>navigate(`/interview/${report._id}`)}
                  className="flex items-center justify-between p-4 border border-zinc-800 rounded-lg text-left transition-all duration-200 hover:border-indigo-500/30"
                  style={{ background: '#0e0e11' }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                      <span className="material-symbols-outlined text-xl">description</span>
                    </div>
                    <div>
                      <p className="text-sm text-white font-medium">
                        {report.title || "Untitled Position"}
                      </p>
                      <p className="text-xs text-zinc-400 mt-0.5">
                        {new Date(report.createdAt).toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-zinc-600 text-xl">chevron_right</span>
                </button>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default Home;
