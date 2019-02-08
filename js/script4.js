// Write your function here:
const finalGrade = (number1, number2,number3) => {
  if ( number1 < 0 || number1 > 100 || number2 < 0 || number2 > 100 || number3 < 0 || number3 > 100) {
    return 'You have entered an invalid grade.'
  }
  let result = (number1 + number2 +number3)/3;
  if (0 <= result && result <= 59) {
    return 'F';
  } else if (60 <= result && result <= 69) {
    return 'D';
  } else if (70 <= result && result <= 79) {
    return 'C';
  } else if (80 <= result && result <= 89) {
    return 'B';
  } else if (90 <= result && result <= 100) {
    return 'A';
  }
};





// Uncomment the line below when you're ready to try out your function
console.log(finalGrade(99, 92, 95)); // Should print 'A'

// We encourage you to add more function calls of your own to test your code!