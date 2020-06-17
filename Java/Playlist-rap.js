window.onload = function(){

    var api = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart';
    
    fetch(api)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        var PlaylistUnicoo = document.querySelector('.PlaylistUnicoo');
        var Playlist = " ";
          var element =  data.playlists.data[0]
          PlaylistUnicoo += '<img class="playlistPhotoUnico" href=" '+ element.picture_medium +' ">'
          PlaylistUnicoo += '<h1>'+ element.title +'</h1>'
          
    
            console.log(element.title) 
            console.log(element.picture_medium) 
        
        PlaylistUnicoo.innerHTML = Playlist;
    })
    
    
//    .catch(function(error){
//        console.log("El error fue " + error )
//    })
}