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

    const testButton = document.getElementById('testButton');
    if (testButton) {
        testButton.addEventListener('click', function() {
            testButtonClicked();
        });
    }
});

async function testButtonClicked() {
    const apiKey = "I19OYRieoRRrDLLTueM1K1KPUlbpOkbieslHEGW1OHj3USPybgbsd7TIzLHhOcok";

    const params = new URLSearchParams({
        leagueName: "Major League Baseball"
    });
    
    fetch('https://us-east-1.aws.data.mongodb-api.com/app/application-0-vhbaw/endpoint/GetTeamsInLeague?'+params, 
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + apiKey, // Your API key
        }
    })
    .then(response => response.json())
    .then(data => alert(data))
    .catch(err => console.error(err));
}