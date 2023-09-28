import "./App.css";
//import CardForm from "./components/CardForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { TaxaServicoContextProvider } from "./context";
import Home from "./page/home";

function App() {
  return (
    <TaxaServicoContextProvider>
      <Header />
      <Home />
      <Footer />
    </TaxaServicoContextProvider>
  );
}

export default App;
