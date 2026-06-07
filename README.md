<p align="center">
  <img src="./Frontend/public/favicon.svg" alt="ResumeAI Logo" width="80" height="80" />
</p>

<h1 align="center">ResumeAI — AI-Powered Career Acceleration Platform</h1>

<p align="center">
  <strong>Smart resume analysis • AI mock interviews • Skill gap detection • ATS-optimized resume generation</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Express-5.2-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Node.js-22+-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Gemini_AI-3_Flash-4285F4?style=for-the-badge&logo=google&logoColor=white" alt="Gemini AI" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.2-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
</p>

---

## 📋 Table of Contents

- [About The Project](#-about-the-project)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Project Structure](#-project-structure)
- [API Reference](#-api-reference)
- [Database Models](#-database-models)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🚀 About The Project

**ResumeAI** is a full-stack, AI-powered career preparation platform built on the **MERN stack** with **Google Gemini AI** integration. It eliminates the friction of job application preparation by providing:

- **Intelligent resume analysis** against job descriptions with ATS compatibility scoring
- **AI-generated mock interview questions** (technical + behavioral) with suggested answers
- **Skill gap identification** with severity-based categorization
- **Personalized day-wise preparation roadmaps**
- **ATS-optimized resume PDF generation** tailored to specific job descriptions

> **Mission:** Democratize access to expert-level career coaching through Generative AI, so every job seeker can present their best self to recruiters.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔍 **Resume Analysis** | Upload a PDF resume and get it analyzed against a target job description using Gemini AI |
| 📊 **Match Score** | Receive a 0–100 match score indicating how well your resume fits the job requirements |
| 💼 **Technical Questions** | AI generates role-specific technical interview questions with intentions and suggested answers |
| 🗣️ **Behavioral Questions** | Practice behavioral interview questions tailored to your profile and job target |
| ⚠️ **Skill Gap Analysis** | Identify missing skills categorized by severity (Low / Medium / High) |
| 🗺️ **Preparation Roadmap** | Get a personalized day-wise preparation plan with actionable tasks |
| 📄 **ATS Resume Generator** | One-click generation of a professionally formatted, ATS-compliant resume PDF |
| 🔐 **Authentication** | Secure JWT-based auth with cookie storage and token blacklisting on logout |
| 🌑 **Premium Dark UI** | Neo-noir dark theme with glassmorphism, micro-animations, and responsive design |

---

## 🛠️ Tech Stack

### Frontend

| Technology | Version | Purpose |
|---|---|---|
| **React** | 19.2 | UI framework with latest React Compiler support |
| **Vite** | 8.0 | Build tool and dev server with HMR |
| **React Router** | 7.14 | Client-side routing with protected routes |
| **Tailwind CSS** | 4.2 | Utility-first CSS framework via `@tailwindcss/vite` |
| **Axios** | 1.15 | HTTP client for API communication |
| **Sonner** | 2.0 | Toast notification system |
| **Google Material Symbols** | Latest | Icon system for UI elements |
| **Plus Jakarta Sans / Inter** | Latest | Typography (Google Fonts) |

### Backend

| Technology | Version | Purpose |
|---|---|---|
| **Node.js** | 22+ | Server runtime |
| **Express** | 5.2 | Web framework for REST API |
| **MongoDB + Mongoose** | 9.4 | Database and ODM for data modeling |
| **Google GenAI SDK** | 1.49 | Gemini 3 Flash AI model integration |
| **Zod** | 4.3 | Schema validation + structured AI output (JSON schema) |
| **JWT (jsonwebtoken)** | 9.0 | Token-based authentication |
| **bcryptjs** | 3.0 | Password hashing |
| **Multer** | 2.1 | File upload handling (memory storage) |
| **pdf-parse** | 2.4 | PDF text extraction from uploaded resumes |
| **Puppeteer** | 24.42 | HTML-to-PDF conversion for resume generation |
| **cookie-parser** | 1.4 | Parse JWT tokens from cookies |
| **CORS** | 2.8 | Cross-origin resource sharing |
| **dotenv** | 17.4 | Environment variable management |
| **Nodemon** | 3.1 | Dev server auto-restart |

---

## 🏗️ Architecture

```
┌────────────────────────────────────────────────────────────────┐
│                        CLIENT (React)                         │
│                                                                │
│  Landing Page ─── Auth (Login/Register) ─── Dashboard (Home)  │
│                                              │                 │
│                                    Interview Report Page       │
│                                    ├── Technical Questions     │
│                                    ├── Behavioral Questions    │
│                                    ├── Skill Gaps Sidebar      │
│                                    ├── Preparation Roadmap     │
│                                    └── Generate ATS Resume     │
└───────────────────────────┬────────────────────────────────────┘
                            │ Axios (HTTP + Cookies)
                            ▼
┌────────────────────────────────────────────────────────────────┐
│                     SERVER (Express 5)                         │
│                                                                │
│  ┌─────────────┐    ┌──────────────────┐    ┌──────────────┐  │
│  │ Auth Routes  │    │ Interview Routes │    │  Middleware   │  │
│  │ /api/auth/*  │    │ /api/interview/* │    │ JWT + Multer │  │
│  └──────┬──────┘    └───────┬──────────┘    └──────────────┘  │
│         │                   │                                  │
│  ┌──────▼──────┐    ┌───────▼──────────┐                      │
│  │ Auth Ctrl   │    │ Interview Ctrl   │                      │
│  │ register    │    │ generateReport   │                      │
│  │ login       │    │ getReportById    │                      │
│  │ logout      │    │ getAllReports     │                      │
│  │ getMe       │    │ generateResumePDF│                      │
│  └─────────────┘    └───────┬──────────┘                      │
│                             │                                  │
│                     ┌───────▼──────────┐                      │
│                     │   AI Service     │                      │
│                     │ Google Gemini 3  │                      │
│                     │ Flash Preview    │                      │
│                     │ + Zod Schemas    │                      │
│                     │ + Puppeteer PDF  │                      │
│                     └──────────────────┘                      │
└───────────────────────────┬────────────────────────────────────┘
                            │ Mongoose
                            ▼
┌────────────────────────────────────────────────────────────────┐
│                    MongoDB Atlas                               │
│                                                                │
│  Collections:                                                  │
│  ├── users                (User accounts)                     │
│  ├── interviewReportSchema (AI-generated reports)             │
│  └── blacklistTokens      (Revoked JWT tokens)                │
└────────────────────────────────────────────────────────────────┘
```

---

## 📁 Project Structure

```
GenAI-job-prep-platform/
├── Backend/
│   ├── server.js                          # Entry point — starts Express + connects DB
│   ├── package.json                       # Backend dependencies
│   ├── .env                               # Environment variables (not committed)
│   ├── .gitignore
│   └── src/
│       ├── app.js                         # Express app setup, middleware, route mounting
│       ├── config/
│       │   └── database.js                # MongoDB connection via Mongoose
│       ├── controllers/
│       │   ├── auth.controller.js         # Register, Login, Logout, GetMe handlers
│       │   └── interview.controller.js    # Report generation, fetching, PDF generation
│       ├── middleware/
│       │   ├── auth.middleware.js          # JWT verification + token blacklist check
│       │   └── file.middleware.js          # Multer memory storage (3MB limit)
│       ├── models/
│       │   ├── user.model.js              # User schema (username, email, password)
│       │   ├── blacklist.model.js         # Blacklisted JWT tokens
│       │   └── interviewReport.model.js   # Interview report with nested schemas
│       ├── routes/
│       │   ├── auth.routes.js             # /api/auth/* route definitions
│       │   └── interview.route.js         # /api/interview/* route definitions
│       └── services/
│           └── ai.service.js              # Gemini AI integration + Puppeteer PDF gen
│
├── Frontend/
│   ├── index.html                         # HTML entry point with SEO meta tags
│   ├── package.json                       # Frontend dependencies
│   ├── vite.config.js                     # Vite + React + Tailwind plugin config
│   ├── eslint.config.js                   # ESLint flat config
│   └── src/
│       ├── main.jsx                       # React root — providers wrapping <App />
│       ├── App.jsx                        # RouterProvider + Toaster setup
│       ├── App.css                        # (empty — styles in index.css)
│       ├── index.css                      # Complete design system + animations
│       ├── routes/
│       │   └── app.routes.jsx             # Route definitions (/, /login, /register, etc.)
│       └── features/
│           ├── auth/
│           │   ├── auth.context.jsx       # AuthContext provider (user state)
│           │   ├── hooks/
│           │   │   └── useAuth.js         # Auth hook (login, register, logout, getMe)
│           │   ├── services/
│           │   │   └── auth.api.js        # Axios calls to /api/auth/*
│           │   ├── components/
│           │   │   ├── AuthSidebar.jsx    # Animated sidebar for login/register
│           │   │   └── Protected.jsx      # Route guard component
│           │   └── pages/
│           │       └── Auth.jsx           # Login & Register page (shared component)
│           │
│           └── interview/
│               ├── interview.context.jsx  # InterviewContext provider
│               ├── hooks/
│               │   └── useInterview.js    # Interview hook (CRUD + PDF generation)
│               ├── services/
│               │   └── interview.api.js   # Axios calls to /api/interview/*
│               ├── components/
│               │   ├── LandingHeader.jsx  # Navigation bar with auth state
│               │   ├── LandingHero.jsx    # Hero section with CTA
│               │   ├── LandingHowItWorks.jsx  # 4-step process cards
│               │   ├── LandingFeatures.jsx    # Bento grid feature showcase
│               │   ├── LandingPricing.jsx     # Pricing tiers
│               │   ├── LandingAbout.jsx       # Mission statement
│               │   ├── LandingTestimonials.jsx # Social proof quotes
│               │   └── LandingFooter.jsx      # Footer with navigation
│               └── pages/
│                   ├── Landing.jsx        # Landing page (orchestrator)
│                   ├── Home.jsx           # Dashboard — upload resume + view reports
│                   └── Interview.jsx      # Interview report view with tabs
│
└── README.md                              # This file
```

---

## 📡 API Reference

### Base URL

```
http://localhost:3000
```

### Health Check

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/health` | Server health check |

---

### 🔐 Authentication Routes — `/api/auth`

| Method | Endpoint | Auth | Body | Description |
|---|---|---|---|---|
| `POST` | `/api/auth/register` | ❌ Public | `{ username, email, password }` | Register a new user account. Sets JWT cookie. |
| `POST` | `/api/auth/login` | ❌ Public | `{ email, password }` | Login with credentials. Sets JWT cookie. |
| `GET` | `/api/auth/logout` | ❌ Public | — | Logout and blacklist current token. Clears cookie. |
| `POST` | `/api/auth/logout` | ✅ JWT | — | Authenticated logout with token blacklisting. |
| `GET` | `/api/auth/get-me` | ✅ JWT | — | Get current logged-in user's profile. |

**Response Format (Register/Login):**
```json
{
  "message": "User Registered Successfully",
  "user": {
    "id": "ObjectId",
    "username": "johndoe",
    "email": "john@example.com"
  }
}
```

---

### 📋 Interview Routes — `/api/interview`

| Method | Endpoint | Auth | Body | Description |
|---|---|---|---|---|
| `POST` | `/api/interview/` | ✅ JWT | `FormData: { resume (PDF), jobDescription, selfDescription }` | Upload resume + JD → AI generates full interview report |
| `GET` | `/api/interview/` | ✅ JWT | — | Get all interview reports for the logged-in user |
| `GET` | `/api/interview/report/:interviewId` | ✅ JWT | — | Get a specific interview report by ID |
| `POST` | `/api/interview/resume/pdf/:interviewReportId` | ✅ JWT | — | Generate and download ATS-optimized resume PDF |

**Response Format (Generate Report):**
```json
{
  "message": "Interview report generated Successfully",
  "interviewReport": {
    "_id": "ObjectId",
    "title": "Frontend Developer",
    "matchScore": 78,
    "technicalQuestions": [
      {
        "question": "Explain React's reconciliation algorithm",
        "intention": "Tests deep understanding of React internals",
        "answer": "React uses a diffing algorithm that compares..."
      }
    ],
    "behavioralQuestions": [...],
    "skillGaps": [
      { "skill": "TypeScript", "severity": "high" },
      { "skill": "GraphQL", "severity": "medium" }
    ],
    "preparationPlan": [
      {
        "day": 1,
        "focus": "Core JavaScript & TypeScript",
        "tasks": ["Review ES6+ features", "Complete TypeScript handbook"]
      }
    ],
    "createdAt": "2026-06-07T12:00:00.000Z"
  }
}
```

---

## 🗄️ Database Models

### User Model
```javascript
{
  username:  { type: String, unique: true, required: true },
  email:     { type: String, unique: true, required: true },
  password:  { type: String, required: true }  // bcrypt hashed
}
```

### Interview Report Model
```javascript
{
  user:                ObjectId (ref: "users"),
  title:               String,              // AI-generated job title
  matchScore:          Number (0-100),       // Resume-JD match percentage
  resume:              String,               // Extracted PDF text
  jobDescription:      String,               // User-provided JD
  selfDescription:     String,               // User's self-description
  technicalQuestions:   [{ question, intention, answer }],
  behavioralQuestions:  [{ question, intention, answer }],
  skillGaps:           [{ skill, severity: "low"|"medium"|"high" }],
  preparationPlan:     [{ day, focus, tasks: [String] }],
  createdAt:           Date,
  updatedAt:           Date
}
```

### Token Blacklist Model
```javascript
{
  token:      { type: String, required: true },
  createdAt:  Date
}
```

---

## ⚡ Getting Started

### Prerequisites

- **Node.js** 18+ (recommended: 22+)
- **npm** 9+
- **MongoDB Atlas** account (or local MongoDB instance)
- **Google Gemini AI API Key** ([Get one here](https://aistudio.google.com/apikey))

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/RishabJha134/GenAI-job-prep-platform.git
cd GenAI-job-prep-platform
```

**2. Setup Backend**
```bash
cd Backend
npm install
```

Create a `.env` file in the `Backend/` directory:
```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET_KEY=your_jwt_secret_key
GOOGLE_GENAI_API_KEY=your_gemini_api_key
```

**3. Setup Frontend**
```bash
cd ../Frontend
npm install
```

### Running the Application

**Terminal 1 — Start Backend:**
```bash
cd Backend
npm run dev
```
> Backend runs on `http://localhost:3000`

**Terminal 2 — Start Frontend:**
```bash
cd Frontend
npm run dev
```
> Frontend runs on `http://localhost:5173`

---

## 🔑 Environment Variables

| Variable | Description | Required |
|---|---|---|
| `PORT` | Backend server port (default: 3000) | ✅ |
| `MONGO_URI` | MongoDB Atlas connection string | ✅ |
| `JWT_SECRET_KEY` | Secret key for signing JWT tokens | ✅ |
| `GOOGLE_GENAI_API_KEY` | Google Gemini AI API key | ✅ |

---

## 📸 Screenshots

### Landing Page
> Premium dark SaaS landing page with hero section, feature bento grid, pricing tiers, testimonials, and glassmorphic UI elements.

### Dashboard
> Upload resume (PDF), paste job description, describe yourself — then click "Start AI Analysis" to generate a comprehensive interview report.

### Interview Report
> Three-panel layout with tab navigation (Technical Questions, Behavioral Questions, Roadmap), skill gap sidebar with severity badges, and one-click ATS resume generation.

### Auth Pages
> Glassmorphic login/register forms with animated gradient sidebar featuring floating glow circles.

---

## 🔄 How It Works

```
1. 📄 Upload Resume     →  User uploads PDF resume + pastes job description
2. 🔍 PDF Parsing       →  pdf-parse extracts text from uploaded PDF
3. 🤖 AI Analysis       →  Gemini 3 Flash analyzes resume vs. JD using Zod-validated JSON schema
4. 📊 Report Generated  →  Match score, questions, skill gaps, roadmap saved to MongoDB
5. 📋 View Report       →  Interactive tabbed interface with severity-coded skill gaps
6. 📄 Generate Resume   →  Gemini creates HTML resume → Puppeteer converts to PDF → download
```

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Rishab Jha**

- GitHub: [@RishabJha134](https://github.com/RishabJha134)

---

<p align="center">
  Made with ❤️ using React, Express, MongoDB, and Google Gemini AI
</p>
