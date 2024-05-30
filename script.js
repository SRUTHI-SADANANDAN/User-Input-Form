function handleClick() {
    const messageElement = document.getElementById('message');
    if (messageElement.style.display === 'none' || messageElement.style.display === '') {
        messageElement.style.display = 'block';
    } else {
        messageElement.style.display = 'none';
    }

    
    
}

function handleClick2() {
    const messageElement = document.getElementById('message2');
    if (messageElement.style.display === 'none' || messageElement.style.display === '') {
        messageElement.style.display = 'block';
    } else {
        messageElement.style.display = 'none';
    }

    
    
}
function handleClick3() {
    const messageElement = document.getElementById('message3');
    if (messageElement.style.display === 'none' || messageElement.style.display === '') {
        messageElement.style.display = 'block';
    } else {
        messageElement.style.display = 'none';
    }

    
    
}
function handleClick4() {
    const messageElement = document.getElementById('message4');
    if (messageElement.style.display === 'none' || messageElement.style.display === '') {
        messageElement.style.display = 'block';
    } else {
        messageElement.style.display = 'none';
    }

    
    
}

function handleClick5() {
    const messageElement = document.getElementById('message5');
    if (messageElement.style.display === 'none' || messageElement.style.display === '') {
        messageElement.style.display = 'block';
    } else {
        messageElement.style.display = 'none';
    }

    
    
}

function handleClick6() {
    const messageElement = document.getElementById('message6');
    if (messageElement.style.display === 'none' || messageElement.style.display === '') {
        messageElement.style.display = 'block';
    } else {
        messageElement.style.display = 'none';
    }

    
    
}
function handleClick7() {
    const messageElement = document.getElementById('message7');
    if (messageElement.style.display === 'none' || messageElement.style.display === '') {
        messageElement.style.display = 'block';
    } else {
        messageElement.style.display = 'none';
    }
}

function handleClick8() {
    const messageElement = document.getElementById('message8');
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


function toggleFileUpload() {
    const fileUploadSection = document.getElementById('file-upload-section');
    const yesRadioButton = document.querySelector('input[name="image"][value="yes"]');
    const noRadioButton = document.querySelector('input[name="image"][value="no"]');
    if (yesRadioButton.checked) {
        fileUploadSection.style.display = 'block';
    } else if(noRadioButton.checked){
        fileUploadSection.style.display = 'none';
    }
    else {
        fileUploadSection.style.display = 'none';
    }
}

function previewImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const preview = document.getElementById('preview');
            preview.src = e.target.result;
            preview.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
}