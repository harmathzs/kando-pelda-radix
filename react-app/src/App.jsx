import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import UiElements from './UiElements';
import MyForm from './MyForm';

function App() {
  return (
    <>
      <div>
        {/* Navigation */}
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/uielements">UiElements</Link></li>
            <li><Link to="/myform">MyForm</Link></li>
          </ul>
        </nav>
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/uielements" element={<UiElements />} />
          <Route path="/myform" element={<MyForm />} />
        </Routes>
      </div>
    </>
  )
}

export default App
