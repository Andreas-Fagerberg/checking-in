"use client";
import "./page.css";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  useEffect(() => {
    setNewName("");
    setNewEmail("");
  }, []);
  const checkIn = async () => {
    const name = newName.trim();
    const email = newEmail.trim();
    if (!name || !email) {
      setMessage("Name and email is required");
      setMessageType("checkin-error-message");
      return;
    }

    const response = await fetch("https://checking-in-funcs-dncrc3c4a4bhe9fm.swedencentral-01.azurewebsites.net/api/CreateUser?", {
      method: "POST",
      body: JSON.stringify({
        Name: name,
        Email: email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    if (response.ok) {
      setMessage("User succesfully checked in");
      setMessageType("checkin-success-message");
      setNewEmail("");
      setNewName("");
    } else {
      const data = await response.json();
      setMessage(data.error);
      setMessageType("checkin-error-message");
    }
  };

  return (
    <div className="checkin-main-container">
      <div className="checkin-form-container">
        <form className="checkin-form" action={checkIn}>
          <input type="text" name="name" value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="Enter name here..." />
          <input type="email" name="email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} placeholder="Enter email here..." />
          <button type="submit">Check in</button>
          <p className={messageType}>{message}</p>
        </form>
      </div>
    </div>
  );
}
