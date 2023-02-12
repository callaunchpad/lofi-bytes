import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import 'aos/dist/aos.css';
import './css/style.css';

import AOS from 'aos';

import Home from './pages/Home';
import background from "./media/lofi3.gif";
// import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
// import ResetPassword from './pages/ResetPassword';

function App() {

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <div style={{ 
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      width: '100vw',
      height: '100vh'
    }}>
    
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/signin" element={<SignIn />} /> */}
        {/* <Route path="/signup" element={<SignUp />} /> */}
        {/* <Route path="/reset-password" element={<ResetPassword />} /> */}
      </Routes>
    </div>
  );
}

export default App;
