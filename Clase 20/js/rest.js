fetch("https://restcountries.com/v3.1/all")
.then(function(res) {
    return res.json();
})
.then(function(paises) {
    paises.forEach(pais => {
       console.log(pais.name);
    });
    console.log(paises);
}).catch(function(err) {
    console.error(err);r;
});