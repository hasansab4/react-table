import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'

export default function App() {

  return (
    <Routes>
          <Route path="/" element={<Home />} />  
          <Route path="/react-table" element={<Home />} /> 
    </Routes>
  );
}
