// In this challenge, you'll re-implement FizzBuzz. This time you'll create an event listener that listens for when a user 
// submits a form indicating how high to count. This event should cause the program to create the FizzBuzz sequence up to the number
//  requested by the user.

// For each element in the FizzBuzz sequence, your code should insert an element into the .js-results div that looks like this:

// <div class="fizz-buzz-item">
//   <span>1</span>
// </div>
// If the element's content is the word "fizz", the div with .fizz-buzz-item should also get the class .fizz applied. So:

// <div class="fizz-buzz-item fizz">
//   <span>fizz</span>
// </div>
// If the element's content is the word "buzz" it should get the class ".buzz" applied:

// <div class="fizz-buzz-item buzz">
//   <span>buzz</span>
// </div>
// If its content is the word "fizzbuzz" it should get the class "fizzbuzz" applied:

// <div class="fizz-buzz-item fizzbuzz">
//   <span>fizzbuzz</span>
// </div>
// Your function should append the resulting HTML to the .js-results DOM element.

function fizzBuzz(countTo) {
  let list = [];
  for (let i = 1; i <= countTo; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      list.push('fizzbuzz');
    } else if (i % 3 === 0) {
      list.push('fizz');
    } else if (i % 5 === 0 ) {
      list.push('buzz');
    } else {
      list.push(i);
    }
  }
  return list;
}


function createFizzItem(data) {
	let className = '';
	if (typeof data === 'string') {
		className = data;
	}

	return `<div class="fizz-buzz-item ${className}">
  <span>${data}</span>
</div>`

}

function fizzDataToElement(fizzData){
	return fizzData.map(createFizzItem);
}





$('form').submit(function(event){
	let userInput = $('#number-chooser #number-choice').val();
	let arrAddedElements = fizzDataToElement(fizzBuzz(userInput));
	$('section div').html(arrAddedElements);
	event.preventDefault();	
});

















