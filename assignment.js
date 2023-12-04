// 1
function cubeNumber(number){
    if(typeof number !=="number" || number <= 0){
        return "Please enter a valid number";
    }
     return Math.pow(number, 3);
    
}
const num1 = 4;
const input1 = cubeNumber(num1);
console.log(input1)

// 2
function matchFinder(string1, string2) {
    if(typeof string1!== "string" || typeof string2!== "string"){
        return "Please enter a valid words";
    }
    if(string1.includes(string2)){
        return true;
    }
    else{
        return false;
    }
}
const input = matchFinder("Javascript", "Code");
console.log(input)

// 3
function sortMaker(arr) {
    for (let element of arr) {
        if (element < 0) {
            return "Invalid Input";
        }
    }
    let firstElement = arr[0];
    let secondElement = arr[1];
    if (firstElement > 0 && secondElement > 0){
        if(firstElement === secondElement){
            return "equal";
        }
         return [Math.max(firstElement, secondElement), Math.min(firstElement, secondElement)];
    }
}
let array1 = [2, 2];
let result1 = sortMaker(array1);
console.log(result1);

// 4
function findAddress(obj) {
    const street = obj.street || "_ ";
    const house = obj.house || "_";
    const society = obj.society || "_";
    return street +"," + house + "," + society;
    
}

    const num ={
        // 15A 
        // Earth Perfect
        street:10,
        house: "",
        society:""
    }
    const data =findAddress(num);
    console.log(data)
    

// 5
function canPay(changeArray, totalDue) {
    if( changeArray.length === 0){
        return "Please enter a valid array";
    }
    let sum = 0;
    for(let num of changeArray){
        sum +=num;
        if(sum>=totalDue){
            return true;
        }
    }
    return false;     
}
const arrNum =canPay([1,5,5], 10);
console.log(arrNum);









