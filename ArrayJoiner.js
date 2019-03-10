function joinArrays(array1, array2){
    var result = array1.concat(array2);
    return result.sort(function(a,b){return a - b});
}

var a1 = [40, 60,32];
var a2 = [1003, 41, 0, 53, 3];

console.log(joinArrays(a1, a2));