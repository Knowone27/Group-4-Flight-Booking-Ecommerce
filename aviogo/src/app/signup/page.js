"use client";
import styles from "./signup.module.css";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import UserPool from "../UserPool";

export default function Signup() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) {
        console.error(err);
      }
      console.log(data);
      setSuccessMessage(
        "Created account successfully. Please verify your email"
      );
    });
  };

  // Handle "Back to Signin" button click
  const handleBackToSignin = () => {
    router.push("/");
  };

  return (
    /////////////////////////////
    /////////Signup Page//////////
    /////////////////////////////
    <div className={styles.background}>
      <div className={styles.whiteBox}>
        <div className={styles.boxheader}>
          <h3 className={styles.headerContent}>Flight Booking</h3>
          <div className={styles.logobrand}>
            <img src="/images/logo.png" alt="Logo"></img>
          </div>
        </div>
        <h3>Sign up</h3>

        <form className={styles.placeholder} onSubmit={onSubmit}>
          <div className={styles.emailInput}>
            <label htmlFor="email">Email</label>
            <input
              className={styles.inputBox}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          {/* <div className={styles.nameInput}>
            <label>Full Name</label>
            <input
              className={styles.inputBox}
              value={fullname}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div> */}
          <div className={styles.passwordInput}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className={styles.inputBox}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
          <div className={styles.signupButton}>
            <button type="submit">Sign up</button>
          </div>

          <a onClick={handleBackToSignin} className={styles.backToSigninLink}>
            Back to Sign-in
          </a>
          {/* Success message*/}
          {successMessage && (
            <div className={styles.successMessage}>{successMessage}</div>
          )}
        </form>
      </div>
    </div>
  );
}
