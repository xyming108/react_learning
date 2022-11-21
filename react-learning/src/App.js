import './App.css';
import Test01Context from "./AdvancedGuides/Context/Test-01-Context";
import Test01Fragments from "./AdvancedGuides/Fragments/Test-01-Fragments";

function App() {
    return (
        // <div className="App">
        //   <header className="App-header">
        //     <img src={logo} className="App-logo" alt="logo" />
        //     <p>
        //       Edit <code>src/App.js</code> and save to reload.
        //     </p>
        //     <a
        //       className="App-link"
        //       href="https://reactjs.org"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       Learn React
        //     </a>
        //   </header>
        // </div>
        <div>
            <Test01Context/>
            <Test01Fragments/>
        </div>
    );
}

export default App;
