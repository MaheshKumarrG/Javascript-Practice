import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import weekday from "https://unpkg.com/dayjs@1.11.10/esm/plugin/weekday/index.js";
dayjs.extend(weekday);


let today = dayjs();

document.querySelector('.js-today')
    .innerHTML = dayjs().format('DD/MM/YYYY');

let day5 = (today.add(5,'day')).format('MMMM,DD');
document.querySelector('.js-5days')
    .innerHTML = day5;    

let month1 = (today.add(1,'month')).format('MMMM,DD');
document.querySelector('.js-1month')
    .innerHTML = month1;

let before1Month = (today.subtract(1,'month')).format('MMMM,DD');
document.querySelector('.js-1month-before')
    .innerHTML = before1Month;


let todayDay = today.format('dddd');
document.querySelector('.js-today-day')
    .innerHTML = todayDay+',';

function isWeekend(todayDay){
    if (todayDay === 'Sunday' || todayDay === 'Saturday'){
        document.querySelector('.js-weekend')
            .innerHTML = 'It\'s a weekend';
    }else{
        document.querySelector('.js-weekend')
            .innerHTML = "It's not a weekend";
        dayToGo(today);
    }
}
function dayToGo(today){
    let todayFormat = today.format('D');
    let weekendFormat = (dayjs().weekday(6)).format('D');
    let daysToGo = weekendFormat - todayFormat;

    document.querySelector('.js-daysToGo')
        .innerHTML = daysToGo + ' day(s) to go!!';
}
isWeekend(todayDay);


