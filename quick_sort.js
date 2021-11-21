// QUICK SORT ALGORITHM
const QuickSort = (array) => {
    // base state
    if(array.length<=1) {
        return array;
    }
    
    let [pivot,left,right] = [0,0,1];
    while(right<array.length) {
        // if(array[right]>array[pivot]) {
        //     move right to the variable right if element greater than pivot is found
        //     right++
        // }
        if(array[right]<array[pivot]) {
            // if founded element less than pivot, move variable left and exchange value with variable right
            // right++
            left++;
            [ array[left], array[right] ] = [ array[right], array[left] ];
        }
        right++;
    }
    // replace variable left with pivot element
    [ array[left], array[pivot], left, pivot ] = [ array[pivot], array[left], pivot, left ];
    let leftArray = array.slice(0,pivot);
    let rightArray = array.slice(pivot+1,array.length);

    return [...QuickSort(leftArray), array[pivot], ...QuickSort(rightArray)]
}

console.log(QuickSort([6,10,13,5,8,3,2,11]));