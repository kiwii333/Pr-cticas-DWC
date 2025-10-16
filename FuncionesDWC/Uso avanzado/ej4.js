let nums = [1,2,3,4,5,67];

console.log(nums.reduce(function(total,num){
    return total + num;
}))