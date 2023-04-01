const oneArray = [1,2,3,4]
const twoArray = [5,6,7,8]
// Spread Operator It wll spread all your Element from array
const threeArray = oneArray.concat(twoArray)
const threeArray2 = [...oneArray,...twoArray]

console.log(threeArray,threeArray2)

function TestOne(){
console.log(arguments)
}

// Rest Operator It wll pack all your Element from array
function ConvertArguementsInArray()
{
    let argumentsArray=Array.from(arguments)
    // console.log(argumentsArray)
    // let finalArray = argumentsArray.map((e)=>{e})
    let finalArray = argumentsArray.map(e => e)
    console.log(finalArray)    
}

function RestConvertArguementsInArray(...args)
{
    let finalArray = args.map(e => e)
    console.log(finalArray)        
}

RestConvertArguementsInArray(1,2,3,4,5,6)


