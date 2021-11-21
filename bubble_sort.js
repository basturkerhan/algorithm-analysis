// BUBBLE SORT
const BubbleSort = (array) => {
    for(let i=0; i<array.length; i++) {
        let isOrdered = true;   // if array is already sorted, we don't necessary loop
        for(let j=0; j<array.length-i; j++) {
            if(array[j]>array[j+1]) {
                isOrdered = false;
                temp = array[j+1];
                array[j+1] = array[j];
                array[j] = temp;
            }
        }
        if(isOrdered) {
            break;
        }
    }
  
    return array;
  }

console.log(BubbleSort([1,6,3,7,11,6,34,21]));