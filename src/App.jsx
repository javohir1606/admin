import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./Layout/main-layout";
import Home from "./pages/Home/Home";

function App() {
  return <>
  <Routes>
    <Route path="/" element={<MainLayout/>}>
    <Route index element={<Home/>}/>
    </Route>
  </Routes>
  </>;
}

export default App;
