import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HashRouter as Router ,Route, Routes} from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <Router>
    <App />
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </Router>,
)