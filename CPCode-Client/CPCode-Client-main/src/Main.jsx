// Routes
import { BrowserRouter , Route , Routes } from 'react-router-dom';

// Components

  // Authentification
  import Connexion from './Components/Authentification/Connexion';
  import Inscription from './Components/Authentification/Inscription';

  // Home
  import Home from './Components/Home/Home';

  // Acceuil
  import Acceuil from './Components/Acceuil/Acceuil';
  

function Main() {
  return(
    <BrowserRouter>
      <Routes>
        {/* Acceuil */}
        <Route path="/" element={ <Acceuil />}/>
        {/* {Home} */}
        <Route exact path="/home" element={ <Home />} />
        {/* Authentification */}
        <Route exact path="/login" element={ <Connexion/> } />
        <Route exact path="/signup" element={ <Inscription/> } />
      </Routes>
    </BrowserRouter>
  );
}
export default Main;
