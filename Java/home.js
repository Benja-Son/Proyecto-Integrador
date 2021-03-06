window.onload = function () {


    var titulo = document.querySelector("#titulo");

    var saludo = document.querySelector('#saludo');

    var span = document.querySelector('#spanWelcome');



    if (sessionStorage.getItem('usuario') === null) {
        var nombre = prompt('Como te llamas? ')
        console.log(nombre)

        if (nombre == null || nombre == '') {
            saludo.innerHTML = "Welcome Back";
        } else {
            saludo.innerHTML = "Welcome Back " + nombre + "!";
            sessionStorage.setItem('usuario', nombre);
        }
        titulo.style.display = 'none';
        span.style.display = 'block';


    } else {
        var nombre = sessionStorage.getItem('usuario')
        saludo.innerHTML = "Welcome Back " + nombre + "!";
        titulo.style.display = 'none';
        span.style.display = 'block';
    }





    var tracksT = document.querySelector('.tracksTitle')

    tracksT.innerHTML = 'Hottest Tracks';

    tracksT.style.color = 'black';

    var albumsT = document.querySelector('.albumsTitle')

    albumsT.innerHTML = 'Top Albums';

    albumsT.style.color = 'Grey';

    var artistsT = document.querySelector('.artistsTitle')

    artistsT.innerHTML = ' Trending Artists '

    artistsT.style.color = ' Grey '








    var api = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart';

    fetch(api)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            var Ctracks = document.querySelector('.Ctracks');

            var contenido = " ";
            
            for (let i = 0; i < data.tracks.data.length; i++) {
                var element = data.tracks.data[i];
                contenido += '<li>'
                contenido += '<div class="uk-card uk-card-default">'
                contenido += '<div class="uk-card-media-top">'
                contenido += '<img src=" ' + element.artist.picture_medium + ' "  alt="">'
                contenido += '</div>'
                contenido += '<div class="uk-card-body">'
                contenido += '<a href="../HTML/tracks-detalles.html?idTrack=' + element.id + '">'
                contenido += '<h3 class="uk-card-title">' + element.title + '</h3>'
                contenido += '</a>'
                contenido += '<a href="../HTML/artists-detalle.html?idArtist=' + element.artist.id + '  ">'
                contenido += '<p class="poneNegro" >' + " By: " + element.artist.name + '</p>'
                contenido += '</a>'
                contenido += '</div>'
                contenido += '</div>'
                contenido += '</li>'


                console.log(element.id)

                Ctracks.innerHTML = contenido;

                var Atracks = document.querySelector(' .Atracks');
                var contenidoAlbum = "";
                for (let i = 0; i < data.albums.data.length; i++) {
                    var element = data.albums.data[i];
                    contenidoAlbum += '<li>'
                    contenidoAlbum += '<div class="uk-card uk-card-default">'
                    contenidoAlbum += '<div class="uk-card-media-top">'
                    contenidoAlbum += '<img src=" ' + element.cover_medium + ' "  alt="">'
                    contenidoAlbum += '</div>'
                    contenidoAlbum += '<div class="uk-card-body">'
                    contenidoAlbum += '<a href="../HTML/album-detalle.html?idAlbum=' + element.id + '">'
                    contenidoAlbum += '<h3 class="uk-card-title">' + element.title + '</h3>'
                    contenidoAlbum += '</a>'
                    contenidoAlbum += '<a href="../HTML/artists-detalle.html?idArtist=' + element.artist.id + '  ">'
                    contenidoAlbum += '<p class="poneNegro">' + 'By: ' + element.artist.name + '</p>'
                    contenidoAlbum += '</a>'
                    contenidoAlbum += '</div>'
                    contenidoAlbum += '</div>'
                    contenidoAlbum += '</li>'
                    Atracks.innerHTML = contenidoAlbum;

                    var arTracks = document.querySelector('.arTracks')
                    var contenidoArtist = ' '
                    for (let i = 0; i < data.artists.data.length; i++) {
                        var element = data.artists.data[i];
                        contenidoArtist += '<li>'
                        contenidoArtist += '<div class="uk-card uk-card-default">'
                        contenidoArtist += '<div class="uk-card-media-top">'
                        contenidoArtist += '<img src=" ' + element.picture_medium + ' "  alt="">'
                        contenidoArtist += '</div>'
                        contenidoArtist += '<div class="uk-card-body">'
                        contenidoArtist += '<a href="../HTML/artists-detalle.html?idArtist=' + element.id + '  ">'
                        contenidoArtist += '<h3 class="uk-card-title">' + element.name + '</h3>'
                        contenidoArtist += '</a>'
                        contenidoArtist += '<p>' + 'Ranked Position: ' + element.position + ' in Monthly Streams ' + '</p>'
                        contenidoArtist += '</div>'
                        contenidoArtist += '</div>'
                        contenidoArtist += '</li>'
                        arTracks.innerHTML = contenidoArtist

                    }
                }



            }





        })













}


//contenidoPlaylist += '<a href="../HTML/tracks-detalles.html?idTrack=' + track.id + '">'
//contenidoPlaylist += '<h3>' + track.title + '</h3>'
//contenidoPlaylist += '</a>'
//contenidoPlaylist += '<a href="../HTML/artists-detalle.html?idArtist=' + track.artist.id + '  ">'
//contenidoPlaylist += '<h3>' + track.artist.name + '</h3>'
//contenidoPlaylist += '</a>'
//contenidoPlaylist += '<h3>' + track.duration+ '</h3>'