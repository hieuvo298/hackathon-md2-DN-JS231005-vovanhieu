//bài 1
function findMaxUniqueNumber(numbers) {
  numbers.sort(function(a, b) {
    return b - a;
  });
  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] !== numbers[i + 1]) {
      console.log("Số lớn nhất và duy nhất là: " + numbers[i]);
      return numbers[i];
    }
  }
}
let numbers = [1,2,3,5,5];
findMaxUniqueNumber(numbers);
  // bài 2
  function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function sumOfPrimes(inputString) {
    const numbers = inputString;
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (isPrime(numbers[i])) {
            sum += numbers[i];
        }
    }

    return sum;
}

const inputString = [9,2,3,7,1];
const result = sumOfPrimes(inputString);
console.log(`Tổng các số nguyên tố là: ${result}`);


  //bài 4
  function removeNumbers(inputString) {
    var stringWithoutNumbers = '';
    for (var i = 0; i < inputString.length; i++) {
        if (isNaN(parseInt(inputString[i]))) {
            stringWithoutNumbers += inputString[i];
        }
    }
    return stringWithoutNumbers;
}
var userInput = prompt("Enter a string: ");

var ketqua = removeNumbers(userInput);
console.log("chuỗi sau khi xóa số là: " + ketqua);
  //bài 5
  function daoNguocChuoi(str) {
    const words = str.split(' ');
    const reversedWords = words.map(word => {
        return word.split('').reverse().join('');
    });
    const reversedString = reversedWords.join(' ');

    return reversedString;
}
const a = "This is an example!";
const reversedOutput = daoNguocChuoi(a);
console.log(`chuỗi sau khi đảo ngược là: ${reversedOutput}`);

 
  
 
  
