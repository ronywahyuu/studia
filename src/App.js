import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
// helmet provider
import { HelmetProvider } from 'react-helmet-async';
import Dashboard from './pages/Dashboard';
import Classes from './pages/Classes';
import HomeLayout from './components/Layouts/HomeLayout';
import ClassDetail from './pages/ClassDetail';
// import ClassDetailLayout from './components/Layouts/ClassDetailLayout';
import HomeWork from './pages/HomeWork';
import HomeWorkAssignment from './pages/HomeWorkAssignment';

function App() {


  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeLayout />,
      children: [
        {
          path: '/',
          element: <Dashboard />
        },
        {
          path: '/h',
          element: <Dashboard />
        },
        {
          path: '/h/dashboard',
          element: <Dashboard />
        },
        {
          path: '/h/classes',
          element: <Classes />
        },
        {
          path: '/h/classes/:id',
          element: <ClassDetail />,
        },
        {
          path: '/h/hw',
          element: <HomeWork />
        }
        ,
        {
          path: '/h/hw/:id',
          element: <HomeWorkAssignment />
        }
      ]
    },
    // {
    //   path: '/classes/:id',
    //   element: <ClassDetailLayout />,
    //   children: [
    //     {
    //       path: '/classes/:id',
    //       element: <ClassDetail />
    //     }
    //   ]
    // },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '*',
      element: <div>Not Found</div>
    },
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
