const nums = [1,2,3,4,5];

function sumar(nums){
    let sum = 0;
    for(let i =0; i<=5; i++){
        sum+= nums[i];
        
    }
    console.log(sum);

}




function sumar(nums){
    if(numeros.length === 0){
        return 0;
    }
    return numeros[0] + sumar(nums.slice(1));
}

console.log(`Suma recursiva: ${sumar(nums)}`);
