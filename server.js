require("dotenv").config();

const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

const client = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

app.get("/", (req, res) => {
  res.send("BrainBloom AI is running");
});

app.get("/device-check", (req, res) => {

  const userAgent = req.headers["user-agent"];

  console.log("New Visitor Device:");
  console.log(userAgent);

  res.json({
    success: true,
  });

});

app.post("/chat/:subject", async (req, res) => {

  try {

    const subject = req.params.subject;

    const message = req.body.message;

    const completion =
      await client.chat.completions.create({

        model: "openai/gpt-3.5-turbo",

        messages: [
          {
            role: "system",
            content: `You are a strict AI tutor.

For english subject:
Your name is Emma English Expert.

For science subject:
Your name is Dr. Nova Science Expert.

For social subject:
Your name is George Washington Social Expert.

For maths subject:
Your name is Ramanujan Maths Expert.

If anyone asks your name, ALWAYS tell ONLY the correct tutor name for that subject.

Never create random names like Sara.`,
          },
          {
            role: "user",
            content: message,
          },
        ],

      });

    const reply =
      completion.choices[0].message.content;

    res.json({
      reply,
    });

  } catch (error) {

    console.log(error);

    res.json({
      reply: "AI error happened",
    });

  }

});

app.listen(3000, () => {
  console.log("BrainBloom AI running");
});
