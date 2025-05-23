export default function scheduleReminder(reminderTime, message) {
    const currentTime = new Date().getTime();
    const reminderTimestamp = new Date(reminderTime).getTime();
  
    const timeDifference = reminderTimestamp - currentTime;
  
    if (timeDifference > 0) {
      setTimeout(() => {
        // Display the notification
        if (Notification.permission === "granted") {
          new Notification("Reminder", {
            body: message,
            
          });
        }
      }, timeDifference);
      console.log("Reminder scheduled for:", reminderTime);
    } else {
      console.log("Reminder time is in the past. Cannot schedule.");
    }
  }