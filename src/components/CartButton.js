import styles from "./CartButton.module.css"
import {useDispatch} from "react-redux";
import {uiActions} from "../store/ui-slice";
const CartButton = () => {
    const dispatch = useDispatch();

    const cartButtonHandler = () => {
        dispatch(uiActions.toggleCart());
    }

    return (
        <button className={styles.cartButton} onClick={cartButtonHandler}>
            Your Basket(0)
        </button>
    )
};

export default CartButton;