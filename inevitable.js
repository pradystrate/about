let pressedKeys = [];
document.addEventListener('keydown', function(event) {
    // Add key to the array
    pressedKeys.push(event.key);
    
    // If the array becomes longer than 9 (the length of "inevitable"), remove the first item
    if (pressedKeys.length > 10) {
        pressedKeys.shift();
    }
    
    // Check if the keys match "inevitable"
    if (pressedKeys.join('') === 'inevitable') {
        window.location.href = "https://www.youtube.com/watch?v=uD4izuDMUQA&pp=ygUXdGltZWxhcHNlIG9mIHRoZSBmdXR1cmU%3D";  // Replace with your desired URL
    }
});
