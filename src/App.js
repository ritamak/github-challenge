import { Route, Routes } from "react-router-dom";
import Search from "./pages/Search";
import User from "./pages/User";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Search />} />
      <Route exact path="/:login" element={<User />} />
    </Routes>
  );
};

export default App;
