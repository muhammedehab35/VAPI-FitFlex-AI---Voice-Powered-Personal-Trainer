# 🏋️‍♂️ VAPI-FitFlex AI - Voice-Powered Personal Trainer

**An intelligent fitness platform powered by VAPI Voice AI** that transforms your fitness journey through conversational AI coaching. Get personalized workout routines and nutrition plans through natural voice interactions, making fitness guidance as easy as having a conversation with your personal trainer.

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![VAPI AI](https://img.shields.io/badge/VAPI_AI-FF6B6B?style=for-the-badge&logo=ai&logoColor=white)](https://vapi.ai/)
[![Convex](https://img.shields.io/badge/Convex-5E5CE6?style=for-the-badge&logo=convex&logoColor=white)](https://convex.dev/)
[![Clerk](https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white)](https://clerk.dev/)

---

## 🎯 Why VAPI-FitFlex AI?

Traditional fitness apps require endless forms and clicking. **VAPI-FitFlex AI** revolutionizes this by letting you simply **talk** to your AI trainer. Using **VAPI's advanced voice AI technology**, you can describe your goals, preferences, and limitations naturally, and receive instant personalized fitness and nutrition guidance.

---

## 📹 Demo Previews

### 🎥 Futuristic Voice-Enabled UI
https://github.com/user-attachments/assets/bb9757e4-7b81-46f6-b1e1-fd7d82dea211

### 🎤 Talk with VAPI Coach - Generate Your Personal Program
https://github.com/user-attachments/assets/671f6cc9-1f66-4173-b12b-7224dcc53a16

### 🗣️ Real-Time Voice Interaction Demo
https://github.com/user-attachments/assets/f56a4823-ac3a-4370-9c1e-61c18052dfac

---

## ✨ Core Features

### 🎙️ **VAPI Voice AI Integration**
- **Natural Conversations**: Talk to your AI trainer like a real person
- **Voice Commands**: Control the entire app hands-free
- **Multi-language Support**: VAPI supports 20+ languages
- **Real-time Responses**: Get instant feedback and guidance
- **Voice-to-Action**: Generate workouts and meal plans just by speaking

### 💪 **AI-Powered Fitness**
- 🏃‍♂️ **Smart Workout Generation**: Personalized routines based on your voice input
- 🥗 **Nutrition Planning**: Custom meal plans aligned with your goals
- 📊 **Progress Tracking**: Voice-activated logging and updates
- 🎯 **Goal Setting**: Define and adjust goals through conversation
- 📈 **Adaptive Programs**: AI adjusts plans based on your feedback

### 🔐 **User Experience**
- **Secure Authentication** via Clerk
- **Cloud Sync** with Convex serverless backend
- **Responsive Design** for all devices
- **Offline Mode** for saved workouts
- **Social Features** to share progress

---

## 🛠️ Tech Stack

| Component | Technology | Purpose |
|-----------|------------|---------|
| **Voice AI** | VAPI AI | Natural language processing & voice interactions |
| **Frontend** | Next.js 14 | React framework with App Router |
| **Styling** | Tailwind CSS | Utility-first CSS framework |
| **Database** | Convex | Real-time serverless backend |
| **Auth** | Clerk | User management & authentication |
| **Deployment** | Vercel | Edge network deployment |
| **Analytics** | VAPI Analytics | Voice interaction insights |

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- VAPI AI account ([Get API key](https://vapi.ai))
- Clerk account
- Convex account

### Installation

```bash
# Clone the VAPI-FitFlex repository
git clone https://github.com/your-username/VAPI-FitFlex-AI.git
cd VAPI-FitFlex-AI

# Install dependencies
npm install
# or
yarn install
```

### Environment Setup

Create a `.env.local` file in the root directory:

```env
# VAPI Voice AI Configuration
NEXT_PUBLIC_VAPI_API_KEY=your_vapi_api_key
NEXT_PUBLIC_VAPI_WORKFLOW_ID=your_workflow_id
NEXT_PUBLIC_VAPI_ASSISTANT_ID=your_assistant_id
VAPI_WEBHOOK_SECRET=your_webhook_secret

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

# Convex Database
CONVEX_DEPLOYMENT=your_convex_deployment
NEXT_PUBLIC_CONVEX_URL=your_convex_url

# Optional: Analytics
NEXT_PUBLIC_VAPI_ANALYTICS_ID=your_analytics_id
```

### Running the Application

```bash
# Start Convex backend
npx convex dev

# In a new terminal, start the development server
npm run dev
# or
yarn dev

# Build for production
npm run build
npm run start
```

Visit `http://localhost:3000` to see the application.

---

## 🎤 VAPI Voice Commands

Example voice commands you can use:

- **"Hey VAPI, create a workout plan for building muscle"**
- **"I want to lose 10 pounds in 2 months"**
- **"Generate a vegetarian meal plan for 1800 calories"**
- **"Log my workout: 30 minutes cardio, 20 minutes weights"**
- **"What should I eat after my workout?"**
- **"Adjust my plan, my knee is sore"**

---

## 📁 Project Structure

```
VAPI-FitFlex-AI/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   └── vapi/         # VAPI webhook handlers
│   ├── dashboard/        # User dashboard
│   ├── workouts/         # Workout modules
│   └── nutrition/        # Nutrition modules
├── components/            # React components
│   ├── vapi/            # VAPI-specific components
│   │   ├── VoiceButton.tsx
│   │   └── VapiProvider.tsx
│   └── ui/              # UI components
├── convex/               # Convex backend
│   ├── schema.ts        # Database schema
│   └── functions/       # Serverless functions
├── lib/                  # Utility functions
│   └── vapi/           # VAPI integration helpers
└── public/              # Static assets
```

---

## 🔌 VAPI Integration Details

### Setting up VAPI Assistant

1. Create a VAPI account at [vapi.ai](https://vapi.ai)
2. Configure your assistant with fitness-focused prompts
3. Set up webhook endpoints for real-time events
4. Configure voice settings (language, voice type, speed)

### Example VAPI Configuration

```javascript
// lib/vapi/config.js
export const vapiConfig = {
  apiKey: process.env.NEXT_PUBLIC_VAPI_API_KEY,
  assistant: {
    firstMessage: "Hi! I'm your VAPI-powered fitness coach. How can I help you today?",
    model: {
      provider: "openai",
      model: "gpt-4",
      systemPrompt: "You are a professional fitness coach..."
    },
    voice: {
      provider: "elevenlabs",
      voiceId: "coach-voice-id",
      stability: 0.5,
      similarityBoost: 0.75
    }
  }
};
```

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/vapi-enhancement`)
3. Commit your changes (`git commit -m 'Add VAPI voice analytics'`)
4. Push to the branch (`git push origin feature/vapi-enhancement`)
5. Open a Pull Request

---

## 📊 VAPI Analytics Dashboard

Track voice interaction metrics:
- User engagement rates
- Most common voice commands
- Session duration
- Conversion metrics
- Error rates and debugging

---

## 🐛 Troubleshooting

### Common VAPI Issues

| Issue | Solution |
|-------|----------|
| VAPI not responding | Check API key and network connection |
| Voice not detected | Ensure microphone permissions are granted |
| Slow responses | Verify VAPI webhook configuration |
| Authentication errors | Check Clerk and VAPI integration settings |

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **VAPI AI** for exceptional voice AI capabilities
- **Convex** for real-time backend infrastructure
- **Clerk** for seamless authentication
- **Next.js** team for the amazing framework

---

## 📞 Support

- 📧 Email: support@vapi-fitflex.ai
- 💬 Discord: [Join our community](https://discord.gg/vapi-fitflex)
- 📖 Documentation: [docs.vapi-fitflex.ai](https://docs.vapi-fitflex.ai)
- 🐛 Issues: [GitHub Issues](https://github.com/your-username/VAPI-FitFlex-AI/issues)

---

<p align="center">
  <strong>Built with ❤️ using VAPI Voice AI</strong>
  <br>
  <em>Transform your fitness journey through the power of voice</em>
</p>

---

### ⭐ Star us on GitHub!

If you find VAPI-FitFlex AI helpful, please consider giving us a star! It helps us grow and improve the platform.

[![GitHub stars](https://img.shields.io/github/stars/your-username/VAPI-FitFlex-AI?style=social)](https://github.com/your-username/VAPI-FitFlex-AI)
