// dizinin 0. indisi null bırakılmıştır çünkü heap yapısı oluşturulurken l=2i ve R=2i+1
// hesaplamalarının sağlanabilmesi için elemanların 1 den başlaması gereklidir. Minimum sayı
// 1. indiste tutulacak şekilde ayarlamalar yapılmıştır.

const heapArray = [null,16,14,10,4,7,9,3,2,8,1];

const MinHeapify = (heap,i) => {

    let [ left,right,minimum ] = [ (i*2), (i*2)+1, i ];

    if(left<=heap.length-1 && heap[left]<heap[i]) {
        minimum = left;
    }
    
    if(right<=heap.length-1 && heap[right]<heap[minimum]) {
        minimum = right;
    }

    if(minimum !== i) {
        [ heap[i], heap[minimum] ] = [ heap[minimum],heap[i] ];
        MinHeapify(heap,minimum);
    }
}

const BuildHeap = (heap) => {
    for(let i=Math.floor(heap.length/2); i>0; i--) {
        MinHeapify(heapArray,i);
    }
}
BuildHeap(heapArray);


//! SORU-2
const HeapAl = (heap) => {
    let minEleman = heap[1];
    heap[1] = heap[heap.length-1];
    heap.pop();

    MinHeapify(heap,1);
    return minEleman;
}

const HeapEkle = (heap, yeni_veri) => {
    heap.push(yeni_veri);
    BuildHeap(heap);
}

console.log("\nELEMAN EKLEME")
HeapEkle(heapArray,0);
console.log(heapArray);


//! SORU-3
const Heap2Array = (heap) => {
    let array = [];

    while(heap.length>1) {
        array.push(HeapAl(heap));
    }
    
    return array;
}
console.log("\nHEAP TO ARRAY SIRALAMA")
console.log(Heap2Array(heapArray));