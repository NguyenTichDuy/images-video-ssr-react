import { Route, Routes } from "react-router-dom";
// import '../public/style.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/about" element={<div>About</div>} />
      </Routes>
      <h1>Welcome to React!</h1>
    </div>
  );
}

export default App;