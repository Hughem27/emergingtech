document.addEventListener("DOMContentLoaded", () => {
  const conversation = document.getElementById("conversation");
  const userInput = document.getElementById("user-input");
  const sendButton = document.getElementById("send-button");

  // define some basic Eliza responses
  const elizaResponses = [
    { pattern: /hello|hi|hey/i, response: "Hello, How can I help you today?" },
    { pattern: /how are you|what's up/i, response: "I'm Eliza, I don't have feelings but I'm here to help you with yours." },
    { pattern: /i feel (.*)/i, response: "Why do you feel $1?" },
    { pattern: /why (.*)/i, response: "Why do you think $1?" },
    { pattern: /i need (.*)/i, response: "Why do you need $1?" },
    { pattern: /i want (.*)/i, response: "Why do you want $1?" },
    { pattern: /i am (.*)/i, response: "How long have you been $1?" },
    { pattern: /i can't (.*)/i, response: "What makes you think you can't $1?" },
    { pattern: /i'm (.*)/i, response: "Why are you $1?" },
    { pattern: /are you (.*)/i, response: "Why are you interested in whether I am $1 or not?" },
    { pattern: /what (.*)/i, response: "Why do you ask?" },
    { pattern: /because (.*)/i, response: "Is that the real reason?" },
    { pattern: /sorry/i, response: "Please don't apologize." },
    { pattern: /thank you|thanks/i, response: "You're welcome!" },
    { pattern: /goodbye|bye/i, response: "Goodbye! It was nice talking to you." },
    { pattern: /.*/, response: "Can you tell me more?" },
  ];

  // define reflections to make the conversation more natural
  const reflections = {
    "i": "you",
    "i am": "you are",
    "i'm": "you are",
    "im": "you are",
    "my": "your",
    "me": "you",    
    "you are": "I am",
    "you": "me",
    "your": "my",
    "youre": "my",
    "you're": "my",
  };
  
  //  define basic keywords for sentiment analysis
  const positiveKeywords = ["up", "amazining", "like", "upbeat", "good", "great", "happy", "fantastic", "positive", "love", "joyful", "excited", "pleased", "content", "cheerful", "delighted", "thrilled", "wonderful"];
  const negativeKeywords = ["down", "awful", "sad", "negative", "bad", "terrible", "dislike", "hate", "miserable", "depressed", "unhappy", "angry", "frustrated", "upset", "gloomy", "distressed", "sorrowful"];

  // detect user sentiment based on keywords
  function detectSentiment(message) {
    const lowerCaseMessage = message.toLowerCase();
    for (const word of positiveKeywords) {
      if (lowerCaseMessage.includes(word)) {
        return "positive";
      }
    }
    for (const word of negativeKeywords) {
      if (lowerCaseMessage.includes(word)) {
        return "negative";
      }
    }
    return "neutral";
  }

  // relfect the user's input in the response to be more human
  function reflect(fragment) {
    return fragment.split(" ").map(word => reflections[word.toLowerCase()] || word).join(" ");
  }

  function getResponse(userMessage) {
    const sentiment = detectSentiment(userMessage);

    // Respond based on sentiment
    if (sentiment === "positive") {
      return "Thats great! Plaese tell me more about it.";
    } else if (sentiment === "negative") {
      return "I'm sorry to hear you're feeling this way. Can you share more about what's troubling you and how I can help?";
    }

    for (let i = 0; i < elizaResponses.length; i++) {
      const match = userMessage.match(elizaResponses[i].pattern);
      if (match) {
        const response = elizaResponses[i].response.replace("$1", reflect(match[1] || ""));
        return response;
      }
    }
    return "I don't follow, can you please rephrase."; 
  }

  // add a message into the conversation
  function addMessage(sender, message) {
    const messageElement = document.createElement("div");
    messageElement.textContent = `${sender}: ${message}`;
    messageElement.classList.add("message", sender.toLowerCase());
    conversation.appendChild(messageElement);
    conversation.scrollTop = conversation.scrollHeight; 
  }
  // handle user message
  function handleUserInput() {
    const userMessage = userInput.value.trim();
    if (userMessage) {
      addMessage("You", userMessage); 
      const elizaReply = getResponse(userMessage); 
      addMessage("ELIZA", elizaReply); 
      userInput.value = ""; 
    }
  }

  sendButton.addEventListener("click", handleUserInput);

  userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      handleUserInput();
    }
  });
});