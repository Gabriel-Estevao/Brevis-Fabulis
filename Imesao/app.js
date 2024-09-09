function pesquisar(){
    
let section = document.getElementById("resultados-pesquisa")
console.log(section);

let campoPesquisa = document.getElementById("campo-pesquisa").value

if (campoPesquisa == "") {
    section.innerHTML = "<p> Nada foi  encontrado</p>"
    return
}

campoPesquisa = campoPesquisa.toLowerCase()

let resultados = "";
let titulo = "";
let sinopse = "";
let genero = "";


// Para cada dado dentro da lista da dados
for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    sinopse = dado.sinopse.toLowerCase()
    genero = dado.genero.toLowerCase()
    // se titulo includes campoPesquisa

    if (titulo.includes(campoPesquisa) || sinopse.includes(campoPesquisa) || genero.includes(campoPesquisa)) {

        // cria um novo elemento

        resultados += `
        <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.sinopse}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
        </div>
    `
    }
   
}

if (!resultados) {
    resultados = "<p>Nada foi encontrado</p>"
}

section.innerHTML = resultados
}

// console.log(dados);
