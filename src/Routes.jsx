import Home from "./pages/Home";
import About from "./pages/About";
import {Routes ,Route} from "react-router-dom";
export default function AppRoutes({ mode, onToggleMode }) {
    return (
        <Routes>
            <Route path="/" element={<Home mode={mode} onToggleMode={onToggleMode} />} />
            <Route path="/about" element={<About mode={mode} onToggleMode={onToggleMode} />} />
        </Routes>
    );
}