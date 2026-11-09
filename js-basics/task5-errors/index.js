try{
    const divident = Number(window.prompt("Enter a divident"));
    const divisor = Number(window.prompt("Enter a divisor"));
    
    if(divisor == 0){
        throw new Error("You cannot divide by zero!")
    }
    if(isNan(divident) || isNan(divisor)){
        throw new Error("Values must be a number");
    }

    const result = divident / divisor;
    console.log(result);

}
catch(error){
    console.error(error)
}
finally{
    console.log("hello")
}

