function stringCutter(string){
    return string.split(" ");
}

function getKey(string){
    var bits = string.split("=");
    return bits[0];
}

function getPayload(string){
    var bits = string.split("=");
    return bits[1];
}
console.log(stringCutter("sads asdas aaaaaa sdaweqwe wqeqw eqw"));
console.log(getKey("asdas=qweqweq"));
console.log(getPayload("asdas=qweqweq"));
