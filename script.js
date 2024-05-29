function handleClick() {
    const messageElement = document.getElementById('message');
    if (messageElement.style.display === 'none' || messageElement.style.display === '') {
        messageElement.style.display = 'block';
    } else {
        messageElement.style.display = 'none';
    }

    
    
}
document.getElementById('occasion').addEventListener('change', function () {
    if (this.value === 'Custom') {
        document.getElementById('customOccasion').style.display = 'block';
    } else {
        document.getElementById('customOccasion').style.display = 'none';
    }
});
