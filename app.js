//function to check if the array is of same data type.
function checkType(param){
//stored the data type of 1st element to compare it with other elements, if the param[0] is not same as param[1] it will return not same.
    let firstElemType = typeof(param[0]);

//let i = 1; because we have already stored param[0] if i use let i = 0, it will check the firstElemType data type again and if i have something as ["a",1,2,3,4,5] this will return true regardless of different data type. hence we check the 0th element data type with 1st element and continue
    for(let i = 1; i < param.length; i++){
        if(firstElemType === typeof(param[i])){
            return "Data type is same for all elelemts"
        } else{
            return "Data type is not same"
        }
     }
}
console.log(checkType([1,2,3,4,5,6]))

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



