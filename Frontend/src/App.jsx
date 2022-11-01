import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Cart from "./pages/Cart";
const App = () =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route path="home" element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register/>}/>
                    <Route path="productList" element={<ProductList />} />
                    <Route path="product" element={<Product />} />
                    <Route path="cart" element={<Cart />} />
                    {/* <Route exact path="/home" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default App