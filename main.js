//alert("Is anybody there?");
//let answer = confirm("Are you there?");
//let money = prompt("Ваш бюджет на месяц?);
//console.log(answer);

let money = prompt("Your budget in one month?");
let time = prompt("Enter the time in YYYY-MM-DD format");
let firstQuestion = prompt("Введите обязательную статью расходов в этом месяце");
let secondQuestion = prompt("Во сколько обойдется?");


let addData = {

    budget:money,
    timeData:time,
    expenses:{firstQuestion:secondQuestion},
    optionalExpenses:{},
    income:[],
    savings:false
};

alert(money/30);


