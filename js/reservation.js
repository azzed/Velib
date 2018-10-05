 // Inscrire la station de réservation dans le Web Storage
function enregistrerReservation() {

    sessionStorage.clear();
    stationReservation = document.getElementById("nomStation").textContent;
    sessionStorage.setItem("station de reservation", stationReservation);
    sessionStorage.setItem("heure de reservation", new Date());


};

