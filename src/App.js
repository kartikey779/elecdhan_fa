// App.js
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import { useState } from 'react';
import RootLayout from './RootLayout/RootLayout';
import Login from './LoginPage/LoginPage';
import Voter from './Voter/voter';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  const onLogin = () => {
    console.log('User logged in'); // Add this line
    setIsAuthenticated(true);
    

    
  };
  

  // const onLogout = () => {
  //   setIsAuthenticated(false);
  // };


  


  

  const routes = [
    {
      path: '/',
      element: <RootLayout/>,
      children: [
        { path: '/', element:  isAuthenticated ? <Voter/> : <Login onLogin={onLogin}/> },
        { path:'/login', element: <Login onLogin={onLogin} />},
        { path:'/voter', element:<Voter/>}
      ],
    },
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router}  />;
};

export default App;


