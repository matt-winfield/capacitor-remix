import "./App.css";
import { Routes, Route } from "react-router-dom";
import { TestPage } from "./pages/test";
import { HomePage } from "./pages/home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test-page" element={<TestPage />} />
      </Routes>
    </>
  );
}

export default App;
