var numero=1;

$(function(){
    $("#boton").click(function(){
        if (numero < 3) {
        $.getJSON("https://rawgit.com/SrCarlangas1/pagina-dark-orbit/master/json/" + numero + ".json", function (jsonObject) {
            cargarnoticias(jsonObject);
            numero++;
        });         
    } else {
        $('#boton').text('No hay más');
    }
    });
});



function cargarnoticias(json) {
    var data = '<div class="row noticias">';
    $.each(json, function (i, parte) {
        data+=
        	'<div class="col-sm-4 fondo">' + 
            '<br>' +
            '<p>' + "DATE:" + parte.date + '</p>' +
        	'<img src="' + parte.img + '"class="img-circle img-responsive" id="imgnoticia1">' + 
            '<h1>' + parte.titulo + '</h1>' +
            '<p>' + parte.descripcion + '</p>' +
            '</div>';
    }); 
    data+="</div>";
    $("#contenedor").append(data);
};

$(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() + 10 >= $(document).height()) {
        if (numero < 3) {
            $("#contenedor").append('<div id="noticias" class="row">');
			$.getJSON("https://rawgit.com/SrCarlangas1/pagina-dark-orbit/master/json/" + numero + ".json", function (jsonObject) {
            cargarnoticias(jsonObject);
            numero++;
            });
            
        } else {
            $('#boton').text('No hay más');
        }
    }
});


