import React from 'react';

import { Header } from '../Header/Header';
import { Posts } from '../Posts';
import { Container } from './styles/styles';

export function Home() {
  return (
      <>
      <Header />
      <Container>
          <h1 className="title">Posts em destaque</h1>
          <Posts/>
      </Container>
      </>
  );
}