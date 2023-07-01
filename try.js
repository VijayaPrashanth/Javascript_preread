//FILTER
console.log("Filter Function");
const numbers = [1, 2, 3, 4, 5];
console.log("Perform Filter on the array : "+numbers);

function customFilter(arr, condition) {
    const filteredArray = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (condition(arr[i], i, arr)) {
        filteredArray.push(arr[i]);
      }
    }
  
    return filteredArray;
  }

const evenNumbers = customFilter(numbers, function(num) {
  return num % 2 === 0;
});

console.log(evenNumbers); 






//MAP
console.log("Map Function");
console.log("Perform Map on the array : "+numbers);

function customMap(arr, perform_map) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
      result.push(perform_map(arr[i], i, arr));
    }
    return result;
}
 
  var squaredNumbers = customMap(numbers, function(num) {
    return num * num;
  });
  
  console.log(squaredNumbers); 



  //REDUCE
  console.log("Reduce Function");
  console.log("Perfrom Reduce on the array :"+numbers);

  function makeReduce(arr, callback, initialValue) {
    let accumulator = initialValue ;
    const startIndex = 0;
  
    for (let i = startIndex; i < arr.length; i++) {
      accumulator = callback(accumulator, arr[i]);
    }
  
    return accumulator;
  }

const sum = makeReduce(numbers, (acc, current) => acc + current, 0);
console.log(sum); 




//FOREACH
console.log("ForEach Function");
console.log("Perform ForEach on the array : "+numbers);
function performForEach(arr, perform) {
    for (let i = 0; i < arr.length; i++) {
      perform(arr[i]);
    }
  }

performForEach(numbers, (element) => {
  console.log(element+2); 
});