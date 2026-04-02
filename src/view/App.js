import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./example/MyComponent";

import Nav from "./Nav/Nav";
import Home from "./example/Home";
import ListUser from "./Users/ListUser";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />

          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/todo" element={<MyComponent />} />

            <Route path="/about" element={<Home />} />

            <Route path="/user" element={<ListUser />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
