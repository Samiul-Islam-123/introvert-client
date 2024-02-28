import logo from './logo.svg';
import './App.css';
import Login from './Pages/Public/Auth/Login/Login';
import RoutesController from './Controller/RoutesController';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <>
     <RoutesController/>
     <CssBaseline />
    </>
  );
}

export default App;
