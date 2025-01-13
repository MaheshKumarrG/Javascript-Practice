// function changeStyle(btnElem){
//     btnElem.classList.add('is-toggled');

//     if(btnElem.classList.contains('updated')){
//         btnElem.classList.remove('updated');
//     }else{
//         btnElem.classList.add('updated');
//     }
// }
function changeStyle(btnElem){
    let allBtnElem = document.querySelectorAll('.js-button');
    for(let i=0; i< allBtnElem.length; i++){
        allBtnElem[i].classList.remove('updated');
        // console.log(allBtnElem[i]);
    }
    btnElem.classList.add('updated');
}


const nums = [10,20,30];
nums[2] = 99;
console.log(nums);

console.log('last value:'+nums[nums.length - 1]);

let temp = nums[0];
nums[0] = nums[nums.length - 1];
nums[nums.length - 1] = temp;
console.log(nums);

let count = 0;
function minMax(a){
    let max = a[0];
    let min = a[0];
    for(let i=0; i<a.length; i++){
        if(a[i]>max) max = a[i];
        if(a[i]<min) min=a[i];
    }
    console.log(`max:${max} min:${min}`);
}
minMax([1,-3,5]);

let array = ['hello','search','good','search'];
let flag = true;
for(let i=0; i<array.length;i++){
    if(array[i]==='search'){
        console.log(i);
        flag = false;
        break;
    }
}
if(flag){
    console.log('-1');
}

function findIndexx(arr,word){
    let isPresent = true;
    for(let i=0; i<arr.length; i++){
        if(arr[i] === word){
            console.log(i);
            isPresent = false;
            break;
        }
    }
    if(isPresent)console.log('-1');
}
findIndexx(['green','red','blue','red'],'yellow');

function removeEggg(foods){
    let result = [];
    for(let i=0; i<foods.length; i++){
        if(foods[i]==='egg'){
            foods.splice(i,1);
            i--;
        }
    }
    console.log(foods);
}
removeEggg(['egg','apple','egg','egg','ham']);

for(let i=1; i<21;i++){
    if((i%3==0) && (i%5==0)) console.log('FizzBuzz');
    else if(i%3 == 0)console.log('Fizz');
    else if(i%5 == 0)console.log('Buzz');
    else console.log(i);
}

function findIndex(arr,word){
    let isPresent = true;
    for(let i=0; i<arr.length; i++){
        if(arr[i] === word){
            console.log(i);
            isPresent = false;
            break;
        }
    }
    if(isPresent)console.log('-1');
}
findIndex(['green','red','blue','red'],'red');

function runTwice(fun){
    fun();
    fun();
}
runTwice(function(){
    console.log('12b');
})


let finishBtnElem = document.querySelector('.js-finish-button');
function changeBtn(){
    setTimeout(function(){
        finishBtnElem.innerHTML = 'Finished';
    },1000);
    finishBtnElem.innerHTML = 'loading...'
}

let cartElem = document.querySelector('.js-cart-btn');
let msgElem = document.querySelector('.js-added-msg');
function addCart(){
    msgElem.innerHTML = 'Added';

    setTimeout(function() {
        msgElem.innerHTML = ' ';
    }, 1000);
}

let message = 2;
function updateTitle(){
    if(!window.intervalID){
        setInterval(function() {
            if(document.title === 'App'){
                document.title = `(${message})Messages`;
            }else if(message === 0){
                document.title ='App';
            } else{
                document.title = 'App';
            }
        }, 1000); 
    }    
}

let multiply = (a,b) =>{
    console.log(a*b);
};
multiply(2,3);

function countPositive(nums){
    let count = 0;
    nums.forEach((element) => {
        if(element > 0) count ++;
    });
    console.log(count);
}
countPositive([1,-3,5,10]);

function addNum(array,num){
    console.log(array.map((element,index) => {
        return element + num;
    }));
}
addNum([1,2,3],2);

function removeEgg(foods){
    console.log(foods.filter((element , index)=>{
        if(element !== 'egg') return element;
    }));
}
removeEgg(['egg','apple','egg','egg','ham']);



