import axios from "axios";
import dateTimeFormatter from "../utils/dateTimeFormatter";
import scheduleReminder from "../utils/scheduleReminder";

//function to handle api call to fetch all reminders
export const fetchReminders = async (
  setReminders,
  setLoading,
  setError,
  page,
  setMaxPage
) => {
  try {
    setLoading(true);
    const response = await axios.get(
      `http://localhost:3000/reminder?page=${page}`,
      {
        withCredentials: true,
      }
    );

    const fetchedReminders = Array.isArray(response.data.reminders)
      ? response.data.reminders
      : response.data.data.reminders || [];
    setReminders(fetchedReminders);
    setMaxPage(response.data.maxPage);
    fetchedReminders.forEach((reminder) => {
      scheduleReminder(reminder.date, reminder.title);
    });
   
  } catch (err) {
    setError(err.message || "Failed to fetch products");
  } finally {
    setLoading(false);
  }
};

//function to handle api call to fetch single reminder by ID
export const fetchReminderById = async (
  setReminder,
  setLoading,
  setError,
  reminderId
) => {
  try {
    setLoading(true);
    const response = await axios.get(
      `http://localhost:3000/reminder/${reminderId}`,
      { withCredentials: true }
    );
    if (response.data && typeof response.data.reminder === "object") {
      const reminder = response.data.reminder;
      const formattedReminder = {
        ...reminder,
        date: reminder.date ? dateTimeFormatter(new Date(reminder.date)) : "",
      };
      setReminder(formattedReminder);
      console.log(response.data);
    } else {
      throw new Error("Invalid response data");
    }
  } catch (err) {
    setError(err.message || "Failed to fetch reminder");
  } finally {
    setLoading(false);
  }
};
