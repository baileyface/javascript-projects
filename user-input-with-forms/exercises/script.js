//Code Your Solution Below

document.getElementById('rocketForm').addEventListener('submit', function(event) {
    let isValid = true;
    const inputs = document.querySelectorAll('input[required], select[required]');

    inputs.forEach(function(input) {
        if(!input.value) {
            isValid = false;
            input.classList.add('error')
        } else{
            input.classList.remove('error');
        }
    });

    if(!isValid) {
        event.preventDefault();
        alert('Please fill out all required fields.');
    }
});