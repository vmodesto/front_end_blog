import React, { useState } from 'react';
import { ButtonMenu, ButtonMenuContainer, Container, Logo } from './styles/style';
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
    <Container>
      <ButtonMenuContainer>
        <ButtonMenu onClick={showMenu}></ButtonMenu>
      </ButtonMenuContainer>
      <Logo>
        Blog
      </Logo>
    </Container>
    {menuActive === true  && <Menu/>}
  </>
  );
}