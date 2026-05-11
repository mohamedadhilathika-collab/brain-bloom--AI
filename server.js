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
            content:
              `You are an expert ${subject} teacher for students. Explain clearly with examples.`,
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
