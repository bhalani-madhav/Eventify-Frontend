import React, { useEffect, useState } from "react";
import UserContext from "./UserContext";
import axios from "axios";

export default function UserContextProvider({ children }) {
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function verify() {
      try {
        const response = await axios.get("http://localhost:3000/authCheck", {
          withCredentials: true,
        });
        if (response.status === 200) {
          setUsername(
            response.data.user.firstName + " " + response.data.user.lastName
          );
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        setIsLoggedIn(false);
      } finally {
        setLoading(false);
      }
    }
    verify();
  }, []);

  if (loading) return null;

  return (
    <UserContext.Provider
      value={{ username, setUsername, setIsLoggedIn, isLoggedIn }}
    >
      {children}
    </UserContext.Provider>
  );  
}
