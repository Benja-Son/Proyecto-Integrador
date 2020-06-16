window.onload = function(){

    var api = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart';
    
    fetch(api)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        var PlaylistAncho = document.querySelector('.PlaylistAncho');
        var Playlist = " ";
            var element =  data.playlists.data[0]
            Playlist += '<img class="playlistPhoto" href=" '+ element.picture_medium +' ">'
          
    
            console.log(element.picture_medium)  
        
        PlaylistAncho.innerHTML = Playlist;
    })
    
    
//    .catch(function(error){
//        console.log("El error fue " + error )
//    })
}