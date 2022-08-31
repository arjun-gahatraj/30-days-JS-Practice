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