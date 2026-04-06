<div align="center">
  <img src="./public/authops.png" alt="AuthOps Banner" width="100%" style="border-radius: 12px; margin-bottom: 20px" />

  <h1>🛡️ AuthOps: The Agentic Automation Platform</h1>

  <p>
    <strong>A next-generation AI command center for managing Auth0 environments, GitHub operations, and Telegram webhook alerts.</strong>
  </p>

  <p>
    <a href="#features">Features</a> •
    <a href="#who-is-this-for">Who uses it?</a> •
    <a href="#tech-stack">Tech Stack</a> •
    <a href="#getting-started">Getting Started</a>
  </p>
</div>

<br />

## 🌟 What is AuthOps?

AuthOps is a sophisticated, "agentic" platform built to keep software teams in a flow state. Instead of juggling multiple dashboards for identity management, source code control, and team notifications, AuthOps unifies them behind a conversational AI interface and robust background workflows.

Simply tell the AuthOps Agent what to do—whether it's rotating an Auth0 production secret, drafting a complex GitHub Pull Request, or updating your team on Telegram—and watch it securely handle the entire multi-step process in the background.

---

## ⚡ Who is this for?

- **DevOps & Platform Teams**: Automate tedious, high-friction tasks like secure token rotations without managing custom bash scripts.
- **Lead Developers / Maintainers**: Rapidly review PRs, automatically merge approved code, and instantly ping the team on Telegram without context switching.
- **Security Teams**: Maintain tight control over Auth0 application secrets, ensuring they are automatically rotated and synced without human error.
- **Founders & Open-Source Maintainers**: Look like a massive team by having an AI agent fully manage your pipeline and infrastructure operations.

---

## ⚙️ How It Works (The Workflow)

AuthOps isn't just a standard dashboard; it is an **event-driven, agent-orchestrated pipeline**. Here is a real-world example of how it operates:

1. **The Prompt**: You tell the AI, *"Rotate the Auth0 secret for our production backend and notify the team."*
2. **The Analysis**: The AI agent (powered by Groq) parses your request, identifies the target Auth0 application from the database, and calls the required internal tool.
3. **The Dispatch**: Instead of running a fragile, long-running HTTP request, the Next.js API hands the job off to **Inngest**. You can close your laptop right now, and the job will still finish.
4. **The Execution**: Inngest's durable background worker securely talks to the Auth0 Management API, rotates the Client Secret, and updates the database.
5. **The Alert**: The moment the rotation succeeds, Inngest triggers a webhook to your **Telegram Bot**, instantly pinging your DevOps channel with the new status.
6. **The Result**: Your chat UI drops a clean, RetroUI 3D confirmation card into the feed. 

You just completed a process that usually requires 3 different tabs and manual copy-pasting—all in a single chat message.

---

## 🔥 Key Features

### 🤖 1. Native Agentic Interface
- **Context-Aware AI Chat**: Talk to the system using natural language. The agent understands your database state and what operations are currently running.
- **Multi-Threaded**: Handle multiple agent interactions simultaneously without freezing the UI.
- **High-Fidelity AI Logs**: See step-by-step terminal execution traces right inside the mock dashboard.

### 🛡️ 2. Auth0 Token Vault Management
- **M2M Secret Rotation**: Automatically securely trigger an Auth0 Machine-to-Machine client secret rotation.
- **Automated Sync**: The agent doesn't just rotate the token—it can automatically update your downstream environment variables or GitHub secrets with the new token.

### 🐙 3. GitHub Automation
- **AI-Powered PR Generation**: Tell the agent what feature you want, and it will spawn a background workflow to create the branch, commit code, and open a PR.
- **Auto-Merge Controls**: Let the agent review and execute PR merges based on your parameters.

### 📱 4. Telegram Webhook Alerts
- **Real-Time Sync**: Ensure your entire team stays in the loop.
- **Event-Driven Messages**: Background Inngest workflows automatically fire off Telegram alerts when an Auth0 token is rotated or a high-priority PR is merged.

### 🎨 5. Premium "EnergyBeam" UI/UX
- **Nord Dark Theme**: Beautiful, professional, high-contrast dark mode focusing on specific Polar Night and Frost color palettes.
- **RetroUI 3D Interactions**: Satisfying, deep 3D physical tactile buttons and glassmorphism cards.
- **Performance Optimized**: Zero screen tearing, butter-smooth Framer Motion spring animations, and heavy usage of NextJS Server Component optimizations.

---

## 🏗️ Tech Stack

AuthOps leverages the absolute bleeding edge of the modern web ecosystem:
- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Styling**: [TailwindCSS v4](https://tailwindcss.com/) + Custom Nord Variables
- **Database**: [PostgreSQL (Neon HTTP)](https://neon.tech/) + [Prisma ORM](https://www.prisma.io/)
- **Authentication**: [Auth0 by Okta](https://auth0.com/) (`@auth0/nextjs-auth0`)
- **Background Jobs**: [Inngest](https://www.inngest.com/) for guaranteed, durable background workflow execution
- **Animations**: [Framer Motion](https://www.framer.com/motion/)

---

## 🚀 Getting Started

### Prerequisites
1. **Node.js**: v18+ 
2. **Neon DB**: Supply a Postgres connection string.
3. **Auth0 Tenant**: You will need Client ID, Client Secret, and Issuer URL.
4. **Inngest Account**: Or run the local Dev Server (`npx inngest-cli dev`).
5. **Telegram Bot Token**: Created via BotFather.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/authops.git
   cd authops/client
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Rename `.env.example` to `.env` and fill in your keys:
   ```env
   # Auth0
   AUTH0_SECRET='use_a_long_random_string'
   AUTH0_BASE_URL='http://localhost:3000'
   AUTH0_ISSUER_BASE_URL='https://YOUR_TENANT.auth0.com'
   AUTH0_CLIENT_ID='...'
   AUTH0_CLIENT_SECRET='...'

   AUTH0_M2M_CLIENT_ID='...'
   AUTH0_M2M_CLIENT_SECRET='...'

   # Database
   DATABASE_URL='postgresql://...'

   # Integrations
   TELEGRAM_BOT_TOKEN='...'
   API_KEY_GROQ='...'
   INNGEST_DEV=1
   ```

4. **Initialize Database:**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the Development Environment:**
   You need to run Next.js and the Inngest Dev Server simultaneously. We recommend opening two terminals:

   *Terminal 1 (Next.js):*
   ```bash
   npm run dev
   ```

   *Terminal 2 (Inngest Worker):*
   ```bash
   npx inngest-cli dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) to view the AuthOps platform.

---

<div align="center">
  <i>Built with speed, security, and agentic workflows in mind.</i><br />
  Apache 2.0 Open Source.
</div>
