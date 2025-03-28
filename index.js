let numberToWords = function (num) {
  // 1,000,000,000
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

  let value = "";
  let number = "123";
  function helper(num) {
    console.log(num);
    if (num == 0) return "";
    else if (num < 20) return belowTwenty[num] + " ";
    else if (num < 100)
      return tens[Math.floor(num / 10)] + " " + belowTwenty[num % 10] + " ";
    else
      return (
        belowTwenty[Math.floor(num / 100)] + " Hundred " + helper(num % 100)
      );
  }

  result = "";
  let i = 0;

  while (num > 0) {
    if (num % 1000 !== 0) {
      result = helper(num % 1000) + thousands[i] + " " + result;
    }
    num = Math.floor(num / 1000);
    i++;
  }
  return result.trim();
};

console.log(numberToWords(40000000));
