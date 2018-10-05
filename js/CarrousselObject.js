class CarrousselObject {
    //fonction pour faire avancer les images du caroussel de la droite vers la gauche
    avant(firstClass, firstImage, Class) {
        var active = $(firstClass);

        var suivante = (active.next().length > 0) ? active.next() : $(firstImage);
        active.fadeOut(2, function () {
            active.removeClass(Class);
            suivante.fadeIn().addClass(Class);
        });

    }

    //fonction pour faire avancer les images du caroussel de la gauche vers la droite
    apres(firstClass, firstImage, Class) {
        var active = $(firstClass);

        var precedente = (active.prev().length > 0) ? active.prev() : $(firstImage);
        active.fadeOut(2, function () {
            active.removeClass(Class);
            precedente.fadeIn().addClass(Class);
        });

    }


}