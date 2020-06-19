
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
            var playlistCanciones = document.querySelector('.playlistCanciones');
            
            playlistCanciones.innerHTML += '<ol class="LineaPlay">'
            playlistCanciones.innerHTML += '<a href="../HTML/tracks-detalles.html?idTrack=' + track.id + '">'
            playlistCanciones.innerHTML += '<h3>' + track.title + '</h3>'
            playlistCanciones.innerHTML += '</a>'
            playlistCanciones.innerHTML += '<a href="../HTML/artists-detalle.html?idArtist=' + track.artist.id + '  ">'
            playlistCanciones.innerHTML += '<h3>' + track.artist.name + '</h3>'
            playlistCanciones.innerHTML += '</a>'   
            playlistCanciones.innerHTML += '<h3>' + track.duration / 60 + '</h3>'
            playlistCanciones.innerHTML += '</ol>'




            console.log(track)
        })
}

//contenidoPlaylist += '<a href="../HTML/tracks-detalles.html?idTrack=' + track.id + '">'
//contenidoPlaylist += '<h3>' + track.title + '</h3>'
//contenidoPlaylist += '</a>'
//contenidoPlaylist += '<a href="../HTML/artists-detalle.html?idArtist=' + track.artist.id + '  ">'
//contenidoPlaylist += '<h3>' + track.artist.name + '</h3>'
//contenidoPlaylist += '</a>'
//contenidoPlaylist += '<h3>' + track.duration+ '</h3>'