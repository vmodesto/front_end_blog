import React from 'react';
import { Link } from 'react-router-dom';
import { MenuContainer, MenuItem } from './styles/style';


const Menu = () => {
  return (
  <>
    <MenuContainer>
      <Link to="/" className="create-account">
        <MenuItem className="menu-item">Home</MenuItem>
      </Link>
      <Link to="/new_article" className="create-account">
        <MenuItem className="menu-item">New article</MenuItem>
      </Link>
      <Link to="/profile" className="create-account">
        <MenuItem className="menu-item">Perfil</MenuItem>
      </Link>
      
    </MenuContainer>
  </>
  );
}

export default Menu;