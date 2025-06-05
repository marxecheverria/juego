const gameContainer = document.querySelector(".container"),
      userResult = document.querySelector(".user-result img"),
      cpuResult = document.querySelector(".cpu-result img"),
      result = document.querySelector(".result"),
      optionImages = document.querySelectorAll(".option-image");

optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");

    userResult.src = cpuResult.src = "images/Rock.webp";
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
        "images/Rock.webp",
        "images/Paper.webp",
        "images/Scissors.webp",
        "images/Lizard.webp",
        "images/Spock.webp"
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
    }, 2500);
  });
});