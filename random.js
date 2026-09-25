const jokes = [
    "Why did the chicken cross the road?",
    "I used to be addicted to the hokey pokey...",
    "I only know 25 letters of the alphabet..."
];

const joke = jokes[Math.floor(Math.random() * jokes.length)];

document.body.innerText = joke;