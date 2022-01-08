function add(...a){
    var sum = 0;
    for(var k of a){
        sum = sum+ k;
    }
    return sum
}
console.log(add(2,3,4 ,5));

let arr= [2,3,4,5];
console.log(add(...arr)) //spread: will convert array to individual elements