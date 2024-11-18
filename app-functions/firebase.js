import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
import {
    getFirestore,
    collection,
    getDocs,
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";
// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyDEhC0-wMW5ql6gQlfmgkDq7OfLyNEdFjY",
    authDomain: "supply-chain-in-agriculture.firebaseapp.com",
    projectId: "supply-chain-in-agriculture",
    storageBucket: "supply-chain-in-agriculture.firebasestorage.app",
    messagingSenderId: "466805298253",
    appId: "1:466805298253:web:309165d8c66377a22e3804",
    measurementId: "G-S4MQ6VH8W9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export const getMangoTransportData = async () => {
    const mangoTransportData = collection(db, "mango_transport_data");

    try {
        const snapshot = await getDocs(mangoTransportData);

        const data = [];
        let i = 1;
        snapshot.forEach((doc) => {
            // console.log(i++, doc.id, ": ", doc.data());
            data.push({ id: doc.id, ...doc.data() });
        });

        return data;
    } catch (error) {
        console.error("Error reading document: ", error);
        return [];
    }
};
