// Your DOM library code goes here inside of an IIFE and must set a global variables called md.
(function(){
    'use strict'

    var one = function(selector) {
        return document.querySelector(selector)
    }
    var two = function(selector) {
        return document.querySelectorAll(selector)
    }
    var remove = function(selector) {
        return document.querySelector(selector).remove()
    }
    var addClass = function(selector, newClass) {
        document.querySelector(selector).classList.add(newClass)
    }
    var removeClass = function(selector, removeMe) {
        document.querySelector(selector).classList.remove(removeMe)
    }
    var hasClass = function(selector, hasMe) {
        return document.querySelector(selector).classList.contains(hasMe)
    }
    var getAttr = function(selector, needMe) {
        return document.querySelector(selector).getAttribute(needMe)
    }
    var setAttr = function(selector, changeMe, value) {
        return document.querySelector(selector).setAttribute(changMe, value)
    }
    var setHTML = function(selector, newText) {
        return document.querySelector(selector).innerHTML = newText
    }
    var getHTML = function(selector) {
        return document.querySelector(selector).innerHTML
    }
    var ajax = function(url, successCallBack) {
        fetch(url)
        .then(res => res.json())
        .then(successCallBack)
    }
    var getProp = function(selector, property) {
        return one(selector)[property]
    }
    var setProp = function(selector, property, inputValue) {
         one(selector)[property] = inputValue
    }
    var getValue = function(selector) {
        one(selector).value
    }
    var setValue = function(selector, inputValue) {
        one(selector).value = inputValue
    }

    window.md = {
        one: one,
        two: two,
        remove: remove,
        addClass: addClass,
        removeClass: removeClass,
        hasClass: hasClass,
        getAttr: getAttr,
        setAttr: setAttr,
        setHTML: setHTML,
        getHTML: getHTML,
        ajax: ajax,
        getProp: getProp,
        setProp: setProp,
        getValue: getValue,
        setValue: setValue,
    }

}())
