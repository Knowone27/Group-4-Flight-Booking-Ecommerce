"use client"
import React from "react";
import styles from "./login.module.css";
import { useRouter } from 'next/navigation'

const Page = () => {
  const router = useRouter();
  const handleLogin = () => {
   ///authenticate user
   ////redirect to dashboard
    router.push("/dashboard");
  }
  return (
    <div className={styles.background}>
      <div className={styles.whiteBox}>
        <div className={styles.boxheader}>
          <h3 className={styles.headerContent}>Flight Booking</h3>
          <div className={styles.logobrand}>
            <img src="/images/logo.png" alt="Logo"></img>
          </div>
        </div>
        <h3>Login</h3>
        <div className={styles.placeholder}>
          <div className={styles.usernameInput}>
            <p>Username/Email</p>
            <input
              type="text"
              className={styles.inputBox}
              id="email"
              required
            />
          </div>
          <div className={styles.passwordInput}>
            <p>Password</p>
            <input
              type="password"
              className={styles.inputBox}
              id="password"
              required
            />
          </div>
          <div className={styles.loginButton}>
            <button type="button" onClick={()=> handleLogin()}>Login</button>
          </div>

          <a href="/create-account" className={styles.createAccountLink}>
            Create account
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page;
