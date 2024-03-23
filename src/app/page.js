'use client';
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);
  const [email, setEmail] = useState(""); // State to hold the email value

  const handleClick = async () => {
    const response = await fetch("/api/leads");
    setData(await response.json());
  };

  const handleClickTwo = async () => {
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }), // Use the email state value here
    });
    setData(await response.json());
  };

  return (
    <main className={styles.main}>
      <h1>A Serverless Node.js API</h1>
      <button onClick={handleClick} className="btn">Fetch Data</button>
      {/* Displaying data conditionally */}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update email state on change
          placeholder="Enter email"
          className="emailInput" // Add your class for styling if needed
        />
        <button onClick={handleClickTwo} className="btn">Submit Email</button>
      </div>
    </main>
  );
}
