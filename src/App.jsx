import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
// import Login from "./Pages/Login";
// import Dashboard from "./Pages/Dashboard";
// import { Provider } from "react-redux";
// import { Store } from "./store";

function App() {
  return (
    <BrowserRouter>
      {/* <Provider store={Store}> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
      {/* </Provider> */}
    </BrowserRouter>
  );
}

export default App;
