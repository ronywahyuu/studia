import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
// helmet provider
import { HelmetProvider } from 'react-helmet-async';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    }
  ])
  return (
    <HelmetProvider>
      <div className='app'>
        <RouterProvider router={router} />
      </div>
    </HelmetProvider>
  );
}

export default App;
