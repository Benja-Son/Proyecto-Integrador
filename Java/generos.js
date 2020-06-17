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
        var tracksrank = document.querySelector('.tracksrank');
        var contenido = " ";
        for (let i = 1; i < data.data.length; i++) {
            var element = data.data[i];
            contenido += '<article class= "thetracks">'
            contenido += '<div class = "thecontainer">'
            contenido += '<a href="../HTML/generos-detalle.html?idDetalle='+element.id+'">'
            contenido += '<img class="photo" src="' + element.picture_medium + '">'
            contenido += '</div>'
            contenido += '<h2>' +element.name+ '</h2>'
            contenido += '</a>'
            contenido += '</article>'
    
            console.log(element.picture_medium)
        }    
        
        
        tracksrank.innerHTML = contenido;
    })
    
    










    
    .catch(function(error){
        console.log("El error fue " + error )
    })
    
    }