function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    // Your code here
    
    const new_arr =[];
    let i = 1;
    for (i = 1;i< arr.length;i += 2){
        {   
            new_arr.push(arr[i]);
            
        }
   }
   return new_arr;

}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    // Your code here
    const newArr = [];
    let i = arr.length-1
    //console.log("the length is " +i);
    
        
        for (i = arr.length-1;i> 0;i -- ){
            if(i%2 !== 0){
                newArr.push(arr[i]);
            }
        //console.log("this is i:" + i + arr[i]);  
        
        }
    
    
    return newArr;

}


function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    // Your code here
    const newArray = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[2**i]) {
            newArray.push(arr[2**i]);
         }
    }
    return newArray;

}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    // Your code here
    const newArray = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[n**i]) {
            newArray.push(arr[n**i]);
         }
    }
    return newArray;

}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here
    const newArray = [];
    if (arr.length == 1){
        return arr;
    } else{
        for(let i = 0; i < arr.length/2; i++){
        newArray.push(arr[i]);
      }
      return newArray;
    }

    
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here
    const newArray = [];
    if (arr.length == 1){
        return newArray;
    } else{
        for(let i = (arr.length)/2; i < arr.length; i++){
            console.log("star with half " + i);
            newArray.push(arr[i]);
        }
      return newArray;
    }
}



module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
