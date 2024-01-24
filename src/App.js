import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import VideoUploadPage from "./pages/VideoUploadPage/VideoUploadPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

export function App() {
  return (
    <BrowserRouter>
      <Header className="app__header" />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/videoplayerpage" element={<Navigate to="/" />} />
          <Route path="/videouploadpage" element={<VideoUploadPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
