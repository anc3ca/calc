const plusins = document.querySelector('.js-plus');
const multiply = document.querySelector('.js-multiply');
const minus = document.querySelector('.js-minus');
const divide = document.querySelector('.js-divide');
const inputins1 = document.querySelector('.js-input1');
const inputins2 = document.querySelector('.js-input2');
const answer = doccument.querySelector('js-result');

let firstValue = inputins1.value
let secondValue = inputins2.value

console.log(plusins)
console.log(inputins)

const Add = (cipars1, cipars2) => {

    return cipars1 + cipars2
}

const Subtract = (cipars1, cipars2) =>{
    return cipars1 - cipars2
}

const Multiply = (cipars1, cipars2) => {
    return cipars1 * cipars2
}

const Divide = (cipars1, cipars2) => {
    return cipars1 / cipars2
}

plusins.addEventListener('click', () => {
    
    answer.textContent = (Add
        (parseInt(imputins1.value),parseInt(imputins2.value)))

})

imputins1.value = ""
imputins2.value = ""

console.log("RAAAAHHHHHHHHH😋")
console.log(Add(firstValue,secondValue))
console.log(Multiply(firstValue,secondValue))
