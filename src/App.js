import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { useState } from 'react';
import MainPage from './components/MainPage';
import LoginPage from './components/LoginPage';
import Home from './components/Home';
import Ongoing from './components/Ongoing';
import Resources from './components/Resources';
import FAQ from './components/FAQ';
import About from './components/About';

function App() {

  const [language, setLanguage] = useState("English");

  //This is all the pages and subpages of pages(denoted by children: ...) that our website will use
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainPage language={[language, setLanguage]}/>,
      children: [
        {
          index: true,
          element: <Home language={[language, setLanguage]}/>,
        },
        {
          path: '/Ongoing',
          element: <Ongoing language={[language, setLanguage]}/>,
        },
        {
          path: '/Resources',
          element: <Resources language={[language, setLanguage]}/>,
        },
        {
          path: '/FAQ',
          element: <FAQ language={[language, setLanguage]}/>,
        },
        {
          path: '/About',
          element: <About language={[language, setLanguage]}/>,
        },
      ]
    },
    {
      path:'/LoginPage',
      element: <LoginPage language={[language, setLanguage]}/>,
    }
  ])

  //feel free to add any global state components as necessary

  //the RouterProvider component conditionally renders whatever page we are supposed to be on
  return (
   <RouterProvider router={router} />
  );
}

export default App;
