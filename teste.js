 //MANIPULANDO ARQUIVOS

// // //var preco = 2;
// // var desconto = 0.2;
// // const PRECO = 2;
// // var total = PRECO - desconto;

// // //FUNÇOES

// // function soma(a, b) {
// //   console.log(a + b);       //verificar se funciona
// //    return a + b;           //retornar valor da funçao
// // }

// // soma(3, 5);  //8

// // console.log("Hello world!");

function returnEvenValues(){  //retornar  nº pares
  let evenNums = [];
  for (let i = 0; i < array.length; i++) {
     if(array[i] % 2 === 0) {
       evenNums.push(array[i]);
     } else {
      console.log(`${array[i]} não é par!`);        //se p nº não satisfaz
     }
   }
   console.log('Os números pares são:', evenNums);
}

let array = [1, 2, 4, 5, 7, 8];

returnEvenValues(array);  
