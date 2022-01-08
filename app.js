async function getData(x){
    return "hello "+ x;
}

async function test(){
   var a=  await getData("world");
   return getData(a);
}
test().then(x=> console.log(x))