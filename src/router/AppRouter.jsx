import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
/*import Projects from "../pages/Projects";
import CaseStudy from "../pages/CaseStudy"; */

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />

               {/* <Route path="/projects" element={<projects />} /> 

                <Route path="/projects/:slug" element={<CaseStudy />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;