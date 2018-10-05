
// Variables
var painting = false;
var started = false;
var canvas = $("#mon_canvas");
var cursorX, cursorY;
var restorCanvasArray = [];
var restorCanvasIndex = 0;
var color = "#000";
var width_brush = 2;

var ctx = canvas[0].getContext('2d');



// Je clique sur la souris je dessine
canvas.mousedown(function (e) {
    painting = true;

    // les coordonnees de la souris
    cursorX = this.offsetLeft;
    cursorY = this.offsetTop;
});

// Relachement du Click sur tout le document, j'arrête de dessiner :
$(this).mouseup(function () {
    painting = false;
    started = false;
});


// Mouvement de la souris sur le canvas :
canvas.mousemove(function (e) {
    // Si je suis en train de dessiner (click souris enfoncé) :
    if (painting) {
        // Set Coordonnées de la souris :
        cursorX = (e.pageX - this.offsetLeft) - 10; // 10 = décalage du curseur
        cursorY = (e.pageY - this.offsetTop) - 10;

        // Dessine une ligne :
        drawLine();
    }
});


function drawLine() {
    // Si c'est le début, j'initialise
    if (!started) {
        // Je place mon curseur pour la première fois :
        ctx.beginPath();
        ctx.moveTo(cursorX, cursorY);
        started = true;
    }
    // Sinon je dessine
    else {
        ctx.lineTo(cursorX, cursorY);
        ctx.strokeStyle = color;
        ctx.lineWidth = width_brush;
        ctx.stroke();
    }
}
    function effacerCanvas() {
    ctx.clearRect(0, 0, canvas.width() + 10, canvas.height());
    ctx.font = "normal 12pt Calibri,Geneva,Arial";
    ctx.fillStyle = "#000";
    ctx.fillText("Signatures", 8, 90);
}



