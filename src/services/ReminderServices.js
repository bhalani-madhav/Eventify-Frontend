import axios from "axios";
const fetchReminders = async (
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
  } catch (err) {
    setError(err.message || "Failed to fetch products");
  } finally {
    setLoading(false);
  }
};

export default fetchReminders;
