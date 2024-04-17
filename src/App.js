import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import MainPage from './components/MainPage';
import LoginPage from './components/LoginPage';
import Home from './components/Home';
import Ongoing from './components/Ongoing';
import Resources from './components/Resources';
import FAQ from './components/FAQ';
import About from './components/About';

function App() {

  //This is all the pages and subpages of pages(denoted by children: ...) that our website will use
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/Ongoing',
          element: <Ongoing />,
        },
        {
          path: '/Resources',
          element: <Resources />,
        },
        {
          path: '/FAQ',
          element: <FAQ />,
        },
        {
          path: '/About',
          element: <About />,
        },
      ]
    },
    {
      path:'/LoginPage',
      element: <LoginPage />,
    }
  ])

  //feel free to add any global state components as necessary

  //the RouterProvider component conditionally renders whatever page we are supposed to be on
  return (
   <RouterProvider router={router} />
  );
}

export default App;
