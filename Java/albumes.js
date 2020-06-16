//window.onload = function(){

//  var api = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart';

//  fetch(api)
//  .then(function (response) {
//      return response.json();
//  })
//  .then(function (data) {
//      console.log(data);
//      var Atracks = document.querySelector('.Atracks');
//      console.log(content);
//      var contenido = " ";
//      for (let i = 0; i < data.tracks.data.length; i++) {
//          var element = data.tracks.data[i];
//          contenido += '<li> '
//          contenido += '<div class="uk-card uk-card-default">'
//          contenido += '<div class="uk-card-media-top">'
//          contenido += '<img src=" '+ element.artist.picture_medium +' "  alt="">'
//          contenido += '</div>'
//          contenido += '<div class="uk-card-body">'
//          contenido += '<a href="../HTML/cancion-detalle.html>'
//          contenido += '<h3 class="uk-card-title">' + element.title + '</h3>'
//          contenido += '</a>'
//          contenido += '<a href="../HTML/artists-detalle.html">'
//          contenido += '<p>' + 'By: ' + element.artist.name + '</p>'
//          contenido += '</a>'
//          contenido += '</div>'
//          contenido += '</div>'
//          contenido += '</li>'
        

//      }    
    
//      Atracks.innerHTML = contenido;
//  })


//  .catch(function(error){
//      console.log("El error fue " + error )
//  })

//  }




