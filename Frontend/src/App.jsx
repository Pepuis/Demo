import Login from "./pages/Login";
import {
    Routes,
    Route,
    BrowserRouter,
} from "react-router-dom";
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
                    
                </Route>
            </Routes>
        </BrowserRouter>
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