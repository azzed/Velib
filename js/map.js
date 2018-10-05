function initMap() {

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: {
            lat: 48.866667,
            lng: 2.333333
        }
    });

    $.get("https://opendata.paris.fr/api/records/1.0/search/?dataset=stations-velib-disponibilites-en-temps-reel&rows=8000&facet=banking&facet=bonus&facet=status&facet=contract_name", function (data) {
        datas = data.records;
        var marqueur = datas.forEach(function (item, index) {
            var longitude = item.geometry.coordinates[0];
            var lattitude = item.geometry.coordinates[1];
            var localisation = {
                lat: lattitude,
                lng: longitude
            };
            var markers = new google.maps.Marker({
                position: localisation,
                map: map,
                id: item.fields.number,
                title: item.fields.name,
                address: item.fields.address,
                status: item.fields.status,
                available_bikes: item.fields.available_bikes,
                available_bike_stands: item.fields.available_bike_stands,
                bike_stands: item.fields.bike_stands
            });
            //afficher les reservations
            markers.addListener('click', function () {
                $("#nomStation").html(this.title.substring(8));
                if (this.status !== "OPEN") {
                    $("#statusStation").html("Station hors service !");
                    $("form p:gt(1)").html("");
                    $("#reservation").hide();
                } else {
                    $("#statusStation").html("Station en service.");
                    $("#adresseStation").html("Adresse : " + this.address.toUpperCase());
                    $("#emplacementTotal").html("Places totales : " + this.bike_stands);
                    $("#emplacementLibre").html("Places disponibles : " + this.available_bike_stands);
                    $("#veloDisponible").html("Vélos disponibles : " + this.available_bikes);

                    $("#reservation").show();
                    $("#reservation").on("click", function (event) {
                        $("#interface").show();
                        $("#reservation").hide();
                        $("html,body").animate({
                            scrollTop: $("#interface").offset().top
                        }, "slow");
                    });

                    if (this.available_bikes === 0) {
                        $("#reservation").hide();
                    }
                }

            });
           


        });






    });
}