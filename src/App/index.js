import React from 'react';
import { Header } from '../Header';
import { Main } from '../Main';
import { Footer } from '../Footer';
import './App.css';
import { PracticaProvider } from '../Context';

function App() {

  return (
    <PracticaProvider>
      <Header />
      <Main />
      <Footer />
    </PracticaProvider>
  );
}

export default App;
