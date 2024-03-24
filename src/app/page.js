"use client";
import styles from "./page.module.css";
import { useState } from "react";
import Card from "../../components/Card";
import ConsoleText from "../../components/ConsoleText";

export default function Home() {
  const [data, setData] = useState(null);
  const [email, setEmail] = useState(""); // State to hold the email value
  const [isDataFetched, setIsDataFetched] = useState(false); // State to track if data is fetched

  const handleClick = async () => {
    const response = await fetch("/api/leads");
    setData(await response.json());
    setIsDataFetched(true); // Set to true once data is fetched
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
       <ConsoleText 
        words={['Serverless Node.js API.', 'Using Neon', 'Made with AWS Lambda']} 
        colors={['tomato', 'rebeccapurple', 'lightblue']}
      />
      <button onClick={handleClick} className={styles.btn}>
        Fetch Data
      </button>
      {isDataFetched && <Card data={data} />}{" "}
      <div className={styles.x}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update email state on change
          placeholder="Enter email"
          className={styles.emailInput} // Add your class for styling if needed
        />
        <button onClick={handleClickTwo} className={styles.btn}>
          Submit Email
        </button>
      </div>
      <p className={styles.c}>&copy; Adnan Haider</p>
    </main>
  );
}
