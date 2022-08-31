const binSearch = (arr, searchValue) => {
    let min = 0;
    let max = arr.length - 1;


    while(min <= max) {
    
        let midPoint = Math.floor((max+min)/2);
        if(searchValue === arr[midPoint]) {
            return midPoint;
        } else if(searchValue < arr[midPoint]) {
            max = midPoint - 1;
        } else if(searchValue > arr[midPoint]) {
            min = midPoint + 1;
        }
    }
    return null;

}

let result = binSearch([1,2,3,4,5,6,7,8,9,10,200], 2);
console.log(result);