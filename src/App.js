import {Provider, useSelector} from "react-redux";
import store from "./store";
import Cards from "./components/Cards";
import Modal from "./components/Modal";
import CartButton from "./components/CartButton";
import Layout from "./components/Layout";

function App() {


    return (
        <Provider store={store}>
            <Layout/>
        </Provider>
    );
}

export default App;
