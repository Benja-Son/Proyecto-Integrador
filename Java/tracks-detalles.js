window.onload = function () {

    

    var queryString = location.search;
    var queryStringObj = new URLSearchParams(queryString);
    var id = queryStringObj.get('idTrack');

    var api = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/';


     console.log( queryStringObj.get('idTrack'))
    console.log(id)


    fetch(api + id)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            var tracksDetalles = document.querySelector('.tracksDetalles');
            var contenido = " ";
            var element = data;
            contenido += '<div class="titulo-genero">'
            contenido += '<h1>' + ' Track: ' + element.title + '</h1>'
            contenido += '<a href="../HTML/artists-detalle.html?idArtist=' + element.artist.id + '  ">'
            contenido += '<h1>' + ' Artist: ' + element.artist.name + '</h1>'
            contenido += '</a>'
            contenido += '<img class="photo-genero" src=" ' + element.album.cover_medium + '" alt="foto" >'
            var seconds = element.duration / 60
            contenido += '<p>' + 'duration: ' + seconds + ' minutos' + '</p>'
            contenido += '<a href="../HTML/album-detalle.html?idAlbum=' + element.album.id + '">'
            contenido += '<h1>' + 'Album: ' + element.album.title + '</h1>'
            contenido += '</a>'






            console.log(element.title)
            console.log(element.album.cover_medium)


            tracksDetalles.innerHTML = contenido;

            let player = document.querySelector('iframe');
            player.src = 'https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=&size=medium&type=tracks&id=' + id + '&app_id=1'

            
            var button = document.querySelector('.buttonP')
            
            
        let playlist = []
            console.log(playlist)
            let recuperoStorage = localStorage.getItem('playlist');
            if (recuperoStorage == null) {
                playlist = [];
            } else {
                playlist = JSON.parse(recuperoStorage);
            }

            if (playlist.includes(id)) {
                document.querySelector('.buttonP').innerHTML = 'Remove from Playlist '
            }
            
            let agregar = document.querySelector('.buttonP');
            agregar.addEventListener('click', function () {
                if (playlist.includes(id)) {
                    let indiceEnElArray = playlist.indexOf(id);
                    playlist.splice(indiceEnElArray, 1);
                    document.querySelector('.buttonP').innerHTML = 'Add to Playlist';
                    console.log(playlist);
                } else {
                    playlist.push(id);
                    document.querySelector('.buttonP').innerHTML = 'Remove from Playlist ';

                }
                let playlistParaStorage = JSON.stringify(playlist);
                localStorage.setItem('playlist', playlistParaStorage);
                console.log(localStorage);


                var agarrarStorage = localStorage.getItem('playlist')
                // button.addEventListener('click', function (){

                //     window.localStorage.setItem('Id' + data.id, JSON.stringify(data));
                //     if (window.localStorage.getItem('IdList') === null) {
                //         var idplaylist = [data.id];
                //         window.localStorage.setItem('Idlist', JSON.stringify(idplaylist))
                //     } 
                //     else {
                //         var agID =  JSON.parse(window.localStorage.getItem('Idlist'))
                //         agID.push(data.id)
                //         window.localStorage.setItem('Idlist', JSON.stringify(agID))
                //     }
                // })
            })
    
            })

            
}