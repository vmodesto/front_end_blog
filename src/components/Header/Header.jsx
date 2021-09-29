import React, { useState } from 'react';
import './styles/Header.css'
import Menu from './Menu'


export function Header() {

  const [menuActive, setMenuActive] = useState(false)

  const showMenu = () => {
    if(menuActive === false)
    setMenuActive(true);
    else
      setMenuActive(false)
  }

  return (
  <>
    <header className="header">
      <div className="button-menu-container">
        <button className="button-menu" onClick={showMenu}></button>
      </div>
      <div className="logo">
        <div>Blog</div>
      </div>
    </header>
    {menuActive === true  && <Menu/>}
  </>
  );
}