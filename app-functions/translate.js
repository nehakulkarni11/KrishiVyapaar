let isHindi = false;

// Translation object (English to Hindi)
const translations = {
    "Krishi Vyapaar": "कृषी व्यापार",
    "Live Transport Dashboard": "वास्तविक परिवहन डैशबोर्ड",
    "Real-Time Status": "वास्तविक समय की स्थिति",
    Temperature: "तापमान",
    Humidity: "नमी",
    "Heat Index": "हीट इंडेक्स",
    Timestamp: "समय टिकट",
    Alerts: "चेतावनी",
    "No Alerts": "कोई चेतावनी नहीं",
    "High Temperature! Take action!": "उच्च तापमान! कार्रवाई करें!",
    "Low Humidity! Take action!": "कम नमी! कार्रवाई करें!",
    "Contact Transporter": "परिवाहक से संवाद करें",
    "Write a message...": "एक संदेश लिखें...",
    "Send Message": "संदेश भेजें",
    "Message Sent!": "संदेश भेजा गया!",
    Refreshing: "लोड हो रहा है",
    "PM schemes": "पीएम योजनाएं",
    WhatsApp: "📱 व्हाट्सएप",
    Call: "📞 कॉल करे",
    "Request Location": "📍 स्थान पूछें",
};

// Function to translate page content
export function translatePage() {
    isHindi = !isHindi;

    document.getElementById("translate-btn").textContent = isHindi
        ? "English"
        : "हिंदी";

    if (isHindi) {
        document.querySelector(".logo").textContent =
            translations["Krishi Vyapaar"];
        document.querySelector(".dashboard h1").textContent =
            translations["Live Transport Dashboard"];
        document.querySelector(".status-card h2").textContent =
            translations["Real-Time Status"];
        document.querySelector(".alert-card h2").textContent =
            translations["Alerts"];
        document.querySelector("#alert-message").textContent =
            translations["No Alerts"];
        document.querySelector(".communication-card h2").textContent =
            translations["Contact Transporter"];
        document.getElementById("temperature").firstChild.textContent =
            translations["Temperature"] + ": ";
        document.getElementById("humidity").firstChild.textContent =
            translations["Humidity"] + ": ";
        document.getElementById("heat-index").firstChild.textContent =
            translations["Heat Index"] + ": ";
        document.getElementById("timestamp").firstChild.textContent =
            translations["Timestamp"] + ": ";
        document.getElementById("refresh-indicator").textContent =
            translations["Refreshing"] + "...";
        document.getElementById("info-icon").innerText =
            translations["PM schemes"];
        document.getElementById("whatsapp").innerText =
            translations["WhatsApp"];
        document.getElementById("call").innerText = translations["Call"];
        document.getElementById("location").innerText =
            translations["Request Location"];
    } else {
        document.querySelector(".logo").textContent = "Krishi Vyapaar";
        document.querySelector(".dashboard h1").textContent =
            "Live Transport Dashboard";
        document.querySelector(".status-card h2").textContent =
            "Real-Time Status";
        document.querySelector(".alert-card h2").textContent = "Alerts";
        document.querySelector("#alert-message").textContent = "No Alerts";
        document.querySelector(".communication-card h2").textContent =
            "Contact Transporter";
        document.getElementById("temperature").firstChild.textContent =
            "Temperature: ";
        document.getElementById("humidity").firstChild.textContent =
            "Humidity: ";
        document.getElementById("heat-index").firstChild.textContent =
            "Heat Index: ";
        document.getElementById("timestamp").firstChild.textContent =
            "Timestamp: ";
        document.getElementById("refresh-indicator").textContent =
            "Refreshing...";
        document.getElementById("info-icon").innerText = "PM schemes";
        document.getElementById("whatsapp").innerText = "📱 WhatsApp";
        document.getElementById("call").innerText = "📞 Call";
        document.getElementById("location").innerText = "📍 Request Location";
    }
}
