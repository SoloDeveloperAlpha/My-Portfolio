$(document).ready(function () {
    const cant = document.getElementById('cant');
    const tarjetas = document.getElementsByClassName("trj_larga").length;
    $('.filter .filter-item[filtrar="all"]').addClass('filtrar_item_active');
    $('.filter-item').click(function(){
        
        var fil=$(this).attr('filtrar');
        var conteo=0;
        var x =["html_css_Javascrip","html_css_Javascrip","html_css","html_css"];
        
        x.forEach(function(elemento) {
            if(elemento==fil){
                conteo++;
                cant.innerHTML="("+conteo+")";
            }
        });
        //Agregando active al enlace seleccionado
        $('.filter-item').removeClass('filtrar_item_active');
        $(this).addClass('filtrar_item_active');

        //ocultando proyectos
        $('.trj_larga').hide();

        //Mostrar proyectos     
        $('.trj_larga[filtrar="'+fil+'"]').show();
    });
    $('.filter-item[filtrar="all"]').click(function(){
        $('.trj_larga').show();
        cant.innerHTML="("+tarjetas+")";
    });

    
});




