var element = document.getElementById('card');
element.addEventListener('mouseover', function() {
    console.log('Event triggered');
});
var event = new MouseEvent('mouseover', {
    'view': window,
    'bubbles': true,
    'cancelable': true
});

element.dispatchEvent(event);