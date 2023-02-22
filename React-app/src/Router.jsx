import { Route, Routes } from "react-router-dom";
import Checkout from "./Routes/Checkout/Checkout";
import Home from "./Routes/Home/Home";
import NavBar from "./Routes/NavBar/NavBar";

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<NavBar />}>
                <Route index element={<Home />} />
                <Route path='checkout' element={<Checkout />} />
            </Route>
        </Routes>
    );
};

export default Router;