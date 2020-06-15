window.onload = function(){

    var api = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/';
 
    var URLSP = new URLSearchParams(window.location.search)    
    var id = URLSP.get('id'); 

    fetch(api + id)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        var tracksrank = document.querySelector('.seccion-generos');
        var contenido = " ";
        for (let i = 1; i < data.length; i++) {
            var element = data.data[i];
            contenido += '<div class="titulo-genero">'
            contenido += '<h1>' +element.name+ '</h1>'
            // contenido +=  aca van los 10 artistas
    
            console.log(element.name)
        }    
        
        tracksrank.innerHTML = contenido;
    })

}

