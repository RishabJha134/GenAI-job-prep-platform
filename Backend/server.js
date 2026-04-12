const dotenv = require("dotenv");
dotenv.config();

const app = require("./src/app");
const connectDB = require("./src/config/database");
const { resume, selfDescription, jobDescription } = require("./src/services/temp");
const generateInterviewReport = require("./src/services/ai.service");

const PORT = process.env.PORT;

connectDB();

async function main() {
  try {
    const report = await generateInterviewReport({ resume, selfDescription, jobDescription });
    console.log("Interview report generated:", JSON.stringify(report, null, 2));
  } catch (err) {
    console.error("Failed to generate interview report:", err.message);
  }

  app.listen(PORT, () => {
    console.log("server is running on PORT", PORT);
  });
}

main();




