window.onload = function(){

    var api = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre';
    
    fetch(api)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        var tracksrank = document.querySelector('.tracksrank');
      //  console.log(content);
        var contenido = " ";
        for (let i = 1; i < data.data.length; i++) {
            var element = data.data[i];
            contenido += '<article class= "thetracks">'
            contenido += '<div class = "thecontainer">'
            contenido += '<a href="../HTML/generos-detalle.html">'
            contenido += '<img class="photo" src="' + element.picture + '">'
            contenido += '</div>'
            contenido += '<h2>' +element.name+ '</h2>'
            contenido += '</a>'
            contenido += '</article>'
    
            console.log(element.picture)
        }    
        
        tracksrank.innerHTML = contenido;
    })
    
    










    
    .catch(function(error){
        console.log("El error fue " + error )
    })
    
    }