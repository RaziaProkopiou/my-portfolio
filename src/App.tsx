import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CaseStudyPage from "./pages/CaseStudyPage";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/case-studies/:id" element={<CaseStudyPage />} />
      </Route>
    </Routes>
  );
}

export default App;
