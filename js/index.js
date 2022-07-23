const colors = ["pink", "#0FA3B1", "rgb(164, 126, 59)", "rgb(127, 82, 131)"]

const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener("click", function () {
    const randomNumber = getRandomNumber();
    console.log(randomNumber)
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]
})

// get random number between 0 and 3 

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}