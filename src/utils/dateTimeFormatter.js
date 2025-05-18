export default function dateTimeFormatter(utcString) {
  let date = new Date(utcString);

  // Get the local timezone offset in minutes and apply it
  let localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);

  // Format for datetime-local (ISO string without timezone)
  return localDate.toISOString().slice(0, 16);
}
