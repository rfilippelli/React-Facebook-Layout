import React from "react";
import Logo from "../assets/Face.png";

function Header() {
  return (
    <header>
      <nav>
        <img src={Logo}></img>
        <span>Feed de Notícias</span>
        <div>
          <span>Meu Perfil</span>
          <i className="material-icons">account_circle</i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
