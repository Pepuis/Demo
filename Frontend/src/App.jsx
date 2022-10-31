import Login from "./pages/Login";
//import Register from "./pages/Register"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
const App = () =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route path="home" element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register/>}/>
                    {/* <Route exact path="/home" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default App