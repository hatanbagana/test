let numberToWords = function (num) {
  if (num == 0) return "Zero";

  let belowTwenty = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  let tens = [
    "",
    "",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];
  let thousands = ["", "Thousand", "Million", "Billion"];

  // Helper function to convert numbers below 1000
  function helper(num) {
    if (num == 0) return "";
    else if (num < 20) return belowTwenty[num];
    else if (num < 100)
      return (
        tens[Math.floor(num / 10)] +
        (num % 10 > 0 ? " " + belowTwenty[num % 10] : "")
      );
    else
      return (
        belowTwenty[Math.floor(num / 100)] +
        " Hundred" +
        (num % 100 > 0 ? " " + helper(num % 100) : "")
      );
  }

  let result = "";
  let i = 0;

  while (num > 0) {
    if (num % 1000 !== 0) {
      result =
        helper(num % 1000) +
        (thousands[i] ? " " + thousands[i] : "") +
        " " +
        result;
    }
    num = Math.floor(num / 1000);
    i++;
  }

  return result.trim(); // Ensure final result has no trailing spaces
};

console.log(numberToWords(40000000)); // Output: "Forty Million"
console.log(numberToWords(12345)); // Output: "One Hundred"
console.log(numberToWords(1001)); // Output: "One Thousand One"
console.log(numberToWords(123456789)); // Output: "One Hundred Twenty Three Million Four Hundred Fifty Six Thousand Seven Hundred Eighty Nine"
