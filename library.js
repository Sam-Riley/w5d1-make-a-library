(function(){        //<--this is called an iife. the anonymous function calls itself
    'use strict'    //<--adds more error messages
    var one = function(selector) {
        return document.querySelector(selector)
    }
    var all = function(selector) {
        return document.querySelectorAll(selector)
    }

    var capitalizeFirst = function(word) {
        return word.charAt(0).toUpperCase() + word.substring(1)
    }

    var capitalizeAll = function(words) {
        return words.split(' ').map(capitalizeFirst).join(' ')
    }

    var padLeft = function(word, char = '0', length = 2) {

        //Note you can make the below defaults set in the actual function above (modern browsers only)
        // char = char || '0'
        // length = length || 2

        // if (char === undefined) {    //<----long form of the above code
        //     char = '0'
        // }

        //padLeft('1', '0', 2) => 01
        return char.repeat(length-word.length) + word   //<--class example
        //return '0' + word[0].repeat(1)   //<--my in class attempt^^

    }
    var makeItRed  = function(){
        document.style.body.backgroundColor = 'red'
    }


    window.dog = {
        capitalizeFirst: capitalizeFirst,    //<--- leftside=publicname : rightside=privatename
        capitalizeAll: capitalizeAll,
        pad: padLeft,
        makeItRed: function() {   //<--possible way to place functions in your library
            document.style.body.backgroundcolor = 'red'
        },
        one: one,
    }


}())






// function driveCar() {
// }
//
// var driveCar = function(doStuff, secretMessage) {
//     var stuffMessage = doStuff()
//     //alert(stuffMessage)
//
//     return function() {    //<--returning a function as the value is called a 'CLOSURE'. Only have access to what you returned
//         return 'Hello From Your Car. ' + stuffMessage
//     }
// }
//
//
// var greeting = driveCar(function() {
//     return 'Bingo!'
// })
// //var greeting = driveCar(() => return 'Bingo!') //<---Another way to write the above.
//
// console.log(greeting())
// var msg = greeting()
// document.body.innerHTML = greeting()
//
//
//
// function makeFood() {
//
//     var lettuce = true
//
//     function makeTacos() {
//         var cheese= true
//         console.log(lettuce)
//     }
//
//     console.log(cheese)
// }
