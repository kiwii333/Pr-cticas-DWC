num_par = (x) => {
    if (x % 0){
        return true;
    }else{
        return false;
    }
}

console.log(num_par(2));
console.log(num_par(5));