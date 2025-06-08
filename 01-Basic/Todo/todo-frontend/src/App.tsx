import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import TodoPage from "./Pages/TodoPage";
import Navbar from "./Components/Navbar";
import Page404 from "./Pages/Page404";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/my-todos" element={<TodoPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
