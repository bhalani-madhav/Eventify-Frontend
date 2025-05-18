import React, { useState } from "react";
import ReminderContext from "./ReminderContext";

export default function ReminderContextProvider({ children }) {
  const [showDelete, setShowDelete] = useState(false);
  const [selectedReminder, setSelectedReminder] = useState(null); // Track which reminder to delete

  const [showCompleted, setShowCompleted] = useState(false);

  const handleShowCompleted = () => setShowCompleted(true);
  const handleShowAll = () => setShowCompleted(false);

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
        showCompleted,
        handleShowAll,
        handleShowCompleted
      }}
    >
      {children}
    </ReminderContext.Provider>
  );
}
