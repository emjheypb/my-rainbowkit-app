import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";

const Index = () => (
  <>
    <Navbar />
    <main className={styles.main}>
      <ConnectButton />
    </main>
  </>
);

export default Index;
