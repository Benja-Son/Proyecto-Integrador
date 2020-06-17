window.onload = function(){

    var api = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/3135556';
 
    var queryString = location.search;
    var queryStringObj = new URLSearchParams(queryString);
    var id = queryStringObj.get('idTrack');

    console.log( queryStringObj.get('idTrack'))
    console.log(id)


    fetch(api)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        var tracksDetalles = document.querySelector('.tracksDetalles');
        var contenido = " ";
            var element = data;
            contenido += '<div class="titulo-genero">'
            contenido += '<h1>' +element.name+ '</h1>'
            contenido += '<img class="photo-genero" href=" '+ element.picture +' " >'

    
            console.log(element.name)
            console.log(element.picture)


            tracksDetalles.innerHTML = contenido;

        })    
        
    

}
