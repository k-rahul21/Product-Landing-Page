var input = document.querySelector("#mail");
var btn = document.querySelector("#submit");

function clickHandler()
{
    if(input === "") {
    alert("Submitted.");
    } else {
        alert("You forgot to enter your email id.");
    }
}

btn.addEventListener('click', clickHandler);
