import { toast } from "react-toastify";
export default async function notifyMe(notificationText = "Thank you for enabling notifications") {
    if (!("Notification" in window)) {
        // Check if the browser supports notifications
        toast.error("This browser does not support notifications", {
          hideProgressBar: false,
          autoClose: 2000,
        });
      } else if (Notification.permission === "granted") {
        // Check whether notification permissions have already been granted;
        // if so, create a notification
        const notification = new Notification(notificationText);
        // …
      } else if (Notification.permission !== "denied") {
        // We need to ask the user for permission
        await Notification.requestPermission().then((permission) => {
          // If the user accepts, let's create a notification
          const notification = new Notification(notificationText);
        });
      }
}