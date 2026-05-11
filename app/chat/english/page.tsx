"use client";

import { useState } from "react";

export default function EnglishTutor() {

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      sender: "English Tutor",
      text: "Hello 👋 I am your English AI tutor. Ask grammar, meanings or writing doubts.",
    },
  ]);

  const sendMessage = () => {

    if (!message) return;

    setMessages([
      ...messages,
      {
        sender: "You",
        text: message,
      },
      {
        sender: "English Tutor",
        text: "I will explain this English concept step-by-step.",
      },
    ]);

    setMessage("");
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#0F172A",
        color: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >

      <div
        style={{
          padding: "20px",
          fontSize: "28px",
          fontWeight: "bold",
          backgroundColor: "#EC4899",
        }}
      >
        📘 English AI Tutor
      </div>

      <div
        style={{
          flex: 1,
          padding: "20px",
          overflowY: "auto",
        }}
      >

        {messages.map((msg, index) => (

          <div
            key={index}
            style={{
              marginBottom: "20px",
            }}
          >

            <div
              style={{
                backgroundColor:
                  msg.sender === "You"
                    ? "#4F46E5"
                    : "#1E293B",

                padding: "16px",
                borderRadius: "18px",
              }}
            >

              <strong>{msg.sender}</strong>

              <div
                style={{
                  marginTop: "8px",
                }}
              >
                {msg.text}
              </div>

            </div>

          </div>

        ))}

      </div>

      <div
        style={{
          display: "flex",
          gap: "10px",
          padding: "20px",
        }}
      >

        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask English doubts..."
          style={{
            flex: 1,
            padding: "14px",
            borderRadius: "14px",
            border: "none",
            outline: "none",
          }}
        />

        <button
          onClick={sendMessage}
          style={{
            backgroundColor: "#EC4899",
            color: "white",
            border: "none",
            padding: "14px 24px",
            borderRadius: "14px",
            fontWeight: "bold",
          }}
        >
          Send
        </button>

      </div>

    </main>
  );
}
