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
  
            console.log(element.name)
            console.log(element.picture_medium)


            artistDetalle.innerHTML = contenido;

        })    
        fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" + id + "/top" ) // 
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            var artistCanciones = document.querySelector('.artistCanciones');
            var contentArtistas = " ";
            for (let i = 0; i < data.data.length; i++){
                var element = data.data[i];
                contentArtistas += '<h2>' + element.title + '</h2>'
            }
            
            console.log(element)
                artistCanciones.innerHTML = contentArtistas;
    
        
        })
        
    

}