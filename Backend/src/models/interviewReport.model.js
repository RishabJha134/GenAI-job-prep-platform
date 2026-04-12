const mongoose = require("mongoose");

const technicalQuestionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, "technical question is required"],
    },
    intention: {
      type: String,
      required: [true, "intention is required"],
    },
    answer: {
      type: String,
      required: [true, "answer is required"],
    },
  },
  {
    _id: false,
  },
);

const behaviourQuestionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, "behaviour question is required"],
    },
    intention: {
      type: String,
      required: [true, "intention is required"],
    },
    answer: {
      type: String,
      required: [true, "answer is required"],
    },
  },
  {
    _id: false,
  },
);

const skillGapSchema = new mongoose.Schema(
  {
    skill: {
      type: String,
      required: [true, "Skill is required"],
    },
    severity: {
      type: String,
      enum: ["low", "high", "medium"],
      required: [true, "Severity is required"],
    },
  },
  {
    _id: false,
  },
);

const prepartionPlanSchema = new mongoose.Schema({
  day: {
    type: Number,
    required: [true, "Day is required"],
  },
  focus: {
    type: String,
    required: [true, "Focus is required"],
  },
  tasks: [
    {
      type: String,
      required: [true, "Task is required"],
    },
  ],
});

const interviewReportSchema = new mongoose.Schema({
  jobDescription: {
    type: String,
    require: [true, "Job Description is required"],
  },
  resume: {
    type: String,
  },
  selfDescription: {
    type: String,
  },
  matchScore: {
    type: Number,
    min: 0,
    max: 100,
  },
  technicalQuestion: [technicalQuestionSchema],
  behaviourQuestion: [behaviourQuestionSchema],
  skillGap: [skillGapSchema],
  prepartionPlan: prepartionPlanSchema,
},{
    timestamps:true
});

const interviewReportModel = mongoose.model(
  "interviewReportSchema",
  interviewReportSchema,
);

module.exports = interviewReportModel;