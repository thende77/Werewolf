var CACHE_NAME = "werewolf-pwa-v2";

var APP_FILES = [
    "./",
    "./index.html",
    "./style.css",
    "./roles.js",
    "./app.js",
    "./manifest.json",
    "./werewolf.jpg"
];

self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll(APP_FILES);
        })
    );

    self.skipWaiting();
});

self.addEventListener("activate", function (event) {
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.map(function (cacheName) {
                    if (
                        cacheName.indexOf("werewolf-pwa-") === 0 &&
                        cacheName !== CACHE_NAME
                    ) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );

    self.clients.claim();
});

self.addEventListener("fetch", function (event) {
    if (event.request.method !== "GET") {
        return;
    }

    var requestURL = new URL(event.request.url);

    if (requestURL.origin !== self.location.origin) {
        return;
    }

    if (event.request.mode === "navigate") {
        event.respondWith(
            fetch(event.request).then(function (response) {
                var copy = response.clone();

                caches.open(CACHE_NAME).then(function (cache) {
                    cache.put("./index.html", copy);
                });

                return response;
            }).catch(function () {
                return caches.match("./index.html");
            })
        );

        return;
    }

    event.respondWith(
        caches.match(event.request).then(function (cachedResponse) {
            if (cachedResponse) {
                return cachedResponse;
            }

            return fetch(event.request).then(function (response) {
                if (response && response.ok) {
                    var copy = response.clone();

                    caches.open(CACHE_NAME).then(function (cache) {
                        cache.put(event.request, copy);
                    });
                }

                return response;
            });
        })
    );
});
