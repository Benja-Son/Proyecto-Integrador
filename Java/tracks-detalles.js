window.onload = function(){

    var api = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/';
 
    var queryString = location.search;
    var queryStringObj = new URLSearchParams(queryString);
    var id = queryStringObj.get('idTrack');

   // console.log( queryStringObj.get('idTrack'))
    console.log(id)


    fetch(api + id)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        var tracksDetalles = document.querySelector('.tracksDetalles');
        var contenido = " ";
            var element = data;
            contenido += '<div class="titulo-genero">'
            contenido += '<h1>' +element.title+ '</h1>'
            contenido += '<h1>' +element.artist.name+ '</h1>'
            contenido += '<img class="photo-genero" href=" '+ element.album.cover_medium +'" alt="foto" >'
            var seconds = element.duration / 60
            contenido += '<p>' + 'Duración: ' +seconds+ ' minutos' + '</p>'
            contenido += '<h1>' +element.album.title+ '</h1>'

            //falta boton agregar a playlist 




    
            console.log(element.title)
            console.log(element.album.cover_medium)


            tracksDetalles.innerHTML = contenido;

        })    
        
    

}
