window.onload = function(){

    var api = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre';
    
    var queryString = location.search;
    var queryStringObj = new URLSearchParams(queryString);
    queryStringObj.get('idDetalle');


    fetch(api)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        var tracksrankGenero = document.querySelector('.tracksrankGenero');
        var contenido = " ";
        for (let i = 1; i < data.data.length; i++) {
            var element = data.data[i];
            contenido += '<article class= "thetracks">'
            contenido += '<div class = "overlay">'
            contenido += '<a href="../HTML/generos-detalle.html?idDetalle='+element.id+'">'
            contenido += '<img class="imageGenero" src="' + element.picture_medium + '">'
            contenido += '</div>'
            contenido += '<h2 class="gTitle">' +element.name+ '</h2>'
            contenido += '</a>'
            contenido += '</article>'
            
    
            console.log(element.picture_medium)
        }    
        
        
        tracksrankGenero.innerHTML = contenido;
    })
      
    .catch(function(error){
        console.log("El error fue " + error )
    })
    
}