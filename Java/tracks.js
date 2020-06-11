window.onload = function(){

    var api = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/3135556';
    
    fetch( api )
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        var tracksrank = document.querySelector('.tracksrank');
      //  console.log(content);
        var contenido = " ";
        for (let i = 0; i < data.tracks.data.length; i++) {
            var element = data.tracks.data[i];
            contenido += '<article class= "thetracks">'
            contenido += '<div class = "thecontainer"'
            contenido += '<img class="photo" src="' + element.artist.picture + '"'
            contenido += '</div>'
            contenido += element.name
            contenido += //  artista
            contenido += '<a class="more" href="Detalle.html"> Learn More </a>'
        }    
        
        //tracksrank.innerHTML = contenido;
    })

} 