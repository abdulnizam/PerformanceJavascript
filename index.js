

// Array Index VS Array Slice


// array slice is faster then array index 

console.time('array slice');
for(var i = 0; i < 1000000; i = i + 1) {
  var array = [1,2,3,4,5,6];
  var val = array.slice(-1)[0];
}

console.timeEnd('array slice');


// array index is faster then array slice 

console.time('array index');
for(var i = 0; i < 1000000; i = i + 1) {
  var array = [1,2,3,4,5,6];
  var val = array[array.length - 1];
}

console.timeEnd('array index');