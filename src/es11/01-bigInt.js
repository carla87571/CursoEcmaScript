const aBigNumber = 1234567890123456789012345678901234567890n;
const anotherBigNumber = BigInt("9876543210987654321098765432109876543210");

console.log(aBigNumber);
console.log(anotherBigNumber);

const sum = aBigNumber + anotherBigNumber;
console.log("Sum:", sum);

const product = aBigNumber * anotherBigNumber;
console.log("Product:", product);