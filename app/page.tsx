"use client";

import Link from "next/link";

export default function Home() {

  const subjects = [
    {
      name: "English",
      color: "#EC4899",
      emoji: "📘",
      link: "/chat/english",
    },
    {
      name: "Science",
      color: "#06B6D4",
      emoji: "🧪",
      link: "/chat/science",
    },
    {
      name: "Social Studies",
      color: "#10B981",
      emoji: "🌍",
      link: "/chat/social",
    },
    {
      name: "Mathematics",
      color: "#F97316",
      emoji: "🧮",
      link: "/chat/maths",
    },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#0F172A",
        padding: "20px",
        color: "white",
        fontFamily: "Arial",
      }}
    >

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >

        <div
          style={{
            textAlign: "center",
            marginTop: "60px",
          }}
        >

          <h1
            style={{
              fontSize: "52px",
              fontWeight: "bold",
            }}
          >
            BrainBloom AI
          </h1>

          <p
            style={{
              marginTop: "20px",
              fontSize: "20px",
              color: "#CBD5E1",
            }}
          >
            Choose your AI tutor and start learning.
          </p>

        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            marginTop: "60px",
          }}
        >

          {subjects.map((subject, index) => (

            <div
              key={index}
              style={{
                backgroundColor: subject.color,
                borderRadius: "24px",
                padding: "30px",
              }}
            >

              <div
                style={{
                  fontSize: "50px",
                }}
              >
                {subject.emoji}
              </div>

              <h2
                style={{
                  marginTop: "20px",
                  fontSize: "30px",
                  fontWeight: "bold",
                }}
              >
                {subject.name}
              </h2>

              <p
                style={{
                  marginTop: "10px",
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                Learn with your personal AI tutor.
              </p>

              <Link href={subject.link}>

                <button
                  style={{
                    marginTop: "20px",
                    backgroundColor: "white",
                    color: "black",
                    border: "none",
                    padding: "12px 20px",
                    borderRadius: "14px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  Start Learning
                </button>

              </Link>

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}
