function fibonacciRecursive(n) {
    if (n <= 1) {
      return n;
    } else {
      return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
    }
  }
  
  // Example usage:
  console.log(fibonacciRecursive(0)); // Output: 0
  console.log(fibonacciRecursive(1)); // Output: 1 