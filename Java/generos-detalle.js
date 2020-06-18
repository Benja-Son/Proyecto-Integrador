window.onload = function(){

    var api = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/';
 
    var queryString = location.search;
    var queryStringObj = new URLSearchParams(queryString);
    var id = queryStringObj.get('idDetalle');

    console.log( queryStringObj.get('idDetalle'))


    fetch(api + id)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        var seccionGeneros = document.querySelector('.seccionGeneros');
        var contenido = " ";
            var element = data;
            contenido += '<div class="titulo-genero">'
            contenido += '<h1>' +element.name+ '</h1>'
            contenido += '<img class="photo-genero" src=" '+ element.picture_medium +' " >'
            console.log(element.name)
            console.log(element.picture_medium)
            seccionGeneros.innerHTML = contenido;

        })  

        
            fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/" + id + "/artists")
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                var topArtist = document.querySelector('.topArtist');
                var contentArtistas = " ";
                for (let i = 0; i < 9; i++){
                    var element = data.data[i];
            //        contentArtistas += '<h1>' +" The top artists are: "+ '</h1>'
                    contentArtistas += '<h2>' + element.name + '</h2>'
                    console.log(element) 
                }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
                    topArtist.innerHTML = contentArtistas;
        
            
            })
}


//       for (let i = 0; i < data.tracks.data.length; i++) {
//    var element = data.tracks.data[i];

//      for (let i = 0; i < data.albums.data.length; i++) {



