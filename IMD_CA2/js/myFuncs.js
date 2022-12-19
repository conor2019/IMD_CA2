var modal = document.getElementById("myModal");

var btn = document.getElementById("contactBtn");

var darkBtn = document.getElementById("dark_mode");

btn.onclick = function() {
    modal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function darkFunc() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}