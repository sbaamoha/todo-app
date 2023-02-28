import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Todo from "./components/Todo";
import Footer from "./components/Layout/Footer";
import Navbar from "./components/Layout/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="h-[80vh] ">
        <Todo />
      </main>
      <Footer />
    </div>
  );
}

export default App;
