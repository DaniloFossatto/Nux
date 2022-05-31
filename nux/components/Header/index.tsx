import React from 'react';


import { Container, Nav, Logo, LogoIcon, UserIcon } from './styles';

export default function Header(){
  return <Container>
  <Logo><a href='http://localhost:3000'><LogoIcon/></a></Logo>
  <Nav>
      <a href='#sobre'>Sobre Nós</a>
      <a href='#tech'>Nossas Tecnologias</a>
      <a href='#tech'>Why choose us?</a> 
      <UserIcon/>
      <button>Seja Nux</button> 
  </Nav>
  
</Container>;;
}

