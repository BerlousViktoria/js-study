const multiplier = {
    firstNum: 1,
    secondNum: 2,
    get isPositive(){ return this.secondNum > 0 && this.firstNum > 0},
    multiplication: function(){return this.firstNum + this.secondNum}
}

const unmultiplier = {
    firstNum: 1,
    secondNum: -2,
    get isPositive(){ return this.secondNum > 0 && this.firstNum > 0},
    unmultiplication: function(){return this.firstNum - this.secondNum}
}

console.log(unmultiplier.unmultiplication());
unmultiplier.unmultiplication;
console.log(multiplier.multiplication());
multiplier.multiplication
console.log(multiplier.isPositive);
console.log(unmultiplier.isPositive);
