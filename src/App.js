import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import { Provider, useSelector } from 'react-redux';
import { store } from './store/Store';
import Dashboard from './components/Dashboard';

function App() {
  const state = useSelector(state => state.Login);

  return (
    <>
      <Navbar />
      {!state.isLoggedin ? <Login /> :
        <Dashboard />
      }
    </>
  );
}

export default App;
