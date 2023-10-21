import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RegistrationForm, LoginForm, ToDo, LandingPage } from './components';

const App = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <Router>
    <div className='App'>
    {/* {isRegistering ? <RegistrationForm /> : <LoginForm />}
    <p>
      {isRegistering
          ? 'Already have an account?'
          : "Don't have an account?"}
      </p>
      <button onClick={() => setIsRegistering(!isRegistering)}>
        {isRegistering ? 'Login' : 'Register'}
      </button>  */}
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/to-do" element={<ToDo />} />
      </Routes>
    </div>
  </Router>
  )
}

export default App




// import React, {useState} from 'react';
// import './App.css';
// // import { BrowserRouter as Route, Routes, Router } from 'react-router-dom';
// // import { RegistrationForm, LoginForm, ToDo } from './components';

// const App = () => {

//   // const [isRegistering, setIsRegistering] = useState(true);

//   // <Router>
// //   <div className="App">
// //     {/* <RegistrationForm /> */}
// //     App
// //   {/* {isRegistering ? <RegistrationForm /> : <LoginForm />}
// //       <p>
// //         {isRegistering
// //           ? 'Already have an account?'
// //           : "Don't have an account?"}
// //       </p>
// //       <button onClick={() => setIsRegistering(!isRegistering)}>
// //         {isRegistering ? 'Login' : 'Register'}
// //       </button> */}
// //     {/* <Routes>
// //       <Route path="/" component={RegistrationForm} />
// //       <Route path="/login" component={LoginForm} />
// //       <Route path="/to-do" component={ToDo} />
// //     </Routes> */}
// //   </div>
// // // </Router>

// return (

// );
// }

// export default App;

