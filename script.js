document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById('startButton');
    if (startButton) {
        startButton.addEventListener('click', async function() {
            window.location.href = 'terms.html';
        });
    }

    const acceptTermsButton = document.getElementById('acceptTermsButton');
    if (acceptTermsButton) {
        acceptTermsButton.addEventListener('click', function() {
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
            window.alert('Thank you for rating!');
            window.location.href = 'index.html';
        });
    }

    const testMongoButton = document.getElementById('testMongoButton');
    if (testMongoButton) {
        testMongoButton.addEventListener('click', function() {
            testMongoButtonClicked();
        });
    }

    const testEndlessMedicalButton = document.getElementById('testEndlessMedicalButton');
    if (testEndlessMedicalButton) {
        testEndlessMedicalButton.addEventListener('click', function() {
            initSession();
        });
    }
});

async function testMongoButtonClicked() {
    const params = new URLSearchParams({leagueName: "Major League Baseball"});
    const url = 'https://us-east-1.aws.data.mongodb-api.com/app/application-0-vhbaw/endpoint/GetTeamsInLeague?' + params;
    const apiKey = 'I19OYRieoRRrDLLTueM1K1KPUlbpOkbieslHEGW1OHj3USPybgbsd7TIzLHhOcok';
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + apiKey, // Your API key
        }
    };
    
    fetch(url, options)
    .then(response => response.json())
    .then(data => alert(data))
    .catch(err => console.error(err));
}

async function initSession()
{
    const url = 'https://endlessmedicalapi1.p.rapidapi.com/InitSession';
    const apiKey = 'd8cc455abdmsh581681db5f9092dp133050jsn37eb41c7cf7f';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'endlessmedicalapi1.p.rapidapi.com'
        }
    };

    fetch(url, options)
    .then(response => response.json())
    .then(data => window.alert(JSON.stringify(data)))
    .catch(err => error.log(err));
}