//import logo from './logo.svg';
import "./App.css";
import Header from "./Header";
import CartOne from "./CartOne";
import CartTwo from "./CartTwo";

function App() {
  return (
    <div className="App">
      <div style={{ margin: "0 70px" }}>
        <Header />
      </div>
      <div
        style={{
          display:"flex",
          margin: "50px 150px",
          /*backgroundColor: "red",*/
          gap:"90px",
         
          width:"980px",
          height:"550px",
          padding:"30px"
        }}
      >
        <CartOne />
        <CartTwo />
      </div>


    </div>
  );
}

export default App;
