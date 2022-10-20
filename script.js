document.querySelector(".container").style.display = "block"

let form = document.getElementById("RatingForm");

form.addEventListener("submit", function (event) {
    let rating = document.querySelector('input[name="rating"]:checked').value;
    document.querySelectorAll("section")[0].classList.remove("start-rating");
    document.querySelectorAll("section")[0].classList.add("thank-you");
    document.querySelector(".container").style.display = "flex"
    document.getElementById("star").setAttribute("src", "images/illustration-thank-you.svg");
    document.querySelectorAll("img")[0].classList.remove("round-space");
    document.getElementById("star").id = "thank-you";
    document.getElementById("your-rate").style.display = "block";
    document.getElementById("your-rate").innerHTML = `You selected ${rating} out of 5`;
    document.getElementById("my-h2").innerHTML = "Thank you!";
    document.getElementById("thank-you-para").innerHTML = "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!"
    document.getElementById("RatingForm").remove();
})
