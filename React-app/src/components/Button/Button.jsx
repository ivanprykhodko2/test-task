import { BaseButton } from "./Button.style";


const Button = ({ onClick, children }) => {
    return (
        <BaseButton onClick={()=>{onClick();}}>
            {children}
        </BaseButton>
    );
};

export default Button;