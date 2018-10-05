
//Appel de l'objet CarrousselObject

$(function () {
   
    var carrousselObj = new CarrousselObject();
    $(document).keyup(function (touche) {
        if (touche.keyCode === 37) {
            carrousselObj.apres("#carousel .premiere"," #carousel img:last","premiere");
        }
        if (touche.keyCode === 39) {
           carrousselObj.avant("#carousel .premiere","#carousel img:first","premiere");
        }
        
    });
    setInterval(function(){carrousselObj.avant("#carousel .premiere","#carousel img:first","premiere")}
                ,10000);
    
    
});

// Chrono instancié pour cette session
var chrono;

$(document).ready(function (e) {
    
    if (sessionStorage.getItem("station de reservation")) {

        var heureReservation = new Date(sessionStorage.getItem("heure de reservation"));
        var heureActuel = new Date();

        var duree = Math.trunc(1200 - (heureActuel - heureReservation)/1000);

        chrono = new Chrono();
        chrono.reset(duree);
        chrono.start();

    } else {

        chrono = new Chrono(
            function (temps) {
                if (temps == 0) {
                    chrono.stop();
                }
            }
        );
        
        
    }
     
});




// evenement boutons du canvas
$("#effacer").click(function () {
    effacerCanvas();
});
$("#annuler").click(function () {
    $("#interface").hide();
    $("#reservation").show();

});
$("#valider").click(function () {
    effacerCanvas();
    enregistrerReservation();
    $("#interface").hide();
    
    chrono.reset(1200);
    chrono.start();
    
  

});

$("#map").click(function () {
    
    $("#interface").hide();
    effacerCanvas();
});












