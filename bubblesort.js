// creates array of unordered data
const data = [ 12, 45, 196, 18, 500, 11, 122, 20, 30, 100];
// const data = [ 12, 45, 196, 18, 500];
// create a selection sorting algo using arrow function
const bubbleSort = (data) =>{
    const length=data.length;
    let attempt = 0;
    //swap function
    const swap = (data, left,right) =>{
        ([data[left],data[right]]=[data[right],data[left]]);
    }
    // loop select element to be compared
    for (let index = 0; index < length; index++) {  
        // loop for each candidate min element to be compared with
        for(let cIndex=0; cIndex<length-1-index;cIndex++){
            attempt++;
            // conditional if the left value (max) is greater than the right (min)
            if(data[cIndex]>data[cIndex+1]){
                swap(data,cIndex,cIndex+1);  
            }
        } 
    }
    console.log(attempt)
    return data;
}
console.log(bubbleSort(data))