import React, { useEffect, useState } from "react";
import UserContext from "./UserContext";
import axios from "axios";

export default function UserContextProvider({ children }) {
  const [username, setUsername] = useState("");

  useEffect(() => {
    async function verify() {
      const response = await axios.get("http://localhost:3000/authCheck", {
        withCredentials: true,
      });
      if (response.status === 200) {
        setUsername(
          response.data.user.firstName + " " + response.data.user.lastName
        );
      }
    }
    verify();
  });
  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
}
