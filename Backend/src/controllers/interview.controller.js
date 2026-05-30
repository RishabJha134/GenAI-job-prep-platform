const pdfParse = require("pdf-parse");
const {generateInterviewReport,generateResumePDF} = require("../services/ai.service");
const interviewReportModel = require("../models/interviewReport.model");


// create interview report:-
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

    console.log("interviewReportByAi: " + JSON.stringify(interviewReportByAi));

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

// fetch specific interview report detail:-
async function getInterviewReportController(req, res) {
  const { interviewId } = req.params;
  const interviewReport = await interviewReportModel.findOne({
    _id: interviewId,
    user: req.user.id,
  });
  if (!interviewReport) {
    return res.status(404).json({
      message: "interview report not found.",
    });
  }
  res.status(200).json({
    message: "Interview report found.",
    interviewReport,
  });
}

// fetch all interview reports created by users
async function getAllInterviewController(req, res) {
  const interviewReports = await interviewReportModel
    .find({ user: req.user.id })
    .sort({ createdAt: -1 })
    .select(
      "-resume -selfDescription -jobDescription -__v -technicalQuestions -behaviourQuestions -skillGaps -prepartionPlan",
    );
    res.status(200).json({
    message: "Interview report fetched successfully.",
    interviewReports,
  });
}

async function generateResumePDFController(req,res){
  const {interviewReportId} = req.params;
  console.log("interviewReportId: "+ interviewReportId);  
  const interviewReport = await interviewReportModel.findOne({
    _id: interviewReportId,
});
if(!interviewReport){
    return res.status(404).json({
        message: "Interview report not found.",
    });
}

const {resume,jobDescriptiom,selfDescription} = interviewReport;
const pdfBuffer = await generateResumePDF({resume,jobDescriptiom,selfDescription});

res.set({
    "Content-Type":"application/pdf",
    "Content-Disposition":`attachment; filename=resume_${interviewReportId}.pdf`,
});
res.send(pdfBuffer);
}



 
module.exports = {
  generateInterviewReportController,
  getInterviewReportController,
  getAllInterviewController,
  generateResumePDFController,
};
