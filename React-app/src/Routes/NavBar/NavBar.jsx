import { Outlet, useNavigate } from "react-router-dom";

import { NavigationContainer } from "./NavBar.style";

const NavBar = () => {
    const navigate = useNavigate();

    const goToCheckout = () => {
        navigate('/checkout')
    }
    const goToHome = () => {
        navigate('/')
    }
    return (
        <>
            <NavigationContainer>
                <button onClick={goToHome}>Home</button>
                <button onClick={goToCheckout} >Cart</button>
            </NavigationContainer>
            <Outlet />
        </>
    );
};

export default NavBar;