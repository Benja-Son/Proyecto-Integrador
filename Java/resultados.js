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
            meter += '<h2>' + element.album.title + '<h2>'
            meter += '<img class="sizeIm" src=" '+ element.album.cover_medium +' " >'   
        }     
        buscados.innerHTML = meter           

        var buscadosTracks = document.querySelector(".buscadosTracks");
        var meterTracks = " ";
        for (let i = 0; i < data.data.length; i++) {
            var element = data.data[i];
            console.log(element.title)
            meterTracks += '<h2>' + element.title + '<h2>'
            meterTracks += '<img class="sizeIm" src=" '+ element.artist.picture_medium +' " >'   
        
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