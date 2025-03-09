import { createRoot } from 'react-dom/client' ; 
import { BrowserRouter,Routes,Route } from 'react-router'
import App from './App.jsx'
import Academics from './Pages/Academics.jsx' ; 
import Administration from './Pages/Administration.jsx' ;
import Contact from './Pages/Contact.jsx' ;
import About from './Pages/About.jsx' ; 
import LoadingScreen from './components/LoadingScreen.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path = '/' element = {<App/>}></Route>
      <Route path = '/academics' element = {<Academics/>}></Route>
      <Route path = '/administration' element = {<Administration/>}></Route>
      <Route path = '/contact' element = {<Contact/>}></Route>
      <Route path = '/about' element = {<About/>}></Route>
      <Route path = '/loading' element = {<LoadingScreen />}></Route>
    </Routes>
  </BrowserRouter>
)
