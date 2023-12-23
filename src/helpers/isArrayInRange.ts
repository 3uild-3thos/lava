export default function isStringArrayInRange(str) {
  const trimmedStr = str.replace(/[\[\]]/g, "");
  const numbersArray = trimmedStr.split(",");
  const numericArray = numbersArray.map(Number);
  const isInRange = numericArray.every(
    (num) => typeof num === "number" && num >= 0 && num <= 255
  );
  if (isInRange) {
    return numericArray;
  } else {
    return false;
  }
}