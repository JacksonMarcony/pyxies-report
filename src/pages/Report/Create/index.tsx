import React from "react";
import profileImg from "../../../assets/img/profile.jpg";

import "./styles.scss";

export default function CreateReport() {
  return (
    <section id="register-report-container">
      <div className="start-pub">
        <img src={profileImg} alt="" />
        <button>Começar publicação</button>
      </div>
    </section>
  );
}
