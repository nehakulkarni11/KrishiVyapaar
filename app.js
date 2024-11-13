// Translation object (English to Hindi)
const translations = {
    "Mango Transport Dashboard": "वास्तविक परिवहन डैशबोर्ड",
    "Real-Time Status": "वास्तविक समय की स्थिति",
    "Temperature": "तापमान",
    "Humidity": "नमी",
    "Heat Index": "हीट इंडेक्स",
    "Timestamp": "समय टिकट",
    "Alerts": "चेतावनी",
    "No Alerts": "कोई चेतावनी नहीं",
    "High Temperature! Take action!": "उच्च तापमान! कार्रवाई करें!",
    "Low Humidity! Take action!": "कम नमी! कार्रवाई करें!",
    "Communicate with Transporter": "परिवाहक से संवाद करें",
    "Write a message...": "एक संदेश लिखें...",
    "Send Message": "संदेश भेजें",
    "Message Sent!": "संदेश भेजा गया!"
};

// State variables
let isHindi = false;
let isLoggedIn = false;

// Function to translate page content
function translatePage() {
    isHindi = !isHindi;

    document.getElementById('translate-btn').textContent = isHindi ? 'English' : 'हिंदी';

    if (isHindi) {
        document.querySelector('h1').textContent = translations["Mango Transport Dashboard"];
        document.querySelector('.status-card h2').textContent = translations["Real-Time Status"];
        document.querySelector('.alert-card h2').textContent = translations["Alerts"];
        document.querySelector('.message-card h2').textContent = translations["Communicate with Transporter"];
        document.getElementById('temp-value').previousSibling.textContent = translations["Temperature"] + ": ";
        document.getElementById('humidity-value').previousSibling.textContent = translations["Humidity"] + ": ";
        document.getElementById('heat-index-value').previousSibling.textContent = translations["Heat Index"] + ": ";
        document.getElementById('timestamp-value').previousSibling.textContent = translations["Timestamp"] + ": ";
        document.getElementById('message-box').placeholder = translations["Write a message..."];
        document.getElementById('send-message-btn').textContent = translations["Send Message"];
    } else {
        // Revert to English
        document.querySelector('h1').textContent = "Mango Transport Dashboard";
        document.querySelector('.status-card h2').textContent = "Real-Time Status";
        document.querySelector('.alert-card h2').textContent = "Alerts";
        document.querySelector('.message-card h2').textContent = "Communicate with Transporter";
        document.getElementById('temp-value').previousSibling.textContent = "Temperature: ";
        document.getElementById('humidity-value').previousSibling.textContent = "Humidity: ";
        document.getElementById('heat-index-value').previousSibling.textContent = "Heat Index: ";
        document.getElementById('timestamp-value').previousSibling.textContent = "Timestamp: ";
        document.getElementById('message-box').placeholder = "Write a message...";
        document.getElementById('send-message-btn').textContent = "Send Message";
    }
}

// Toggle Login/Logout icon
function toggleLoginLogout() {
    isLoggedIn = !isLoggedIn;
    const loginIcon = document.getElementById('login-icon');
    loginIcon.textContent = isLoggedIn ? '🔓' : '🔑';
    loginIcon.title = isLoggedIn ? 'Logout' : 'Login';
}

// Event listeners
document.getElementById('translate-btn').addEventListener('click', translatePage);
document.getElementById('login-icon').addEventListener('click', toggleLoginLogout);

// Info Icon Click (optional behavior)
document.getElementById('info-icon').addEventListener('click', () => {
    window.open('https://pmkisan.gov.in/', '_blank');
});

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then((registration) => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch((error) => {
                console.error('Service Worker registration failed:', error);
            });
    });
}
