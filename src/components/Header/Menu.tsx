import React from 'react';
import { Link } from 'react-router-dom';
import { MenuContainer, MenuItem } from './styles/style';
import './styles/styles.css'

const Menu = () => {
  return (
  <>
    <MenuContainer>
      <Link to="/" className="navigate">
        <MenuItem className="menu-item">Home</MenuItem>
      </Link>
      <Link to="/new_article" className="navigate">
        <MenuItem className="menu-item">New article</MenuItem>
      </Link>
      <Link to="/profile" className="navigate">
        <MenuItem className="menu-item">Perfil</MenuItem>
      </Link>
    </MenuContainer>
  </>
  );
}

export default Menu;