window.onload = function(){

    var api = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart';
    
    fetch(api)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        var PlaylistAnchoUnicoo = document.querySelector('.PlaylistAnchoUnicoo');
        var Playlist = " ";
            var element =  data.playlists.data[0]
            Playlist += '<img class="playlistPhotoUnico" href=" '+ element.picture_medium +' ">'
          
    
            console.log(element.picture_medium)  
        
        PlaylistAnchoUnicoo.innerHTML = Playlist;
    })
    
    
//    .catch(function(error){
//        console.log("El error fue " + error )
//    })
}