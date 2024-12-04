document.addEventListener("DOMContentLoaded", () => {
  const conversation = document.getElementById("conversation");
  const userInput = document.getElementById("user-input");
  const sendButton = document.getElementById("send-button");

  const elizaResponses = [
    { pattern: /hello|hi|hey/i, response: "Hello, How can I help you today?" },
    { pattern: /how are you|Whats up/i, response: "I'm Eliza, I don't have feelings but I'm here to help you with yours" },
    { pattern: /i feel (.*)/i, response: "Why do you feel $1?" },
    { pattern: /why (.*)/i, response: "Why do you think $1?" },
    { pattern: /.*/, response: "Can you tell me more." }, 
  ];

  function getResponse(userMessage) {
    for (let i = 0; i < elizaResponses.length; i++) {
      const match = userMessage.match(elizaResponses[i].pattern);
      if (match) {
        return elizaResponses[i].response.replace("$1", match[1] || "");
      }
    }
    return "I'm not sure what you mean."; 
  }

  function addMessage(sender, message) {
    const messageElement = document.createElement("div");
    messageElement.textContent = `${sender}: ${message}`;
    messageElement.classList.add("message", sender.toLowerCase());
    conversation.appendChild(messageElement);
    conversation.scrollTop = conversation.scrollHeight; 
  }

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