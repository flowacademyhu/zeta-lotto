
const oddEven = (number) => {
  let a = 0;

  if (number % 2 === 0) {
    a = number & 0x239b56;
  } else {
    a = number & 0xc0392b;
  }
  return number;
};

console.log(oddEven(5));
