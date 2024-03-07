import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState, useEffect } from 'react';
import RootLayout from './RootLayout/RootLayout';
import Login from './LoginPage/LoginPage';
import Voter from './Voter/voter';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check for authentication in localStorage on component mount
    const storedAuth = localStorage.getItem('isAuthenticated');
    if (storedAuth) {
      setIsAuthenticated(true);
    }
  }, []);

  const onLogin = () => {
    console.log('User logged in');
    // Set authentication status in state
    setIsAuthenticated(true);
    // Store authentication status in localStorage
    localStorage.setItem('isAuthenticated', 'true');
  };

  // const onLogout = () => {
  //   // Clear authentication status in state
  //   setIsAuthenticated(false);
  //   // Remove authentication status from localStorage
  //   localStorage.removeItem('isAuthenticated');
  // };

  const routes = [
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          path: '/',
          element: isAuthenticated ? <Voter /> : <Login onLogin={onLogin} />,
        },
        { path: '/login', element: <Login onLogin={onLogin} /> },
        { path: '/*', element: <Voter /> },
      ],
    },
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default App;
