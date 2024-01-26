import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import VideoUploadPage from "./pages/VideoUploadPage/VideoUploadPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import HomePage from "./pages/HomePage/HomePage";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/videos/:videoId" element={<HomePage />} />
            <Route path="/videouploadpage" element={<VideoUploadPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}
