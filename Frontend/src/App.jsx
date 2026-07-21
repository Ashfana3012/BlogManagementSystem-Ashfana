import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AddBlog from "./pages/AddBlog";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-blog" element={<AddBlog />} />
    </Routes>
  );
}

export default App;