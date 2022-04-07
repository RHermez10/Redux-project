import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css';
import FavouriteList from "./Components/FavouriteList";
import Home from "./Components/Home";
import WhiskyInfo from "./Components/WhiskyInfo";
import WhiskyItems from './Components/WhiskyItems';



function App() {
 
  return (
  <Router>
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/WhiskyItems" element={<WhiskyItems/>}/>
         <Route path="WhiskyInfo" element={<WhiskyInfo/>}/>
         <Route path="/FavouriteList" element={<FavouriteList/>}/>
     </Routes>
</Router>
  );
}

export default App;
