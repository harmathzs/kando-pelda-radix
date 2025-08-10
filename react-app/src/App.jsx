import './App.css'
import { TabNav } from "@radix-ui/themes";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from './Home';
import UiElements from './UiElements';
import Params from './Params';
import MyForm from './MyForm';
import SpecialForms from './SpecialForms';
import ComponentTypes from './ComponentTypes';
import ChildrenPage from './ChildrenPage';

function App() {
  const location = useLocation();   // get location object
  const pathname = location.pathname;  // current URL path

  return (
    <>
      <div style={{maxWidth: '1024px', margin: '0 auto', overflowX: 'hidden'}}>
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
          <TabNav.Link asChild active={pathname === "/specialforms"}>
            <Link to="/specialforms">Special Forms</Link>
          </TabNav.Link>
          <TabNav.Link asChild active={pathname === "/componenttypes"}>
            <Link to="/componenttypes">Function component</Link>
          </TabNav.Link>
          <TabNav.Link asChild active={pathname === "/children"}>
            <Link to="/children">Children</Link>
          </TabNav.Link>
        </TabNav.Root>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/uielements" element={<UiElements />} />
          <Route path="/params" element={<Params />} />
          <Route path="/myform" element={<MyForm />} />
          <Route path="/specialforms" element={<SpecialForms />} />
          <Route path="/componenttypes" element={<ComponentTypes />} />
          <Route path="/children" element={<ChildrenPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
