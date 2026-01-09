//import logo from './logo.svg';
import "./App.css";
import Header from "./Header";
import CartOne from "./CartOne";
import CartTwo from "./CartTwo";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div className="Body"
      >
        <CartOne />
        <CartTwo />
      </div>
    </div>
  );
}

export default App;

