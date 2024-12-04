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
    
    sendButton.addEventListener("click", handleUserInput);

    userInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        handleUserInput();
      }
    });
  });
  