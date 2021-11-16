// BINARY SEARCH - ITERATIVE

const BinarySearch = (array,value) => {
  let isFound = false;
  let first = 0;
  let last = array.length-1;
  let middle = Math.floor((first+last)/2);

  while(first<last) {
    if(value>array[middle]) {
      first = middle+1;
      middle = Math.floor((first+last)/2);
    }
    else if(value<array[middle]) {
      last = middle-1;
      middle = Math.floor((first+last)/2);
    }
    else {
      isFound = true;
      break;
    }
  }

  return isFound;
}

let arr = [1,2,3,4,5,6,7,8,9,11];
let value = 0;
let result = BinarySearch(arr,value);
console.log(result);