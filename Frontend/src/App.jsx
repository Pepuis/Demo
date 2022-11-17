import Login from "./pages/Login";
import {
    Routes,
    Route,
    BrowserRouter as Router,
} from "react-router-dom";


import Home from "./pages/Home";
import Register from "./pages/Register";
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Cart from "./pages/Cart";
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                    <Route path="/products/:category" element={<ProductList />} />
                    <Route path="/product/:id" element={<Product />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route>
            </Routes>
        </Router>
    )
    // return (
    //     <Router>
    //         <Routes>
    //             <Route exact path="/">
    //                 <Home/> 
    //                 <Route path="home" element={<Home />} />
    //             </Route>
    //             <Route path="/products">
    //                 <ProductList />
    //             </Route>

    //         </Routes>
    //     </Router>
    // )
}
export default App