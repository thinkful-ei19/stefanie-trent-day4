// To complete this challenge requires:

// Using DOM manipulation and traversal to dynamically add and remove HTML elements and apply styles.
// Linking to an externally hosted library (jQuery) and a locally hosted JavaScript file (index.js).
// Linking to your application JavaScript file from the index.html page.
// Using this and event delegation
// 
// Requirements
// In terms of user experience, your shopping list app must allow users to:
// enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
// check and uncheck items on the list by clicking the "Check" button
// permanently remove items from the list
// Additionally:

// You must use a CDN-hosted version of jQuery
// Put your application code in a file called index.js and link to it in index.html
// Be sure to put both script elements at the bottom of the <body> element.
// Do not alter index.html or main.css other than adding the links to the external JavaScript inside index.html. 
// Write JavaScript code that works with the existing HTML and CSS to implement the required features.
// // Hint: you may find it helpful to read up on and use the following jQuery methods: .submit(), preventDefault(), 
// toggleClass(), and closest().


$('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
	let checkedElement = $(this).closest('li').find('.shopping-item');
	console.log(checkedElement.toggleClass('shopping-item__checked'));

} );


$('.shopping-list').on('click', '.shopping-item-delete', function(event) {
	$(this).closest('li').remove();

});


function generateListElement(input){
	return	`<li>
		        <span class="shopping-item">${input}</span>
		        <div class="shopping-item-controls">
		          <button class="shopping-item-toggle">
		            <span class="button-label">check</span>
		          </button>
		          <button class="shopping-item-delete">
		            <span class="button-label">delete</span>
		          </button>
		        </div>
	      	</li>`
}


$('form').submit( function(event){
	event.preventDefault();
	let userInput = $('form input').val();
	$('.shopping-list').append(generateListElement(userInput));
	this.reset();
})

