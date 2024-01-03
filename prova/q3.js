
const retornarNumb = () => {
    return new Promise((resolve, reject) => {
      let numba = Math.floor(Math.random());

      resolve = numba;
    
 })
   
};


const verificarNumero = (numb) => {
    if (numb > 5){
        console.log("Número alto!");
        return ("Número alto!");
        return  "Número baixo!"
    }; 
    if( numb <= 5){
        console.log( "Número baixo!");
        return ( "Número baixo!")
        return  "Número baixo!"
    }
};


let n = n.retornarNumb();

console.log(n.verificarNumero());