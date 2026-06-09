const CONFIG = {
  // ── Recipient Info ────────────────────────────────────────────
  name: "Saarah ❤️",
  photo: "./img/saarah.jpeg",
  music: "./music/hbd.mpeg",

  // ── CINEMATIC THEME ───────────────────────────────────────────
  colors: {
    primary: "#f5c542",     // warm gold (cinematic highlight)
    accent: "#ff4d8d",      // soft romantic pink

    dark: {
      background:
        "radial-gradient(circle at top, #0b1020 0%, #05070f 50%, #000000 100%)",
      text: "#f5f5f5",
    },

    light: {
      background:
        "linear-gradient(135deg, #ffffff 0%, #f7f3ff 50%, #eef6ff 100%)",
      text: "#1e293b",
    },
  },

  defaultMode: "dark",

  // ── Sections ──────────────────────────────────────────────────
  sections: [
    {
      type: "greeting",
      title: "Hi",
      subtitle: "Future lawyer, Current birthday girl.",
    },

    {
      type: "countdown",
      from: 3,
      goText: "19 Begins ✨",
    },

    {
      type: "announcement",
      text:
        "Today the court is in session because it's your birthday ⚖️🎂",
    },

    {
      type: "chatbox",
      message:
        "Happy Birthday, Saarah! I hope this year brings you lots of laughter, good health, and countless reasons to smile. You deserve all the happiness coming your way.",
      buttonText: "Send",
    },

    // ── OPENING IDEA ─────────────────────────────────────────────
    {
      type: "ideas",
      speed: 70,
      lines: [
        "I could've just sent a birthday message.",
        "That would've been easier.",
        "But you deserve something more cinematic.",
        "So I built this instead.",
        "Just to make you smile today 🤍",
      ],
      bigLetters: "19",
    },

    {
      type: "quote",
      text:
        "Your remedy is within you, but you do not sense it. Your sickness is from you, but you do not perceive it. You think you are a small entity, but within you is enfolded the entire universe.",
      author: "Imam Ali (AS)",
    },

    {
      type: "stars",
      count: 25,
    },

    {
      type: "balloons",
      count: 19,
    },

    {
      type: "profile",
      wishTitle: "Happy Birthday, Saarah ❤️",
      wishText:
        "May Allah bless your 19th year with happiness, strength, success, and people who genuinely care about you. Thank you for being someone who makes the lives of others brighter simply by being in them. 🤍",
    },

    {
      type: "fireworks",
      count: 25,
    },

    {
      type: "confetti",
      count: 25,
    },

    {
      type: "closing",
      text:
        "Thanks for taking a few minutes to go through this. I hope it made you smile today.",
      replayText: "And if it did, you can watch it again. 😊",
    },
  ],
};