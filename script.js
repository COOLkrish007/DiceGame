const diceImages = [
    "images/dieccccs1.png", // Image for 1
    "images/dieccccs2.png", // Image for 2
    "images/dieccccs3.png", // Image for 3
    "images/dieccccs4.png", // Image for 4
    "images/dieccccs5.png", // Image for 5
    "images/dieccccs6.png"  // Image for 6
];

document.querySelectorAll(".rollButton").forEach(button => {
    button.addEventListener("click", function() {
        const diceNumber = this.getAttribute("data-dice");
        const diceImage = document.getElementById(`diceImage${diceNumber}`);

        // Start the rolling animation
        let count = 0;

        // Change the dice face several times to simulate rolling
        const rollDice = setInterval(() => {
            const randomDiceFace = Math.floor(Math.random() * 6);
            diceImage.src = diceImages[randomDiceFace]; // Set the image based on the random number
            count++;
            
            // Stop rolling after 2 seconds (4 rolls)
            if (count === 4) {
                clearInterval(rollDice);
                // Final roll
                const finalDiceFace = Math.floor(Math.random() * 6); 
                diceImage.src = diceImages[finalDiceFace]; // Display final result
            }
        }, 500); // Change the face every 500 milliseconds
    });
});
