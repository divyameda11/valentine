// Reasons Logic
const reasons = [
    "You support my dreams 💫",
    "You make me smile 😊",
    "You understand me 🫶",
    "You are my safe place ❤️",
    "You never give up on us 💕"
];

function showReason() {
    const random = Math.floor(Math.random() * reasons.length);
    document.getElementById("reason").innerText = reasons[random];
}

// Quiz Logic
function checkAnswer() {
    const ans = document.getElementById("answer").value.toLowerCase();
    const result = document.getElementById("quizResult");

    if (ans.includes("divya")) {
        result.innerText = "Correct 😍 I love you more!";
    } else {
        result.innerText = "Wrong 😜 But I still love you ❤️";
    }
}

// Countdown Logic
const valentineDate = new Date("Feb 14, 2026 00:00:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const diff = valentineDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);

    document.getElementById("countdown").innerText =
        `${days} Days ${hours} Hours ${mins} Minutes left 💘`;
}, 1000);