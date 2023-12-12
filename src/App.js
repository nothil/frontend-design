import "./App.css";
import Nav from "./components/nav/nav";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import Whatwedo from "./components/whatwedo/wedo";
import Brands from "./components/brands/brands";
import Cases from "./components/cases/cases";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Whatwedo />
      <Cases />
      <Brands />
      <Footer />
    </div>
  );
}

export default App;
