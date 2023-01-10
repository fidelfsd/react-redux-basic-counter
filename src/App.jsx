import "./App.css";
import Counter from "./components/Counter/Counter";
import Counter2 from "./components/Counter2/Counter2";
import Reader from "./components/Reader/Reader";

function App() {
   return (
      <div className="App">
         <h1>Redux</h1>

         <Counter />

         <hr />

         <Counter2 />

         <hr />

         <Reader />
      </div>
   );
}

export default App;
