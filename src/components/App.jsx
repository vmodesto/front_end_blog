import Routes from '../routes';
import VLibras from '@djpfs/react-vlibras-typescript';

import '../styles/App.css';
import { GlobalStyle } from '../styles/global';
import { makeServer } from '../services/mirage';

makeServer()

function App() {

  return (
    <div className="App">
      <VLibras />
      {/* <Header />
      <Home /> */}
      <Routes />
      <GlobalStyle />
    </div>
  );
}

export default App;
