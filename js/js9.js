var isPrime = function(num) { 
  if (isPrime.cache[num]) {
    return isPrime.cache[num];
  }
  // 省略...
};
isPrime.cache = {};

console.log(isPrime.length);
console.log(isPrime.name);
console.log(isPrime.toString());

