

export default async function registerServiceWorker() {
    if (!("serviceWorker" in navigator)) {
        console.error("Service workers are not supported in this browser.");
        return;
    }
    if (navigator.serviceWorker.controller) {
        console.log("Service worker is already registered.");
        return;
    }
    try {
        const registration = await navigator.serviceWorker.register('../../serviceWorker.js');
        console.log("Service worker registered successfully:", registration);
        return registration;
    } catch (error) {
        console.error("Service worker registration failed:", error);
    }
}
