$(document).ready(function () {
    // Obtiene todas las secciones de la página
    var secciones = $('.seccion');

    // Asigna un evento de desplazamiento al documento
    $(document).on('scroll', function () {
        // Obtiene la posición de desplazamiento actual
        var scrollPos = $(document).scrollTop();

        // Encuentra la sección más cercana al punto medio de la ventana
        var ventanaMitad = scrollPos + window.innerHeight / 2;
        var seccionCercana = null;
        var distanciaMinima = Number.MAX_SAFE_INTEGER;

        // Itera sobre todas las secciones y encuentra la más cercana al punto medio de la ventana
        secciones.each(function (index, seccion) {
            var distancia = Math.abs($(seccion).offset().top + $(seccion).height() / 2 - ventanaMitad);
            if (distancia < distanciaMinima) {
                distanciaMinima = distancia;
                seccionCercana = seccion;
            }
        });

        // Si se encuentra una sección cercana, desplaza suavemente hacia ella
        if (seccionCercana !== null) {
            $('html, body').animate({
                scrollTop: $(seccionCercana).offset().top
            }, 800);
        }
    });
});
