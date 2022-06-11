import LeftBar from "./components/leftBar/LeftBar";
import NavBar from "./components/navBar/NavBar";
import RightBar from "./components/rightBar/RightBar";
import Update from "./components/update/Update";
import "./App.css";

const App = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <LeftBar />
        <Update />
        <RightBar />
      </div>
    </>
  );
};

export default App;
