// Classe Chrono

function Chrono(callback) {

    var temps = 0;
    var status = 0;
    var chronoID;

    // Déclencher chrono avec un intervalle de 1 seconde 
    this.start = function () {
        if (status == 0) {
            status = 1;
            chronoID = setInterval(function () {
                if (temps) {
                    temps--;
                    formaterTemps();
                    if (typeof (callback) === "function") callback(temps);
                }
            }, 1000);
        }
    }

    //  Arrêter chrono
    this.stop = function () {
        if (status == 1) {
            status = 0;
            clearInterval(chronoID);
        }
    }

    // Réinitialiser chrono
    this.reset = function (tempsExpiration) {
        temps = tempsExpiration;
        formaterTemps();
    }

    // Renvoyer le temps dans le format minute : seconde
    function formaterTemps() {
        var seconde = temps % 60;
        var minute = Math.trunc(temps / 60);
        afficherFooter(minute, seconde);
    }
    //L'etat de la reservation dans le footer
    function afficherFooter(minute, seconde) {
        var stationReservation = sessionStorage.getItem("station de reservation");
        if (minute === 0 && seconde === 0) {
            $("#foot").html("Votre dernière réservation, station " + stationReservation + ", est expirée !");
            sessionStorage.clear();

        } else if (typeof (stationReservation) !== null) {
            $("#foot").html("1 vélo réservé à la station " + stationReservation + ", pour " + minute + " min " + seconde + " s.");
        } else {
            $("#foot").html("Vous n'avez pas encore réservé.");
        }

    }
}