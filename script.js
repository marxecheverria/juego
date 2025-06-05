document.addEventListener("DOMContentLoaded", () => {
    const gameContainer = document.querySelector(".container"),
        userResult = document.querySelector(".user-result img"),
        cpuResult = document.querySelector(".cpu-result img"),
        result = document.querySelector(".result"),
        optionImages = document.querySelectorAll(".option-image"),
        backToMenuButton = document.getElementById("back-to-menu");

    const rules = [
        "Scissors cuts Paper",
        "Paper covers Rock",
        "Rock crushes Lizard",
        "Lizard poisons Spock",
        "Spock smashes Scissors",
        "Scissors decapitates Lizard",
        "Lizard eats Paper",
        "Paper disproves Spock",
        "Spock vaporizes Rock",
        "Rock crushes Scissors"
    ];

    function displayRandomRule() {
        const ruleBox = document.getElementById('rules-box');
        if (ruleBox) {
            const randomIndex = Math.floor(Math.random() * rules.length);
            ruleBox.textContent = rules[randomIndex];
        }
    }

    // Display a new rule every 5 seconds
    setInterval(displayRandomRule, 5000);

    // Initial display
    displayRandomRule();

    optionImages.forEach((image, index) => {
        image.addEventListener("click", (e) => {
            image.classList.add("active");

            userResult.src = cpuResult.src = "images/Rock.png";
            result.textContent = "Wait...";

            optionImages.forEach((image2, index2) => {
                index !== index2 && image2.classList.remove("active");
            });

            gameContainer.classList.add("start");

            let time = setTimeout(() => {
                gameContainer.classList.remove("start");

                let imageSrc = e.target.querySelector("img").src;
                userResult.src = imageSrc;

                let randomNumber = Math.floor(Math.random() * 5);

                let cpuImages = [
                    "images/Rock.png",
                    "images/Paper.png",
                    "images/Scissors.png",
                    "images/Lezard.png",
                    "images/Spock.png"
                ];

                cpuResult.src = cpuImages[randomNumber];

                let cpuValue = ["R", "P", "T", "L", "S"][randomNumber];
                let userValue = ["R", "P", "T", "L", "S"][index];

                let outcomes = {
                    RR: "DRAW",
                    RP: "CPU",
                    RT: "YOU",
                    RL: "YOU",
                    RS: "CPU",
                    PR: "YOU",
                    PP: "DRAW",
                    PT: "CPU",
                    PL: "YOU",
                    PS: "YOU",
                    TR: "CPU",
                    TP: "YOU",
                    TT: "DRAW",
                    TL: "YOU",
                    TS: "CPU",
                    LR: "CPU",
                    LP: "CPU",
                    LT: "CPU",
                    LL: "DRAW",
                    LS: "YOU",
                    SR: "YOU",
                    SP: "CPU",
                    ST: "YOU",
                    SL: "CPU",
                    SS: "DRAW"
                };

                let outcomeValue = outcomes[userValue + cpuValue];

                result.textContent =
                    userValue === cpuValue ? "DRAW" : `${outcomeValue} WIN!!`;

                // Show "Back to Menu" button only if user loses
                
            }, 2500);
        });
    });
});



