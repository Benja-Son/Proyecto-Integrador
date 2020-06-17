window.onload = function(){

    var titulo = document.querySelector("#titulo");

    var saludo = document.querySelector('#saludo');

    var span = document.querySelector('#spanWelcome');

    titulo.onmouseover = function (){
    var nombre = prompt('Como te llamas? ')
    if (nombre == null || nombre == '') {
        saludo.innerHTML = "Welcome Back";
    } else { 
        saludo.innerHTML = "Welcome Back " + nombre + "!";
        
    }
    titulo.style.display = 'none';
      span.style.display = 'block';
    }

    var tracksT = document.querySelector('.tracksTitle')

    tracksT.innerHTML = 'Hottest Tracks';

    tracksT.style.color = 'Grey';

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
            contenido += '<img src=" '+ element.artist.picture_medium +' "  alt="">'
            contenido += '</div>'
            contenido += '<div class="uk-card-body">'
        //    contenido += '<a href="../HTML/cancion-detalle.html>'
            contenido += '<h3 class="uk-card-title">' + element.title + '</h3>'
        //    contenido += '</a>'
        //    contenido += '<a href="../HTML/artists-detalle.html">'
            contenido += '<p>' + 'By: ' + element.artist.name + '</p>'
        //    contenido += '</a>'
            contenido += '</div>'
            contenido += '</div>'
            contenido += '</li>'

            Ctracks.innerHTML = contenido;

            var Atracks = document.querySelector(' .Atracks');
            var contenidoAlbum = "";
            for (let i = 0; i < data.albums.data.length; i++) {
            var element = data.albums.data[i]; 
            contenidoAlbum += '<li>'
            contenidoAlbum += '<div class="uk-card uk-card-default">'
            contenidoAlbum += '<div class="uk-card-media-top">'
            contenidoAlbum += '<img src=" '+ element.cover_medium +' "  alt="">'
            contenidoAlbum += '</div>'
            contenidoAlbum += '<div class="uk-card-body">'
        //    contenido += '<a href="../HTML/cancion-detalle.html>'
            contenidoAlbum += '<h3 class="uk-card-title">' + element.title + '</h3>'
        //    contenido += '</a>'
        //    contenido += '<a href="../HTML/artists-detalle.html">'
            contenidoAlbum += '<p>' + 'By: ' + element.artist.name + '</p>'
        //    contenido += '</a>'
            contenidoAlbum += '</div>'
            contenidoAlbum += '</div>'
            contenidoAlbum += '</li>'
            Atracks.innerHTML = contenidoAlbum;

            var arTracks = document.querySelector('.arTracks')
            var contenidoArtist= ' '
            for (let i = 0; i < data.artists.data.length; i++) {
                var element = data.artists.data[i];
                contenidoArtist += '<li>'
                contenidoArtist += '<div class="uk-card uk-card-default">'
                contenidoArtist += '<div class="uk-card-media-top">'
                contenidoArtist += '<img src=" '+ element.picture_medium +' "  alt="">'
                contenidoArtist += '</div>'
                contenidoArtist += '<div class="uk-card-body">'
            //    contenido += '<a href="../HTML/cancion-detalle.html>'
                contenidoArtist += '<h3 class="uk-card-title">' + element.name + '</h3>'
            //    contenido += '</a>'
            //    contenido += '<a href="../HTML/artists-detalle.html">'
                contenidoArtist += '<p>' + 'Ranked Position: ' + element.position + ' in Monthly Streams '+'</p>'
            //    contenido += '</a>'
                contenidoArtist += '</div>'
                contenidoArtist += '</div>'
                contenidoArtist += '</li>'
                arTracks.innerHTML = contenidoArtist
                
            }
            }
            
            

            }
        


            
            
    })    
        
        
    

    


    
    
   



    }

    








/* <!--Carrousel Tracks-->
  <div class="Ctracks" uk-slider="center: true">

    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">

        <ul class="uk-slider-items uk-child-width-1-2@s uk-grid">
           <li>
                <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="../Imagenes/thebox.jpg" alt="">
                    </div>
                    <div class="uk-card-body">
                        <h3 class="uk-card-title">Headline</h3>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                </div>
            </li>

            <li>
                <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="../Imagenes/dontstart.jpg" alt="">
                    </div>
                    <div class="uk-card-body">
                        <h3 class="uk-card-title">Headline</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                </div>
            </li>

            <li>
                <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="../Imagenes/blinding.jpg" alt="">
                    </div>
                    <div class="uk-card-body">
                        <h3 class="uk-card-title">Headline</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                </div>
            </li>

            <li>
                <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="../Imagenes/dance monkey.jpg" alt="">
                    </div>
                    <div class="uk-card-body">
                        <h3 class="uk-card-title">Headline</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                </div>
            </li>

            <li>
                <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="../Imagenes/highestinthe.jpg" alt="">
                    </div>
                    <div class="uk-card-body">
                        <h3 class="uk-card-title">Headline</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                </div>
            </li>
        </ul>

        <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

    </div>

    <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>

</div> */