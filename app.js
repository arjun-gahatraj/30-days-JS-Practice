function checkType(param){
    //stored the data type of 1st element to compare it with other elements, if the param[0] is not same as param[1] it will return not same.
    let firstElemType = typeof(param[0]);
    let storage = ""
    //let i = 1; because we have already stored param[0] if i use let i = 0, it will check the firstElemType data type again and if i have something as ["a",1,2,3,4,5] this will return true regardless of different data type. hence we check the 0th element data type with 1st element and continue
        for(let i = 1; i < param.length; i++){
             if(firstElemType === typeof(param[i])){
                 storage = "Data type is same" // if data types are same keep updating the storage variable i.e. Data type is same. if not move to else part.
             } else{
               return storage = "Data type is not same"; // if the data type is not same as compared to the 1st element data type just retun Data type is not same,
            }
          }
          return storage;
     }
     console.log(checkType([,"a",1,2,3,4,5,6]));


//function that returns array of seven random numbers from range 0-9 and all unique
function sevenRandomNums(nums){
    let store = [];
    let i = 0;
    while(store.length < 7){ //< run untill storage length is 7. So that is how we get store to have 7 random numbers from 0-9, this will run untill the 7 numbers are unique. and stop when store length is 7
        let randomNumGen = Math.floor(Math.random() * nums.length);
        if(store.indexOf(nums[randomNumGen]) === -1){ // 
            store.push(nums[randomNumGen]);
        }
        i++;
    }
    return store;
}
console.log(sevenRandomNums([0,1,2,3,4,5,6,7,8,9]))

//Check weather the given variable name is valid or not
const checkVarName = (param) => {
    let regEx = /[^A-z|$|_]/ //this regex will include everything other than A-z or $ or _ if it encounters any other characters other than those mentioned it will return True as we are using .test method. it returns Boolean value.
    let matchUsingTest = regEx.test(param)
        if(matchUsingTest === true){ //here we are testing if the param has any other characs than mentioned in regEx variable if yes then it will give true(yes there are characters other than mentioned in the regEx variable, so it will be invalid)
            return "invalid variable name"
        }
        else{//if the param has no other characters other than mentidoned in the regEx variable, it will evaluate to false and then this else will get evaluated
            return "valid variable name"
        }  
}

console.log(checkVarName("_full_Name"))

//function to reverse a given country array
function reverseCountries(countries){
    let arrCopy = countries.slice(0)
    
    let reverseCountries = countries.reverse(); //used .reverse() array method to reverse an array.
    return reverseCountries;
}
console.log(reverseCountries(['tokyo','japan','russia','korea']))

