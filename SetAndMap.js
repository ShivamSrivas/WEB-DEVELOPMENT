// Set

let set1 = new Set([1,2,3,4,5,11])
let set2 = new Set([1,2,3,4,5,6,7,8,9])

function setDifference(SetA, SetB){
    return new Set([...SetA].filter(el => !SetB.has(el)))
}

console.log(setDifference(set1, set2))

// Map
let map = new Map()
let arr=[[1,'Mithun'],[2,'Alka'],[3,'Prabir'],[4,'Shivam'],[5,'Vinay']]

arr.map((item)=>{
    map.set(item[0],item[1])
})
console.log(map)