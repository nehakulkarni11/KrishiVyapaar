import { getHumanReadableDate } from "../utils.js";
import { getMangoTransportData } from "./firebase.js";

let mangoTransportData = [];
const REFRESH_TIME = 10; // in seconds

const updateRealTimeStatus = (
    data = mangoTransportData,
    showRefresh = true
) => {
    const timestampElem = document.getElementById("timestamp-value");
    const tempElem = document.getElementById("temp-value");
    const humidityElem = document.getElementById("humidity-value");
    const heatIndexElem = document.getElementById("heat-index-value");
    const loader = document.getElementById("loader");
    const refreshIndicator = document.getElementById("refresh-indicator");
    const statusContent = document.getElementById("status-content");

    if (data.length === 0) {
        timestampElem.textContent = "No data available";
        tempElem.textContent = "--";
        humidityElem.textContent = "--";
        heatIndexElem.textContent = "--";
    } else {
        if (showRefresh) {
            refreshIndicator.style.display = "block";
            loader.style.display = "block";
            statusContent.style.display = "none";
            setTimeout(() => {
                refreshIndicator.style.display = "none";
                loader.style.display = "none";
                statusContent.style.display = "block";
            }, 1000);
        }

        // Randomly select a data item
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomData = data[randomIndex];

        timestampElem.textContent =
            getHumanReadableDate(randomData.Timestamp) ||
            getHumanReadableDate(randomData.timestamp) ||
            "N/A";
        tempElem.textContent =
            randomData["Temperature °C"] || randomData.temperature || "--";
        humidityElem.textContent =
            randomData["Humidity %"] || randomData.humidity || "--";
        heatIndexElem.textContent =
            randomData["Heat Index"] || randomData.heat_index || "--";
    }
};

export const initialStatus = async () => {
    const loader = document.getElementById("loader");
    const statusContent = document.getElementById("status-content");

    loader.style.display = "block";
    statusContent.style.display = "none";

    try {
        mangoTransportData = await getMangoTransportData();

        loader.style.display = "none";
        statusContent.style.display = "block";

        updateRealTimeStatus(mangoTransportData, false);
        setInterval(
            () => updateRealTimeStatus(mangoTransportData),
            REFRESH_TIME * 1000
        );
    } catch (error) {
        console.error("Error fetching initial data:", error);

        loader.style.display = "none";
        statusContent.style.display = "block";
        document.getElementById("timestamp-value").textContent =
            "Error loading data";
    }
};
