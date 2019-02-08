// Write your function here:
const howOld = (age, year) => {
  let dateToday = new Date();
  let thisYear = dateToday.getFullYear();
  const yearDifference = year - thisYear;
  const newAge = age + yearDifference;
  if (newAge < 0) {
    return `The year ${year} was ${-newAge} years before you were born`
  } else if (newAge > age) {
    return `You will be ${newAge} in the year ${year}`
  } else {
    return `You were ${newAge} in the year ${year}`
  }
};

// Once your function is written, write function calls to test your code!
howOld(39, 1997);