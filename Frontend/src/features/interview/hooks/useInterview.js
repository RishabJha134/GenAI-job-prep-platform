import {
  getAllInterviewReports,
  generateInterviewReport,
  getInterviewReportById,
  generateResumePdf,
} from "../services/interview.api";
import { useContext, useEffect, useCallback } from "react";
import { InterviewContext } from "../interview.context";
import { useParams } from "react-router";
import { toast } from "sonner";

export const useInterview = () => {
  const context = useContext(InterviewContext);
  const { interviewId } = useParams();
  


  if (!context) {
    throw new Error("use Interview must be within a InterviewProvider");
  }
  const { loading, setLoading, report, setReport, reports, setReports } =
    context;

  const generateReport = useCallback(async ({
    jobDescription,
    selfDescription,
    resumeFile,
  }) => {
    setLoading(true);
    let response = null;
    const toastId = toast.loading("Analyzing your resume and generating report...");
    try {
      response = await generateInterviewReport({
        jobDescription,
        selfDescription,
        resumeFile,
      });
      setReport(response.interviewReport);
      toast.success("Report generated successfully!", { id: toastId });
    } catch (error) {
      console.log("error generating interview report:", error);
      toast.error(error?.response?.data?.message || "Failed to generate report. Please try again.", { id: toastId });
    } finally {
      setLoading(false);
    }

    return response?.interviewReport ?? null;
  }, [setLoading, setReport]);

  const getReportById = useCallback(async (interviewId) => {
    setLoading(true);
    let response = null;
    try {
      response = await getInterviewReportById(interviewId);
      setReport(response.interviewReport);
    } catch (error) {
      console.log("error: ", error);
      toast.error("Failed to load interview report.");
    } finally {
      setLoading(false);
    }

    return response?.interviewReport ?? null;
  }, [setLoading, setReport]);

  const getReports = useCallback(async () => {
    setLoading(true);
    let response = null;
    try {
      response = await getAllInterviewReports();
      setReports(response.interviewReports);
    } catch (error) {
      console.log("Error: ", error);
      toast.error("Failed to load your reports.");
    } finally {
      setLoading(false);
    }
    return response?.interviewReports ?? [];
  }, [setLoading, setReports]);

  const getResumePdf = useCallback(async ({interviewReportId}) => {
    setLoading(true);
    let response = null;
    const toastId = toast.loading("Generating your tailored resume PDF...");
    try {
      response = await generateResumePdf({interviewReportId});
      const url = window.URL.createObjectURL(new Blob([response],{type: "application/pdf"}));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `resume_${interviewReportId}.pdf`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      window.URL.revokeObjectURL(url);
      toast.success("Resume downloaded successfully!", { id: toastId });

    } catch (error) {
      console.log("Error: ", error);
      toast.error("Failed to download resume.", { id: toastId });
    } finally {
      setLoading(false);
    }
    return response;
  }, [setLoading]);


  useEffect(()=>{
    if(interviewId){
      getReportById(interviewId);
    }else{
      getReports();
    }
  },[interviewId, getReportById, getReports])

  return {
    loading,
    report,
    reports,
    generateReport,
    getReportById,
    getReports,
    getResumePdf,
  };
};
