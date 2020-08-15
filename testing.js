function newArray(newArr){ 
    //   Loop through the array parameter
      let arr =[];
    // for (let i = 0;  i < newArr.length; i++) {
    // push the values to a new array
        arr.push(newArr);
        console.log(arr)
    //second for loop through arr to compare the values at each index to find if they are duplicates. 
    for (let k = 0;  k < arr.length; k++) {
     //check if each there are duplicate values at each index.
    //if the indexes don't match  return the indexes that do not match 
            if (  arr.indexOf(k) != newArr  ) {
             console.log(arr[k]);
            }
        }
    }
    newArray([1,2,3,4,4,5,6]);
    // // Loop new through the array new variable
    
