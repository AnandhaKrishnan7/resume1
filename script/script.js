// JavaScript to handle the modal display for team information
document.getElementById("teamInfoBtn").onclick = function () {
    document.getElementById("teamInfoModal").style.display = "block";
}

document.getElementsByClassName("close")[0].onclick = function () {
    document.getElementById("teamInfoModal").style.display = "none";
}

window.onclick = function (event) {
    if (event.target == document.getElementById("teamInfoModal")) {
        document.getElementById("teamInfoModal").style.display = "none";
    }
}
