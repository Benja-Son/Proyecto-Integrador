window.onload = function(){

    var api = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart';
    
    fetch(api)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        var tracksrank = document.querySelector('.tracksrank');
      //  console.log(content);
        var contenido = " ";
            var element =  data.playlists.data[0]
            contenido += '<article class= "thetracks">'
            contenido += '<div class = "thecontainer">'
            contenido += '<img class="photo" src="' + element.picture + '">'
            contenido += '</div>'
            contenido += '<h2>' +element.user.name+ '</h2>'
            contenido += '</article>'
    
            console.log(element)  
        
        tracksrank.innerHTML = contenido;
    })
    
    
//    .catch(function(error){
//        console.log("El error fue " + error )
//    })
}