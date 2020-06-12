window.onload = function(){

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
            contenido += '<img src=" '+ element.artist.picture +' "  alt="">'
            contenido += '</div>'
            contenido += '<div class="uk-card-body">'
            contenido += '<h3 class="uk-card-title">Headline</h3>'
            contenido += '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>'
            contenido += '</div>'
            contenido += '</div>'
            contenido += '</li>'
            
            
        }    
        
        Ctracks.innerHTML = contenido;
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