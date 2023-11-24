"use client";
import styles from "./navbar.module.css";
import { useContext } from "react";
import AppContext from "../../context/AppContext";
import Link from "next/link";
import Image from "next/image";
import userIcon from "./icon.png";
import logo from "./aviogo_logo.png";
const NavBar = () => {
  const { state, setState } = useContext(AppContext);
  console.log(state);
  return (
    <div className={`${styles.container} pd-hz`}>
      <Link href="/">
        <Image
          alt="AVIOGO LOGO"
          src={logo}
          className={styles.logo}
          height={50}
          width={null}
        />
      </Link>

      <div>
        {!state.isLoggedIn ? (
          <Link href="/login">Log in</Link>
        ) : (
          <div className={styles.toggle}>
            <Link href="/userprofile">
              <Image
                alt="user profile icon"
                src={userIcon}
                width={30}
                height={30}
              />
            </Link>
            <Link href="/">Log out</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
