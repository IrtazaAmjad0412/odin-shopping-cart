import { AppHeader } from "./components/AppHeader/AppHeader";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <AppHeader />
      <Outlet />
    </div>
  );
}

export default App;
