var arr= [1,2,3, 4,5,6,7];
let [num1, num2,,num4 = 0, ...nums]= arr; //SPECIFIED A DEFAULT VALUE FOR NUM4
console.log(num1); //1
console.log(num2); //2
console.log(num4);//4
console.log(nums[0])