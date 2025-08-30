'use client'
import React, { useState } from "react";
export default async function Home() {
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");

  const checkIn = () => {
    const name = newName.trim();
    const email = newEmail.trim();
    // if (name && email) {
    //   fetch(
    //     "", // Add api url here later.
    //     {
    //       method: "POST",
    //       body: JSON.stringify({
    //         name,
    //         email,
    //       }),
    //       headers: {
    //         "Content-type": "application/json; charset=UTF-8",
    //       },
    //     }
    //   );
    // }
    if (name && email)
    {
      alert("success!")
    }
  };
  return (
    <div>
      <form action={checkIn}>
        <input type="text" name="name" value={newName} onChange={e => setNewName(e.target.value)}
        placeholder="Enter name here..." />
        <input type="text" name="email" value={newEmail} onChange={e => setNewEmail(e.target.value)}
        placeholder="Enter email here..." />
        <button type="submit">Check in</button>
      </form>
    </div>
  );
}
