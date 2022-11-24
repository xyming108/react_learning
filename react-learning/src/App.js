import './App.css';
import Test01Context from "./AdvancedGuides/Context/Test-01-Context";
import Test01Fragments from "./AdvancedGuides/Fragments/Test-01-Fragments";
import MouseTracker2 from "./AdvancedGuides/RenderProps/Test-02-RenderProps";
import Test01Hook from "./AdvancedGuides/Hook/Test-01-Hook";

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
            {/*<MouseTracker1/>*/}
            {/*<MouseTracker2/>*/}
            <Test01Hook/>
        </div>
    );
}

export default App;
