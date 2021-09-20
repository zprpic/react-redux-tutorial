import CakeContainer from "./Components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCakeContainer from "./Components/HooksCakeContainer";
import IceCreamContainer from "./Components/IceCreamContainer";
import HooksChocolateContainer from "./Components/HooksChocolateContainer";
import NewCakeContainer from "./Components/NewCakeContainer";
import ItemContainer from "./Components/ItemContainer";
import UserContainer from "./Components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/*         <ItemContainer cake />
        <HooksCakeContainer />
        <CakeContainer />
        <NewCakeContainer />
        <ItemContainer iceCream />
        <IceCreamContainer />
        <HooksChocolateContainer /> */}
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
