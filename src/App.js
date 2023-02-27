import logo from './logo.svg';
import SideBar from './components/SideBar/SideBar';
import MainPage from './components/MainPage/MainPage';
import About from './components/About/About';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles/App.css';

function App() {
  return (
    <div>
      <SideBar />
      <MainPage />
      <About />
    </div>
  );
}

export default App;
