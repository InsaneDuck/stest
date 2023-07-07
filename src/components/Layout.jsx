import CartButton from "./CartButton";
import Modal from "./Modal";
import Cards from "./Cards";
import {useSelector} from "react-redux";
import styles from "./Layout.module.css"

const Layout = () => {
    const cartState = useSelector(state => state.ui.showCartModal);
    return (
        <>
            <div className={styles.cartButtonContainer}>
                <CartButton/>
            </div>
            {cartState && <Modal/>}
            <Cards/>
        </>
    )
};

export default Layout