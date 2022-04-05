
const botaoImporta = document.querySelector('[data-add-button]')

botaoImporta.addEventListener('click', function(){
    let valor = document.getElementById("textinput").value.replace(/-/g, "");
 
    fetch(`https://viacep.com.br/ws/${valor}/json/`).then((response) => {
        response.json().then(data => {
            console.log(data)
           print(data)
        })
    })

})

function print(data){
    document.getElementById("logradouro").innerHTML = data.logradouro
    document.getElementById("bairro").innerHTML = data.bairro
    document.getElementById("cidade").innerHTML = data.localidade
    document.getElementById("estado").innerHTML = data.uf
}

