export default function isStringArrayInRange(str) {
  const trimmedStr = str.replace(/[\[\]]/g, "");
  const numbersArray = trimmedStr.split(",");
  const numericArray = numbersArray.map(Number);
  console.log(numericArray);
  const isInRange = numericArray.every(
    (num) => typeof num === "number" && num >= 0 && num <= 255
  );
  console.log(isInRange);
  if (isInRange) {
    return numericArray;
  } else {
    return false;
  }
}