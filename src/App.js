import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from "./components/Header";
import MyVideo from "./components/MyVideo";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import NotFound from "./components/NotFound";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/myvideos" element={<MyVideo />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
