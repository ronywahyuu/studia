import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import LoginForm from '../components/auth/LoginForm'
import RegisterForm from '../components/auth/RegisterForm'
import UserChoice from '../components/auth/UserChoice'
import AuthLayout from '../components/Layouts/AuthLayout'
import HomeLayout from '../components/Layouts/HomeLayout'
import Articles from '../pages/Articles'
import ClassDetail from '../pages/ClassDetail'
import Classes from '../pages/Classes'
import CreateArticle from '../pages/CreateArticle'
import Dashboard from '../pages/Dashboard'
import HomeWork from '../pages/HomeWork'
import HomeWorkAssignment from '../pages/HomeWorkAssignment'
import JoinClass from '../pages/JoinClass'
import Lessons from '../pages/Lessons'
import ViewArticles from '../pages/ViewArticles'

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
          path: '/h/articles/create',
          element: <CreateArticle />
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
        ,
        {
          path: '/h/ls',
          element: <Lessons />
        },
        {
          path: '/h/classes/join',
          element: <JoinClass/>
        }
      ]
    },
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
    {
      path: '*',
      element: <div>Not Found</div>
    },
  ])
export default router