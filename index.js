let listaDePecas = ["Peça 01","AB","Peça AB","Peça X","Peça 02","Peça XY","D"];
let peso = 99;
qtd = listaDePecas.length;

// Verificação peso
if(peso == 100) {
  console.log("Não pode ser cadastrado, peso da peça é igual a 100g");
 }  
 else if(peso > 100 ) {
  console.log("Pode ser cadastrado, peso da peça maior que 100g");
 } 
 else{
  console.log("Não pode ser cadastrado, peso da peça menor que 100g");
 }

// Verificação tamanho lista
if( qtd > 10 ){
  console.log("Item pode ser cadastrado!");
} else {
  console.log("Item não pode ser cadastrado! Não possui o tamanho suficiente");
}

// Verificação nome 
for( let i = 0; i < qtd; i++ ){
  let peca = listaDePecas[i];
  if( peca.length < 3 ){
    console.log("O nome da peça tem menos de 3 letras");
  } else {
    console.log("O nome da peça tem mais de 3 letras");
  }
}




