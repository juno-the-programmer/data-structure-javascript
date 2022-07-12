const factorial = (num) => {
  if (num === 0 || num === 1) {
    return 1;
  }

  return num * factorial(num - 1);
};

console.log(factorial(5));

/*
1 
------------------
2 * factorial(1)
------------------
3 * factorial(2)
------------------
4 * factorial(3)
------------------
5 * factorial(4)
*/
