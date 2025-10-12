import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Routers from "./Routers";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routers />
    </BrowserRouter>
  );
};
export default App;
