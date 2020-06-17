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
            contenido += '<img class="photo-genero" href=" '+ element.picture_medium +' " >'
            // contenido +=  aca van los 10 artistas
    
            console.log(element.name)
            console.log(element.picture_medium)


            seccionGeneros.innerHTML = contenido;

        })    
        
    

}

