let scoreh = 0;
let scorea = 0;

function clickh(points) {
    scoreh += points;
    document.getElementById("total_score1").textContent = scoreh;
}

function clicka(points) {
    scorea += points;
    document.getElementById("total_score2").textContent = scorea;
}




