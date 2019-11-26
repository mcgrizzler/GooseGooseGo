var copy = $('body').clone()

// existing code

chrome.runtime.onMessage.addListener(function() {
	$('body').html($(copy))
})