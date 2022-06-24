import Navbar from "./navbar/Navbar";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div style={{ marginTop: "10%" }}>
        <h1>web3-react tutorial</h1>
      </div>
    </div>
  );
};

export default App;
