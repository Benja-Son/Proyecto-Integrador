window.onload = function () {

    var api = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/';

    var queryString = location.search;
    var queryStringObj = new URLSearchParams(queryString);
    var id = queryStringObj.get('idAlbum');

    console.log(id)
    console.log(api)

    fetch(api + id)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            var albumDetalles = document.querySelector('.albumDetalles');
            var contenido = " ";
            var element = data;
            contenido += '<h1>' + 'Album name: ' + element.title + '</h1>'
            contenido += '<a href="../HTML/artists-detalle.html?idArtist=' + element.artist.id + '  ">'
            contenido += '<h1>' + 'Artist: ' + element.artist.name + '</h1>'
            contenido += '</a>'
            contenido += '<img class="photo-album" src=" ' + element.cover_medium + '" alt="foto" >'
            contenido += '<p>' + 'Fecha de salida: ' + element.release_date + '</p>'

            //falta boton agregar a playlist 

            console.log(element.title)


            albumDetalles.innerHTML = contenido;

        })



}