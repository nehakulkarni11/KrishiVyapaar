const STATIC_CACHE = "static-cache-v1"; // Cache for static files (with versioning)
const DYNAMIC_CACHE = "dynamic-cache-v1"; // Cache for real-time data

const STATIC_FILES = [
    "/", // Root URL
    "/index.html", // HTML file
    "/styles.css?v=1", // CSS file with versioning
    "/app.js?v=1", // JS file with versioning
    "/images/logo.png", // Logo or other static assets
];

// Install Event (Cache Static Files with Cache Busting)
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(STATIC_CACHE).then((cache) => {
            console.log("Precaching static files");
            return cache.addAll(STATIC_FILES);
        })
    );
});

// Activate Event (Clean up old caches)
self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(
                keyList.map((key) => {
                    if (key !== STATIC_CACHE && key !== DYNAMIC_CACHE) {
                        console.log("Removing old cache:", key);
                        return caches.delete(key);
                    }
                })
            );
        })
    );
    return self.clients.claim();
});

// Fetch Event (Hybrid Strategy: Cache Static + Network-First for Dynamic)
self.addEventListener("fetch", (event) => {
    const url = event.request.url;

    // Handle static files with Cache Busting
    if (STATIC_FILES.includes(new URL(url).pathname)) {
        event.respondWith(
            caches.match(event.request).then((cachedResponse) => {
                return cachedResponse || fetch(event.request);
            })
        );
    } else {
        // Handle real-time data (Network-First Strategy)
        event.respondWith(
            fetch(event.request)
                .then((response) => {
                    return caches.open(DYNAMIC_CACHE).then((cache) => {
                        cache.put(event.request, response.clone());
                        return response;
                    });
                })
                .catch(() => {
                    // Return cached data if offline
                    return caches.match(event.request);
                })
        );
    }
});
