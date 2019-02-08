// Write your function here:
const lifePhase = (age) => {
  if (0 <= age && age <= 3) {
    return 'baby';
  } else if (4 <= age && age <= 12) {
    return 'child';
  } else if (13 <= age && age <= 19) {
    return 'teen';
  } else if (20 <= age && age <= 64) {
    return 'adult';
  } else if (65 <= age && age <= 140) {
    return 'senior citizen';
  } else if ( age < 0 || age > 140 ) {
    return 'This is not a valid age' }
};







// Uncomment the line below when you're ready to try out your function
console.log(lifePhase(21)); //should print 'child'

// We encourage you to add more function calls of your own to test your code!