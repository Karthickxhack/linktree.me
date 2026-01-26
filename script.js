const quotes = [
    "No one will clap for you. Keep going 💯",
    "Hack to learn, not to destroy.",
    "Security is built by discipline.",
    "Think like an attacker.",
    "Every breach is a lesson.",
    "Learn silently. Win loudly.",
    "Cybersecurity is a mindset.",
    "Defend what matters.",
    "The quieter you become, the more you hear.",
    "Skill beats motivation."
];

const hints = [
    "Always validate input.",
    "Never trust open ports.",
    "Logs tell stories.",
    "Patch before exploit.",
    "OSINT is power."
];

const thoughts = [
    "Discipline builds mastery.",
    "Consistency beats talent.",
    "Knowledge compounds daily.",
    "Patience is a weapon.",
    "Focus wins battles."
];

let q = 0;
let h = 0;
let t = 0;

setInterval(() => {
    document.getElementById("quote").textContent = `"${quotes[q]}"`;
    document.getElementById("dailyText").textContent =
        `Hint: ${hints[h]} | Thought: ${thoughts[t]}`;

    q = (q + 1) % quotes.length;
    h = (h + 1) % hints.length;
    t = (t + 1) % thoughts.length;
}, 2000);