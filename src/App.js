import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import LoginForm from './components/auth/LoginForm';
// import Register from './pages/Register';
// helmet provider
import { HelmetProvider } from 'react-helmet-async';
import Dashboard from './pages/Dashboard';
import Classes from './pages/Classes';
import HomeLayout from './components/Layouts/HomeLayout';
import ClassDetail from './pages/ClassDetail';

import AuthLayout from './components/Layouts/AuthLayout';
import UserChoice from './components/auth/UserChoice';
import Articles from './pages/Articles';
import ViewArticles from './pages/ViewArticles';

// import ClassDetailLayout from './components/Layouts/ClassDetailLayout';
import HomeWork from './pages/HomeWork';
import HomeWorkAssignment from './pages/HomeWorkAssignment'
import RegisterForm from './components/auth/RegisterForm';

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
          path: '/h/articles',
          element: <Articles />
        },
        {
          path: '/h/articles/:id',
          element: <ViewArticles />
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
      path: '/auth',
      element: <AuthLayout />,
      children: [
        {
          path: '/auth/login',
          element: <LoginForm />
        },
        {
          path: '/auth/register',
          element: <UserChoice />
        },
        {
          path: '/auth/register/student',
          element: <RegisterForm />
        },
        {
          path: '/auth/register/teacher',
          element: <RegisterForm />
        }
      ]
    },
    // {
    //   path: '/login',
    //   element: <Login />
    // },
    // {
    //   path: '/register',
    //   element: <Register />
    // },
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
