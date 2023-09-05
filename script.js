document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById('startButton');
    if (startButton) {
        startButton.addEventListener('click', function() {
            window.location.href = 'symptom_checker.html';
        });
    }

    const nextButton = document.getElementById('nextButton');
    if (nextButton) {
        nextButton.addEventListener('click', function() {
            // Collect form data and send to server
            // ... sdk.callFunction('YourFunctionName', formData);
            window.location.href = 'symptoms.html';
        });
    }

    const diagnosisButton = document.getElementById('diagnosisButton');
    if (diagnosisButton) {
        diagnosisButton.addEventListener('click', function() {
            // Collect symptoms and send to server for diagnosis
            // ... sdk.callFunction('YourFunctionName', symptoms);
            window.location.href = 'diagnosis.html';
        });
    }

    const rateButton = document.getElementById('rateButton');
    if (rateButton) {
        rateButton.addEventListener('click', function() {
            window.location.href = 'rating.html';
        });
    }

    const submitRating = document.getElementById('submitRating');
    if (submitRating) {
        submitRating.addEventListener('click', function() {
            // Collect rating and send to server
            // ... sdk.callFunction('YourFunctionName', rating);
            window.alert('Thank you for rating!');
            window.location.href = 'index.html';
        });
    }
});
