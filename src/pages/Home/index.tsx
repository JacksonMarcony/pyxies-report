import React from "react";
import { CardReport } from "../../components/CardReport";
import { Navbar } from "../../components/Navbar";
import CreateReport from "../Report/Create";

import "./styles.scss";

export default function Home() {
  return (
    <div style={{ position: "relative" }}>
      <h1>Home</h1>
      <Navbar />

      <section className="start-pub-container">
        <CreateReport />
      </section>
      <main className="feed-container">
        <CardReport />
        <CardReport />
        <CardReport />
        <CardReport />
        <CardReport />
        <CardReport />
        <CardReport />
        <CardReport />
      </main>
    </div>
  );
}
