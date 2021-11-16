// BINARY SEARCH - RECURSIVE

const BinarySearch = (array,value,first,last) => {

  if(first>last) {
    return false
  };

  let middle = Math.floor((first+last)/2);

  if(value>array[middle]) {
    return BinarySearch(array,value,middle+1,last);
  }
  else if(value<array[middle]) {
    return BinarySearch(array,value,first,middle-1);
  }
  else {
    return true;
  }
}

let arr = [1,2,3,4,5,6,7,8,9,11];
let value = 4;
let result = BinarySearch(arr,value,0,arr.length-1);
console.log(result);