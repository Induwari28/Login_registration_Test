import Signup from "./Signup"; // NO space before the dot
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      {/* 1. Use Capitalized tag */}
      <Signup /> 
      
      <h1 className="text-center mt-3">Login and Registration Test</h1>
    </div>
  );
}

export default App;
