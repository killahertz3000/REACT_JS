import { Provider } from "react-redux";
import { Router } from "../src/componets/Router";
import { store } from './Store';

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default App;