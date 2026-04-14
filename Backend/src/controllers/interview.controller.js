const pdfParse = require("pdf-parse");
const generateInterviewReport = require("../services/ai.service");
const interviewReportModel = require("../models/interviewReport.model");

async function generateInterviewReportController(req, res) {
  try {
    const pdfParsingObject = new pdfParse.PDFParse(
      Uint8Array.from(req.file.buffer),
    );

    const resumeContent = await pdfParsingObject.getText();
    const { selfDescription, jobDescription } = req.body;

    const interviewReportByAi = await generateInterviewReport({
      resume: resumeContent.text,
      selfDescription,
      jobDescription,
    });

    console.log("interviewReportByAi: "+JSON.stringify(interviewReportByAi));

    const interviewReport = await interviewReportModel.create({
      user: req.user.id,
      resume: resumeContent.text,
      selfDescription,
      jobDescription,
      ...interviewReportByAi,
    });

    res.status(201).json({
      message: "Interview report generated Successfully",
      interviewReport,
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  generateInterviewReportController,
};
