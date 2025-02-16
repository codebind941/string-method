function length(str) {
    let length1 = str.length
    console.log(length1)
}

length("Hello World")
  
  
function indexOf(str, target) {
    let index = str.indexOf(target)
    console.log(index)
}
  
indexOf("Hello World", "World")


function lastindexOf1(str, target) {
    let index = str.lastIndexOf(target)
    console.log(index)
}
  
lastindexOf1("Hello World World", "World")


function slice(str, start, end) {
    let slice = str.slice(start, end)
    console.log(slice)
}

slice("Hello to my World", 1, 5)

function substring(str, start , end) {
    let substring = str.substring(start, end)
    console.log(substring)
}

substring("Hello to my World", 1, 5)

function replace(str, target, replace) {
    let replace1 = str.replace(target, replace)
    console.log(replace1)
}

replace("Hello World", "World", "Quasim")

function split (str) {
    let split1 = str.split(" ")
    console.log(split1)
}

split("Hello World")

function trim(str) {
    let trim1 = str.trim()
    console.log(trim1)

}

trim("      Hello World")

function uppercase(str) {
    let case1 = str.toUpperCase()
    console.log(case1)
}
uppercase("i have said this many time")


function lowercase(str) {
    let case2 = str.toLowerCase()
    console.log(case2)
}
lowercase("I HAVE SAID THIS MANY TIME")