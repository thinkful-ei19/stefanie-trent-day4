// In this challenge, you need to write JavaScript that provides the following experience: when a user selects one of 
// the thumbnail images using the mouse or keyboard, that image should be displayed in the full-size image container at the top. 
// Updating the image should also update its alt attribute. To test keyboard interactivity, you can Tab to one of the thumbnails and 
// press the Enter key.



// event listener on each image/button whenever clicked it will move to the full-size image container, also alt attr


function toggleImg() {
	$('.thumbnails').on('click', 'a', function(event) {
		let image = $(event.currentTarget).html();
		console.log(image);
		$('.hero').html(image);
	})
}

toggleImg();