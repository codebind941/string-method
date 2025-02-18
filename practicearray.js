function ExamplePush(arr, element) {
     arr.push(element)
    console.log(arr)
}

ExamplePush([1, 2, 3], 4)

function ExamplePop(arr) {
    arr.pop()

    console.log(arr)
}

ExamplePop([1, 2, 3])

function ExampleShift(arr) {
    
    arr.shift()
    console.log(arr)
}

ExampleShift([1, 2, 3])


function ExampleUnshift(arr, element) {

    arr.unshift(element)
    console.log(arr)

}

ExampleUnshift([1, 2, 3], 4)

function ExampleSplice (arr) {

    arr.splice(2, 1, 3)
    console.log(arr)
    
}

ExampleSplice([1, 2, 5, 4])

function ExampleSlice(arr) {
let newarr = arr.slice(0, 4)
console.log(newarr)
}

ExampleSlice([1, 2, 3, 4, 5])

function ExampleConcat(arr, newarr) {
   let newarr1 = arr.concat(newarr)
    console.log(newarr1)
}

ExampleConcat([1, 2, 3, 4], [5, 6, 7, 8])

function ExampleforEach (arr) {
    arr.forEach(function(item, index){
        console.log(item, index)
    })
}

ExampleforEach([3, 2, 3, 5])

function ExampleMap(arr) {
let newarr = arr.map(function (item){
    return item * 2
 })
 console.log(newarr)
}

ExampleMap([1, 2, 3, 4, 5])

function Examplefilter(arr) {

    let newarray = arr.filter(function (item){
      return  item > 3
    })
    console.log(newarray)

}

function ExampleFilter(arr){
    let newarray = arr.reduce(function(acc, x){
        return acc + x
    })
    console.log(newarray)
}

ExampleFilter([1, 2, 3, 4, 5])

function ExampleFind(arr) {
    let newarray = arr.find(function(item){
        return item > 3
    })

    console.log(newarray)
}

ExampleFind([1, 2, 3, 4, 5])

function ExampleSort(arr) {
    let newarray = arr.sort()
    console.log(newarray)
    
}
ExampleSort([1, 3, 2, 5, 4])





