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
        	'<div class="col-sm-4">' + 
            '<div class="thumbnail">'+
            '<p class="text-left">' + "DATE:" + parte.date + '</p>' +
        	'<img src="' + parte.img + '"class="img-responsive">' + 
            '<h1>' + parte.titulo + '</h1>' +
            '<div class="thumbnail">'+
            '<p>' + parte.descripcion + '</p>' +
            '</div>'+
            '</div>'+
            '</div>';
    }); 
    data+="</div>";
    $("#principal").append(data);
};

$(function(){
    $("#hola").click(function(){
        if ($("#hola").html("Activar scroll")) {
            $(window).scroll(function () {
                if ($(window).scrollTop() + $(window).height() + 10 >= $(document).height()) {
                    if (numero < 3) {
                        $.getJSON("https://rawgit.com/SrCarlangas1/pagina-dark-orbit/master/json/" + numero + ".json", function (jsonObject) {
                            cargarnoticias(jsonObject);
                            numero++;
                        });

                    } else {
                        $('#boton').text('No hay más');
                    }
                }
                
            })}
})})



