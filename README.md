# GenieX

<div align="center">

![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)
![Maintained](https://img.shields.io/badge/Maintained-yes-brightgreen.svg)
![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Status](https://img.shields.io/badge/status-active-blue)

</div>

---

**GenieX** is a next-generation modular chatbot solution engineered to deliver dynamic, context-aware conversations across multiple platforms.  
The application architecture is segregated into two independent processes: a **Client** and a **Backend**, enabling superior scalability, maintainability, and future innovation.

> 🚀 Future-driven. 🔒 Security-first. 🛠️ Built for extensibility.

---

## 🗂 Project Structure

```
/GenieX
    ├── /client      # Frontend application (UI Layer)
    └── /backend     # Backend server (API & Business Logic)
```

Each service is self-contained, hosting its own dependencies, environment variables, and runtime configurations.

---

## ⚙️ Prerequisites

- **Node.js** (>= 16.x recommended for both client and backend if applicable)
- **Package Managers**: `npm` or `yarn`
- **Environment Variables**: `.env` files specific to each module

---

## 🔑 Environment Variables

Environment variables must be configured separately for the **Client** and **Backend** to ensure operational integrity across environments.

### `/client/.env`

```
VITE_PUBLISHABLE_KEY=
VITE_IMAGE_ENDPOINT=
VITE_IMAGE_PUBLIC_KEY=
VITE_BACKEND_URL=
VITE_GEMINI_API_KEY=
VITE_PORT=
```

### `/backend/.env`

```
IMAGE_ENDPOINT=
IMAGE_PUBLIC_KEY=
IMAGE_PRIVATE_KEY=
PORT=
CLIENT_URL=
MONGO=
CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
GEMINI_API_KEY=
```

> **Note:** `.env` files must remain confidential and must be excluded from version control using `.gitignore`.

---

## 🤖 Gemini AI Integration

The **GenieX Backend** is seamlessly integrated with **Google's Gemini API** to generate intelligent, context-aware responses.  
Multiple model variants were evaluated and deployed during testing phases, including:

- **Gemini 1.5 Pro**
- **Gemini 1.5 Flash**
- **Gemini 2.0 Pro**
- **Gemini 2.0 Flash**

All **Flash** (optimized for latency) and **Pro** (optimized for accuracy) models were strategically tested to benchmark performance under different real-world scenarios.

> 🎯 The backend dynamically accommodates model switching to optimize responsiveness, accuracy, or cost-efficiency based on deployment needs.

---

## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/nameishyam/chat-bot.git
cd chat-bot
```

### 1. Launch Backend

Navigate to the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Start the server:

```bash
npm start
```

### 2. Launch Client

Navigate to the client directory:

```bash
cd ../client
```

Install dependencies:

```bash
npm install -f
```

Start the client:

```bash
npm run dev
```

---

## 📦 Deployment Guidelines

We recommend deploying the **backend** and **client** separately for maximum resilience and performance:

- **Backend**: Host on platforms like AWS EC2, Azure App Service, or Heroku.
- **Client**: Deploy via Vercel, Netlify, or traditional CDN strategies for optimal delivery.

Proper CI/CD pipelines are strongly encouraged for enterprise-grade deployments.

---

## 🛡 Security and Compliance

- Adhere strictly to role-based access control (RBAC) where applicable.
- Regularly rotate API keys and authentication tokens.
- Monitor system health and audit application logs for anomalies.
- Use environment-specific encryption and secure communications (TLS/SSL).
- Ensure compliance with API usage policies, especially regarding Gemini API terms.

---

## 👥 Contributing

We embrace a collaborative culture that fosters innovation.

Steps to contribute:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add: Your feature description'`
4. Push to your branch: `git push origin feature/your-feature-name`
5. Open a Pull Request against `main`.

All contributions — from code to documentation — are highly valued.

---

## 📄 License

This project is licensed under the [Apache 2.0 License](LICENSE).

> © [2025] [nameishyam]. All rights reserved.

> You may not use this file except in compliance with the License.  
> You may obtain a copy at [http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0).

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "**AS IS**" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.

---

## 📣 Acknowledgements

- Google's Gemini AI team for pioneering LLM advancements.
- Open-source contributors and community innovators.
- Early beta testers for providing critical feedback.
- Cloud infrastructure providers facilitating seamless deployments.

At GenieX, we recognize that innovation thrives on collaboration.

---

## 🔮 Vision Statement

_GenieX_ aspires to redefine conversational interfaces by seamlessly blending human intuition with machine intelligence.  
Our future roadmap includes advanced natural language understanding, personalization engines, real-time translation, and cross-domain integrations.

> Together, we pioneer tomorrow’s conversations. 🌟
