import './App.css';
import Test01Context from "./AdvancedGuides/Context/Test-01-Context";
import Test01Fragments from "./AdvancedGuides/Fragments/Test-01-Fragments";
import Test01Hook from "./AdvancedGuides/Hook/Test-01-Hook";
import Test02Hook from "./AdvancedGuides/Hook/Test-02-Hook";
import Test04Hook from "./AdvancedGuides/Hook/Test-04-Hook";
import Test03Hook from "./AdvancedGuides/Hook/Test-03-Hook";
import Test05Hook from "./AdvancedGuides/Hook/Test-05-Hook";

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
            <p>----------------context----------------</p>
            <Test01Context/>
            <p>----------------Fragments----------------</p>
            <Test01Fragments/>
            <p>----------------renderProps----------------</p>
            {/*<MouseTracker1/>*/}
            {/*<MouseTracker2/>*/}
            <p>----------------hook----------------</p>
            <Test01Hook/>
            <Test02Hook/>
            <Test03Hook/>
            <Test04Hook/>
            <Test05Hook/>
        </div>
    );
}

export default App;
