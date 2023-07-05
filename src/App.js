import {Provider} from "react-redux";
import store from "./store";
import Cards from "./components/Cards";

function App() {
  return (
    <Provider store={store}>
      <Cards/>
    </Provider>
  );
}

export default App;
