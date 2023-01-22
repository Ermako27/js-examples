// // declaration
// function foo1() {
//     console.log('10')
// }

// // expression
// let bar1 = function() {
//     console.log('bar')
// }

// ///////////////////////

// foo2() // foo
// function foo2() {
//     console.log('foo')
// }

// bar2() // ReferenceError: bar is not defined
// let bar2 = function() {
//     console.log('bar')
// }

// ///////////////////////

// {
//     function foo3() {
//         console.log('foo')
//     }
// }

// foo3() // foo

// ///////////////////////
// 'use strict'

// {
//     function foo4() {
//         console.log('foo')
//     }
// }

// foo4() // ReferenceError: foo is not defined

// ///////////////////////

// {
//     let bar5 = function() {
//         console.log('bar')
//     }
// }

// bar5(); // ReferenceError: bar is not defined

// ///////////////////////

// {
//     var bar6 = function() {
//         console.log('bar')
//     }
// }

// bar6(); // bar


let a = 2
{
    var a = 1
}

console.log(a);