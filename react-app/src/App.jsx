import './App.css'
import { TabNav } from "@radix-ui/themes";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from './Home';
import UiElements from './UiElements';
import Params from './Params';
import MyForm from './MyForm';

function App() {
  const location = useLocation();   // get location object
  const pathname = location.pathname;  // current URL path

  return (
    <>
      <div>
        {/* Navigation */}
        <TabNav.Root>
          <TabNav.Link asChild active={pathname === "/"}>
            <Link to="/">Home</Link>
          </TabNav.Link>
          <TabNav.Link asChild active={pathname === "/uielements"}>
            <Link to="/uielements">UI Elements</Link>
          </TabNav.Link>
          <TabNav.Link asChild active={pathname === "/params"}>
            <Link to="/params">URL Parameters</Link>
          </TabNav.Link>
          <TabNav.Link asChild active={pathname === "/myform"}>
            <Link to="/myform">My Form</Link>
          </TabNav.Link>
        </TabNav.Root>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/uielements" element={<UiElements />} />
          <Route path="/params" element={<Params />} />
          <Route path="/myform" element={<MyForm />} />
        </Routes>
      </div>
    </>
  )
}

export default App
