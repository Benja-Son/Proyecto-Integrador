window.onload = function(){

    this.location.search    
    let niidea = location.search  
    console.log(niidea)  

    let queryString = new URLSearchParams(niidea)    
    console.log(queryString)    

    let loBuscado = queryString.get("buscador");    
    console.log(loBuscado)

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=" + loBuscado)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        var buscados = document.querySelector(".buscados");
        var meter = " ";
        for (let i = 0; i < data.data.length; i++) {
            var element = data.data[i];
            meter += '<div class=" contenedorBusqueda" >'
            meter += '<a href="../HTML/album-detalle.html?idAlbum='+element.id+'">'
            meter += '<h2 class="titulosBuscados">' + element.album.title + '<h2>'
            meter += '</a>'
            meter += '<img class="sizeIm" src=" '+ element.album.cover_medium +' " >'   
            meter += '</div>'
        }     
        buscados.innerHTML = meter           

        var buscadosTracks = document.querySelector(".buscadosTracks");
        var meterTracks = " ";
        for (let i = 0; i < data.data.length; i++) {
            var element = data.data[i];
            console.log(element.title)
            var titulosBuscados = element.title 
            meterTracks += '<div class=" contenedorBusquedaTracks">'
            meterTracks += '<a href="../HTML/tracks-detalles.html?idTrack='+element.id+'">'
            meterTracks += '<h2  class="titulosBuscados">' + titulosBuscados + '<h2>'
            meterTracks += '</a>'
            meterTracks += '<img class="sizeIm" src=" '+ element.artist.picture_medium +' " >'   
            meterTracks += '</div>'
        
        buscadosTracks.innerHTML = meterTracks           
        }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
    })
}


/*
 .then(function (data) {
                console.log(data);
                var topArtist = document.querySelector('.topArtist');
                var contentArtistas = " ";
                for (let i = 0; i < 9; i++){
                    var element = data.data[i];
                    contentArtistas += '<h2>' + element.name + '</h2>'
                    console.log(element) 
                }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
                    topArtist.innerHTML = contentArtistas;
        
            
            })



              var resultadobusqueda = resultado.data 
        var albumImage = data[i].album.cover
        resultadobusqueda.forEach(function(resultados) {
           console.log(albumImage)
           listadosDeBusqueda += '<li>'
           listadosDeBusqueda += '<img src=" '+ albumImage +' ">'
           listadosDeBusqueda += '</li>'

        listadosDeBusqueda.innerHTML=listadosDeBusqueda
        });

*/