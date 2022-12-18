import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import LoginForm from '../components/auth/LoginForm'
import RegisterForm from '../components/auth/RegisterForm'
import UserChoice from '../components/auth/UserChoice'
import CreateHomeworkForm from '../components/homework/CreateHomeworkForm'
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
import CreateClass from '../components/dashboard/CreateClass'
import Settings from '../components/Settings'
import CreateLesson from '../components/classes/CreateLesson'

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
          path: '/h/classes/create',
          element: <CreateClass />
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
          path: '/h/hw',
          element: <HomeWork />
        },
        // {
        //   path: '/h/hw/:id',
        // }
        {
          path: '/h/hw/:id',
          element: <HomeWorkAssignment />
        },
        {
          path: '/h/hw/create',
          element: <CreateHomeworkForm />
        },
        {
          path: '/h/classes/:id',
          element: <Lessons />
        },
        {
          path: '/h/classes/:classId/lessons/:lessonId',
          element: <ClassDetail />,
        },
        {
          path: '/h/classes/:id/create',
          element: <CreateLesson/>
        },
        {
          path: '/h/classes/join',
          element: <JoinClass/>
        },
        {
          path: '/h/settings',
          element: <Settings/>
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