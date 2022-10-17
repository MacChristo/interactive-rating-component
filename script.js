document.querySelector(".container").style.display = "block"
document.getElementById("submit-btn").disabled = true;
let numberOfRate = document.querySelectorAll(".rate-numbers").length;

for (let i = 0; i < numberOfRate; i++) {
    document.querySelectorAll(".rate-numbers")[i].addEventListener("click", function(event) {
        document.querySelectorAll(".rate-numbers")[i].style.backgroundColor = "hsl(217, 12%, 63%)";
        document.querySelectorAll(".rate-numbers")[i].style.color = "hsl(0, 0%, 100%)";
        document.getElementById("submit-btn").disabled = false;
    })

    document.querySelector(".btn").addEventListener("click", function() {
        document.querySelectorAll("section")[0].classList.remove("start-rating");
        document.querySelectorAll("section")[0].classList.add("thank-you");
        document.querySelector(".container").style.display = "flex"
        document.getElementById("star").setAttribute("src", "images/illustration-thank-you.svg");
        document.querySelectorAll("img")[0].classList.remove("round-space");
        document.getElementById("star").id = "thank-you";
        document.getElementById("your-rate").style.display = "block";
        document.getElementById("your-rate").innerHTML = "You selected *Rating here*  out of 5";
        document.getElementById("my-h2").innerHTML = "Thank you!";
        document.getElementById("thank-you-para").innerHTML = "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!"
        document.getElementById("my-ratings").remove();
        document.getElementById("submit-btn").remove();
})
}


