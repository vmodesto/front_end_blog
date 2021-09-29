import '../styles/App.css';
import { GlobalStyle } from '../styles/global';
import { Login } from './Auth/Login';
import { Register } from './Auth/Register';
import { Header } from './Header/Header';
import { Home } from './Home/Home';
import Markdown from './Markdown';

function App() {

  return (
    <div className="App">
      {/* <Header />
      <Home /> */}
      {/* <Register /> */}
      <GlobalStyle />
    </div>
  );
}

export default App;
