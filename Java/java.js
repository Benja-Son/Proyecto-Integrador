fetch('https://httpbin.org/ip')
    .then(function(response) {
        return response.text();
    })
    .then(function(data) {
        console.log('data = ', data);
    })


window.onload = function(){
    
}