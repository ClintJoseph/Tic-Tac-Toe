import MultiPlayer from "./MultiPlayer";
import SinglePlayer from "./SinglePlayer";
import { BrowserRouter as Router, Route, Switch, Link, Routes } from 'react-router-dom';

function App() {
  return (
 
   

   <Router>
      <div>
      <Routes>
        <Route path="/Tic-Tac-Toe" element={<MultiPlayer />} />
        <Route path="/singleplayer" element={<SinglePlayer />} />
     </Routes>
      </div>
    </Router>

  );
}

export default App;
