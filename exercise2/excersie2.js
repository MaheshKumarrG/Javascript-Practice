console.log('hello newbie! :)');

function subsUpdate() {
    let buttonElem = document.querySelector('.js-subs-button');
    if (buttonElem.innerText === 'Subscribe') {
        buttonElem.innerHTML = 'Subscribed';
        buttonElem.classList.add('subscribed');
    }
    else {
        buttonElem.innerHTML = 'Subscribe';
        buttonElem.classList.remove('subscribed');
    }
}


let age = 4;
let isHoliday = true;
if ((age < 6 || age > 65) && isHoliday) console.log('Discount');
else console.log('no discount');

function greet(name) {
    if (!name) console.log('Hi there');
    else console.log(`Hello ${name}`);
}
greet();

function convertTemperature(deg, unit) {
    if (unit === 'C' || unit === 'c') {
        let F = (deg * (9 / 5)) + 32;
        console.log(F + 'F');
    }
    else {
        let C = (deg - 32) * (5 / 9);
        console.log(C + 'C');
    }
}
convertTemperature(25, 'C');

let newObject = {
    prop1: 'val1',
    prop2: 'val2',
    prop3: 'val3',
    fun: function () {
        console.log("Hello World");
    }
};
console.log(newObject);
console.log(JSON.stringify(newObject));
let jsonToObj = JSON.stringify(newObject);
console.log(JSON.parse(jsonToObj));

localStorage.setItem('lsKey', 'lsValue');
console.log(localStorage.getItem('lsKey'));
let objLS = {
    prop1: 'val1',
    prop2: 'val2',
    prop3: 'val3'
};
localStorage.setItem('lsObj', JSON.stringify(objLS));
console.log(localStorage.getItem('lsObj'));
console.log(JSON.parse(localStorage.getItem('lsObj')));

let object1 = {
    'message': 'hello!'
};
let object2 = object1;
console.log(object2);
let object3 = {
    'message': 'hello'
};
console.log(object1 === object3);
console.log(object1 === object2);

let product1 = {
    'name': 'socks',
    'price': '99',
};
let product2 = {
    'name': 'pants',
    'price': '99',
};
function isSameProduct(product1, product2) {
    return product1.name === product2.name && product1.price === product2.price;
}
console.log(isSameProduct(product1, product2));

function displayName() {
    let inputElem = document.querySelector('.js-input-name');
    let inputVal = inputElem.value;
    let nameElem = document.querySelector('.js-display-name');
    nameElem.innerHTML = `Your name is: ${inputVal}`;
}

function onTyping() {
    let typeElem = document.querySelector('.js-type-input');
    let typedElem = document.querySelector('.js-display-text');
    typedElem.innerHTML = typeElem.value;
}

//advanced function topics

let funVar = function greet(){
    console.log('hello');
}
console.log(funVar);
console.log(typeof funVar);
funVar();

function call(funPass){
    funPass();
}
call(function(){
    console.log('this was passed thorugh a function');
})

setTimeout(function(){
    console.log('Timeout...');
},3000);


//arrow functions
let arrowFunction = (para) =>{
    console.log(para+' inside arrow function');
};
arrowFunction('You are');

let ob = {
    method(){
        console.log("inside a method");
    }
}
console.log(ob.method());

let eventBtn = document.querySelector('.js-event-btn');
eventBtn.addEventListener('click',() =>{
    console.log('displaying using event listener');
});

let arr = [1,-3,5];
console.log(arr.filter((value) =>{
    return value >= 0;
}));

let a = [1,1,3];
console.log(a.map((value)=>{
    return value * 2;
}));
