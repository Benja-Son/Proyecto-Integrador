window.onload = function(){

    var api = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/';
 
    var queryString = location.search;
    var queryStringObj = new URLSearchParams(queryString);
    var id = queryStringObj.get('idArtist');

   // console.log( queryStringObj.get('idTrack'))
    console.log(id)


    fetch(api + id)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        var artistDetalle = document.querySelector('.artistDetalle');
        var contenido = " ";
            var element = data;
            contenido += '<div class="titulo-genero">'
            contenido += '<h1>' +element.name+ '</h1>'
            contenido += '<img class="photo-artist" src=" '+ element.picture_medium +'" alt="foto" >'
            contenido += '<h1>' + ' Fans: ' + element.nb_fan+ '</h1>'

            //falta boton agregar a playlist 




    
            console.log(element.name)
            console.log(element.picture_medium)


            artistDetalle.innerHTML = contenido;

        })    
        
    

}