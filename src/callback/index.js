function sum(a, b){
    return a + b    
}

function calc(num1, num2, callback){
    return callback(num1, num2)
}

console.log(calc(6, 3, sum))

function date(callback){
    console.log(new Date)
    setTimeout(function (){
        let date = new Date
        callback(date)
    }, 3000)
}

function printDate(dateNow){
    console.log(dateNow)
}

date(printDate)