// SELECTION SORT
const SelectionSort = (array) => {
    for(let i=0; i<array.length; i++) {
        let min = i;
        for(let j=i+1; j<array.length; j++) {
            if(array[j]<array[min]) {
                min = j;
            }
        }

        if(min!==i) {
            [ array[min], array[i] ] = [ array[i], array[min] ];
        }
    }

    return array;
}

let orderedArray = SelectionSort([1,5,6,2,34,21,45,63,2]);
console.log(orderedArray);