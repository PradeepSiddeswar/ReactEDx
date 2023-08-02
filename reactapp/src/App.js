
import './App.css';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Home from './Components/Home/Home';
import FormSignin from './Components/Form/FormSignin';
import FormRegister from './Components/Form/FormRegister';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     
     <Routes>
       <Route path="/">
       <Route index element={<Home />} />
       <Route path="FormSignin" element={<FormSignin />} />
       <Route path="FormRegister" element={<FormRegister />} />
       </Route>
     </Routes>
   </BrowserRouter>
      
    </div>
  );
}

export default App;
