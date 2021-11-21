const InsertionSort = (arr) => {

    for (let i = 1; i < arr.length; i++) {
      for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      }
    }
    return arr;
  };

InsertionSort([1,7,3,5,8,11,34,2,3]);