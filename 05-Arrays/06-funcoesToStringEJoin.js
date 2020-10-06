var carros = ['Fox','Celta','Gol'];

//Retorna o Array através de String
var c = carros.toString();
console.log(c); //Fox,Celta,Gol
console.log(typeof(c));//string

//Retorna como String utilizando - entre os atributos
console.log(carros.join(' - ')); //Fox - Celta - Gol