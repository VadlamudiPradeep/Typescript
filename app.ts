let num1Element = document.getElementById('num1') as HTMLInputElement ;
let num2Element = document.getElementById('num2') as HTMLInputElement ;

let buttonElement = document.querySelector('button');

function add(num1:number , num2:number ){
    return num1 + num2 ;
};

// console.log(add(1 , 2));
// console.log(add('1' ,'2'));

buttonElement.addEventListener('click' , ()=>{
let num1 = num1Element.value;
let num2 = num2Element.value;
let result = add(+num1 , +num2);
console.log(result)
})