// //function to check if the array is of same data type.
// function checkType(param){
// //stored the data type of 1st element to compare it with other elements, if the param[0] is not same as param[1] it will return not same.
//     let firstElemType = typeof(param[0]);

// //let i = 1; because we have already stored param[0] if i use let i = 0, it will check the firstElemType data type again and if i have something as ["a",1,2,3,4,5] this will return true regardless of different data type. hence we check the 0th element data type with 1st element and continue
//     for(let i = 1; i < param.length; i++){
//         if(firstElemType === typeof(param[i])){
//             return "Data type is same for all elelemts"
//         } else{
//             return "Data type is not same"
//         }
//      }
// }
// console.log(checkType([1,2,3,4,5,6]))

// const checkVarName = (param) => {
//     let regEx = /[^A-z|$|_]/ //this will check wether these characters are there if it has any other characters other than those mentioned in the regex if we use .test it will return true if it finds any other character or it will return false if no new characters other than A-z|$|_ are found it will return false. ^ is used to find something that is NOT in a given data.
//     let matchUsingTest = regEx.test(param)
//         if(matchUsingTest === true){
//             return "invalid variable name"
//         }
//         else{
//             return "valid variable name"
//         }  
// }
// console.log(checkVarName("full_Name"))


//function that returns array of seven random numbers from range 0-9 and all unique
function sevenRandomNums(nums){
    let store = [];
    let i = 0;
    while(store.length < 7){ //< 7 coz i want 7 random numbs on my store variable. And as this is a while loop it will run untill store is equal to 7
        let randomNumGen = Math.floor(Math.random() * nums.length);
        if(store.indexOf(nums[randomNumGen]) === -1){ // 
            store.push(nums[randomNumGen]);
        }
        i++;
    }
    return store;
}
<<<<<<< HEAD
console.log(sevenRandomNums([0,1,2,3,4,5,6,7,8,9]))
=======
console.log(checkType([1,2,3,4,5,6]))

//Check weather the given variable name is valid or not
const checkVarName = (param) => {
    let regEx = /[^A-z|$|_]/ //this will check wether these characters are there if it has any other characters other than those mentioned in the regex if we use .test it will return true if it finds any other character or it will return false if no new characters other than A-z|$|_ are found it will return false. ^ is used to find something that is NOT in a given data.
    let matchUsingTest = regEx.test(param)
        if(matchUsingTest === true){
            return "invalid variable name"
        }
        else{
            return "valid variable name"
        }  
}

console.log(checkVarName("full_Name"))



>>>>>>> c6d2e866394d65cb3b57a0a95c9714dd273d5b95
