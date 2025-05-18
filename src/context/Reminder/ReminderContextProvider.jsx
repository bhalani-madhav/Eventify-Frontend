import React, { useState } from "react";
import ReminderContext from "./ReminderContext";

export default function ReminderContextProvider({ children }) {
  const [showDelete, setShowDelete] = useState(false);
  const [selectedReminder, setSelectedReminder] = useState(null); // Track which reminder to delete

  // Handler to close modal
  const handleCloseModal = () => {
    setShowDelete(false);
    setSelectedReminder(null);
  };
  return (
    <ReminderContext.Provider
      value={{
        handleCloseModal,
        showDelete,
        setShowDelete,
        selectedReminder,
        setSelectedReminder,
      }}
    >
      {children}
    </ReminderContext.Provider>
  );
}
