document.querySelectorAll('.thumbnail').forEach(img => {
    img.addEventListener('click', function() {
        var src = this.src.replace('pequena', 'grande');
        document.getElementById('popup-img').src = src;
        document.getElementById('popup').style.display = 'flex';
    });
});

document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('popup')) {
        document.getElementById('popup').style.display = 'none';
    }
});
