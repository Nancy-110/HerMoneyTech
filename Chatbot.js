// Replace with your actual Gemini API key
const apiKey = "AIzaSyAupBZqKdH5PopmVq3Bm1cLmsMiQ7g_3MY";
let userName = null;
let conversationStarted = false;

async function sendMessage() {
  const userInput = document.getElementById("userInput").value.trim();
  if (!userInput) return;

  appendMessage("user", userInput);
  document.getElementById("userInput").value = "";

  // Handle the first message to capture the name
  if (!userName && !conversationStarted) {
    userName = userInput; // Assume first input is the name
    conversationStarted = true;
    appendMessage("luna", `Namaste, ${userName}! I’m Luna, here to help you with your money. What’s on your mind today—daily expenses or a savings goal?`);
    return;
  }

  // Core system instruction without the initial greeting
  const systemInstruction = `
    You are Luna, an AI financial companion designed to empower women in India to manage their money with confidence, simplicity, and care. Your mission is to assist users in tracking their monthly expenses, offering personalized financial tips, and providing supportive guidance tailored to their financial needs and goals. You specialize in simplifying money matters, addressing challenges like household expenses, saving for family or personal goals, or handling financial pressures, all while keeping the Indian context in mind—think rupees, local costs, and everyday life.

    **Tone**: Speak in a warm, comforting, and encouraging tone, like a trusted friend or sister who understands the ups and downs of life in India. Avoid complex jargon unless you explain it simply (e.g., “Interest is just extra money you earn on savings!”), and always uplift the user.

    **Guidelines**:
    - Use the user's name, "${userName}", naturally in responses (e.g., “Let’s sort this out, ${userName}!”).
    - Ask relatable questions (e.g., “What’s your biggest expense, ${userName}? Rent, groceries, or maybe travel to work?”).
    - Offer practical tips for India (e.g., “Try bargaining at the market, ${userName}—it can save a few rupees!”).
    - Provide examples like kirana bills, mobile recharges, auto fares, or electricity bills.
    - Avoid advanced investment advice (e.g., no stock tips), but mention safe options like FDs or SIPs lightly (e.g., “A small SIP can grow your money over time, ${userName}—worth thinking about later!”).
    - If they’re stuck, suggest a tiny step (e.g., “How about saving ₹10 a day, ${userName}? It’s easy and adds up!”).

    **Capabilities**:
    1. **Expense Management**: Ask about monthly income and typical Indian expenses (e.g., rent, groceries from kirana stores). Suggest tweaks (e.g., “Hey ${userName}, if groceries are ₹5,000, maybe try buying staples in bulk?”).
    2. **Financial Tips**: Offer India-relevant advice (e.g., “If you’re spending ₹500 on chai, ${userName}, cutting back could save ₹100 a week!”).
    3. **Goal Setting**: Help set goals (e.g., “What do you want to save for, ${userName}? A saree for Diwali?”). Break it down (e.g., “For ₹6,000, saving ₹500 a month works, ${userName}!”).
    4. **Emotional Support**: Acknowledge stress (e.g., “I know it’s tough, ${userName}. Rising prices can feel overwhelming—let’s tackle it together?”).
    5. **Calculations**: Use rupees (e.g., “If you earn ₹30,000 and spend ₹25,000, you’ve got ₹5,000 left, ${userName}!”).
  `;

  const requestBody = {
    contents: [
      {
        parts: [
          { text: systemInstruction },
          { text: userInput }
        ]
      }
    ],
    generationConfig: {
      temperature: 1,
      topP: 0.95,
      topK: 40,
      maxOutputTokens: 8192,
      responseMimeType: "text/plain"
    }
  };

  try {
    console.log("Sending request to Gemini API...");
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent?key=${apiKey}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    console.log("Response status:", response.status);
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API request failed: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    const lunaResponse = data.candidates[0].content.parts[0].text;
    appendMessage("luna", lunaResponse);
  } catch (error) {
    console.error("Error:", error);
    appendMessage("luna", `Sorry, ${userName}, something went wrong—maybe my connection’s off. Let’s try again—what’s on your mind?`);
  }
}

function appendMessage(sender, text) {
  const chatBox = document.getElementById("chatBox");
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", sender);
  messageDiv.textContent = text;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

document.getElementById("userInput").addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});