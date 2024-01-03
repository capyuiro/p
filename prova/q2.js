/*Utilizando arrow function, escreva uma função chamada capitalizarTitulos que use o  método map para transformar uma lista de títulos de livros (strings) em uma lista com  cada palavra dos títulos capitalizada. Por exemplo, se a função receber o array ["o  pequeno príncipe", "dom casmurro", "a metamorfose"], ela deve retornar ["O Pequeno  Príncipe", "Dom Casmurro", "A Metamorfose"]. */

ar =  ["o  pequeno príncipe", "dom casmurro", "a metamorfose"];

const capitalizarTitulos = (cap) => {
    cap.map(string = cap.length)
    for(let x = 0; x < cap.length; x++){
        if(cap[x]= " "){
            let b = "";
            b = b[0].toUpperCase +  b[x + 1].toUpperCase 
            return b
        }
        else{
            console.log('deu ruim mlk')
        }
    }
}

console.log(ar.capitalizarTitulo())

//daria pra usar o "split"(nao se é assim que escreve) pra separar cada letra, so nao sei fazer iso com map

