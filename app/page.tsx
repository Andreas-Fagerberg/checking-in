"use client";
import './page.css';

import React, { useState } from "react";
export default function Home() {
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [error, setError] = useState("");

  const checkIn = async () => {
    const name = newName.trim();
    const email = newEmail.trim();
    if (name && email) {
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

      if (!response.ok)
      {
        const data = await response.json();
        setError(data.error);
      }
      
      
    }
  };
  return (
    <div className="checkin-main-container">
      <div className="checkin-form-container">
        <form className="checkin-form"action={checkIn}>
          <input type="text" name="name" value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="Enter name here..." />
          <input type="text" name="email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} placeholder="Enter email here..." />
          <button type="submit">Check in</button>
        </form>
        <p className="checkin-error-text">
        {error}
      </p>
      </div>
      
    </div>
  );
}
