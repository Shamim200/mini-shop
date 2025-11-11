import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Routers from "./Routers";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routers />
      <Footer />
    </BrowserRouter>
  );
};
export default App;
