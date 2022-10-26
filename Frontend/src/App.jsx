import Login from "./pages/Login";
//import Register from "./pages/Register"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const App = () =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                    <Route path="login" element={<Login />} />
                    
                    <Route path="products">
                        
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default App