
let recuperoStorage = localStorage.getItem('playlist');
let playlist = JSON.parse(recuperoStorage);
let playlistCanciones = document.querySelector('.playlistCanciones');
console.log(playlist);

if (recuperoStorage == null || recuperoStorage == "[]") {
    playlist = [];
    playlistCanciones.innerHTML += '<h2 class="noHay"> ¡No hay canciones! </h2>'
    console.log(playlistCanciones);
} else {
    playlist.forEach(function (idTrack) {
        buscarYMostrarTrack(idTrack);
    });
}

function buscarYMostrarTrack(idTrack) {
    let url = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/' + idTrack;
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (track) {
            playlist.forEach(function(x) {
                let cantidad = 0;
                cantidad++;
            });
            
            let playlistCanciones = document.querySelector('.playlistCanciones');
            playlistCanciones.innerHTML += '<a class="despintar" href="tracks.html?id='+ track.id +'"><article class= "cancion"><a class="" href="tracks.html?id=' + track.id + `">` + track.title + '</a></article class= "cancion"></a>'
            console.log(track)
        })
}

