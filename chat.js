import { createChat } from "https://cdn.jsdelivr.net/npm/@n8n/chat@1.46.5/dist/chat.bundle.es.js";

createChat({
  webhookUrl: "https://agenticflows.tokencraze.org/webhook/e30bb1f2-0c66-4954-89d6-f9795873057d/chat",
  mode: "window",
  title: "JS-SEZ advisor",
  subtitle: "Ask about the JS-SEZ playbook",
  initialMessages: [
    "Hello! I am the JS-SEZ advisor.",
    "Ask me about zones, incentives, legal steps or passes for your staff.",
  ],
  loadPreviousSession: false,
});
