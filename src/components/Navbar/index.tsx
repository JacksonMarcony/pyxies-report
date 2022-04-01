import React from "react";
import logoImg from '../../assets/img/logo.svg';

import './styles.scss';

export function Navbar() {
    return (
        <header id="page-header" className="box-shadow">
            <img draggable="false" src={logoImg} width="280" alt="" />
        </header>
    )
}