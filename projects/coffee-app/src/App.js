import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Content from "./Components/Content";
import Posters from "./Components/Posters";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
      <Posters />
      <Footer />
    </div>
  );
}

export default App;
