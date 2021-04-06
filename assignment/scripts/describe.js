// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We declared a variable 'name' and set it's value to "Dane".
// We then ask if value of 'name' is equal to "Mary". If it is,
// we console.log 'Hi, Mary!'. If the value of 'name' is anything other than
// that we console.log 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We declared a variable 'secret', then declared another variable 'code' and set it's
// value to an integar '123'. In our next piece of code we ask if the value of 'code' is
// '123' and if it is, we set the variable 'secret' value to 'super', and set 'code' value to
// code * 2. In this case, the value of 'code' would now hold the integar '246'.
// The next block of code is asking if the value of code is greater than 250, and if it is we
// change the value of the variable 'secret' to 'duper'. In our case it is not, and finally
// we console.log 'super'.


//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We declared a variable 'isStudent' and set it's value to 'true'. The next variable we set
// is 'age' and set it's value to an integar '34'. The last variable we set is 'zip' and it's
// value is set to an integar '55407'. So the first statement is asking if the variable 'isStudent'
// is 'true' and also if the variable 'zip' is greater than '80000'. If it is, we console.log "You're
// a student on the West Coast!". Since the statement is not true and true we don't run this block.
// The next block is asking if the variable 'isStudent' equals to false or is the 'age' variable less than
// 30, and if either of these conditions are true we console.log 'What are your hobbies?'. Neither of these conditions
// are satisfied since we would need our variable 'isStudent' to equal false or our 'age' to be 29 or less.
// The next block is asking if the variable 'isStudent' is 'true' and if so console.log 'Welcome to Prime!'.
// This block of code is satisfied and would be ran. If this wasn't the case, the next block of code would
// run since we came to our else statement, it would console.log 'How about the weather?'.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
  // colorTwo = 'purple'; We need to set colorTwo value to 'purple' as well.
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

// Looks like the OR operator was used instead of the AND &&.
// The condition should be
// if (temp > 39 && time >= 4)

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// The expressions and operator used were incorrect to satisfy what we wanted the statement
// to do. You would want the 'age' less than 'minAge' so that it excutes correctly. It should Look
// like what I have below this line.
// if (age < minAge)

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
