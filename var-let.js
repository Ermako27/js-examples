{
    var a = 10
}

console.log(a) // 10

function foo1() {
    // a1 видна только внутри функции
    var a1 = 20 
}

console.log(a1); // ReferenceError: a1 is not defined

{
    // b видна только внутри блока
    let b = 10
}

console.log(b) // ReferenceError: b is not defined
