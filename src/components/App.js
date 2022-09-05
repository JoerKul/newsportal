import "./App.css";
import Navbar from "./Navbar";
import News from "./News/News";

function App() {
  return (
    <div>
      <div className="header">
        <div className="title">News Portal</div>
        <div className="subtitle">
          Leverage agile frameworks to provide a robost ....
        </div>
      </div>
      <Navbar />
      <News />
    </div>
  );
}

export default App;
