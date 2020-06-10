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
  // var contenido = " ";
    for (let i = 0; i < data.tracks.data.length; i++) {
        var element = data.tracks.data[i];
        tracksrank.innerHTML += '<article class= "thetracks">'
        tracksrank.innerHTML += '<div class = "thecontainer"'
        tracksrank.innerHTML += '<img class="photo" src="..imagenes/thebox.jpg" '
        tracksrank.innerHTML += '</div>'
        tracksrank.innerHTML += data.artist title
        tracksrank.innerHTML += //  artista
        tracksrank.innerHTML += '<a class="more" href="Detalle.html"> Learn More </a>'
    }            
})
}

//.catch(function(error){
//    console.log('El error fue ' + error)
//})
// porque me da error en el catch?
// porque la linea 20 me da error como si title no esta identificado
// porque no me aparece mas los arrays en el console? 



