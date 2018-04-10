// Comparación Map vs Loop
var array = [1, 2, 3, 4];
var valor = [];


for (var index = 0; index < array.length; index++) {
    valor[index] = array[index] + 5;
    console.log(valor);
}

console.log(valor);
console.log("//////////////////////////////////////////////")

let valor1 = array.map((value, i, array) => {
    return value + 9;

    console.log(valor1);
})

console.log(valor1);
console.log("//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n")



var landscape = function() {
    var result = "";
    var flat = function(size) {
      for (var count = 0; count < size; count++)
        result += "_";
    };
    var mountain = function(size) {
      result += "/";
      for (var count = 0; count < size; count++)
        result += "'";
      result += "\\";
    };
  
    flat(6);
    mountain(40);
    flat(9);
    mountain(10);
    flat(1);
    return result;
  };
  
  console.log(landscape());