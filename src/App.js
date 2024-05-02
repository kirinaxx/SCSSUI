import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { useState } from 'react';
import MainPage from './components/MainPage';
import LoginPage from './components/LoginPage';
import Home from './components/Home';
import FullscreenPost from './components/FullscreenPost';
import Ongoing from './components/Ongoing';
import Resources from './components/Resources';
import FAQ from './components/FAQ';
import About from './components/About';
import guestPic from './assets/guestProfilePic.png';

function App() {

  //once we got api integration if we replace these precoded post objs with an api call to scoop the posts from the database it
  //*should* just work.
  const fakePostObjs = [
    {
        title: 'Mi nombre es Ethan y tengo diez dedos :)', 
        user: 'HyperCoderEthan',
        pfp: guestPic,
        description: 'Desde que tengo uso de razón, he tenido 10 malditos dedos.',
        ID: '1',
        likes: 100000,
        date: '04-29-2024',
        children: ['40', '60']
    },
    {
        title: 'example post 2',
        user: 'Montgomery Phillips',
        pfp: guestPic,
        description: 'blah blah blah blah',
        ID: '2',
        likes: 40,
        date: '07-13-1998',
        children: null,
    },
    {
        title: 'example post 3',
        user: 'Evariste Galois',
        pfp: guestPic,
        description: 'BLAH BLAH BLAH BLAH',
        ID: '3',
        likes: 94,
        date: '11-14-1492',
        children: null,
    },
    {
        title: 'example post 4',
        user: 'Simon "the beast" Bandersnatch',
        pfp: guestPic,
        description: 'this post is written in cantonese',
        ID: '4',
        likes: 2,
        date: '04-30-2024',
        children: ['10'],
    }
];

const fakeCommentObjs = [
  {
      body: 'This was INSPIRATIONAL',
      user: 'appreciator of wisdom',
      ID: 40,
      likes: 1000,
      date: '04-30-2024',
      parent: 1,
      children: null
  },
  {
      body: 'Pfffft who cares old man??',
      user: 'fool',
      ID: 60,
      likes: -10000000,
      date: '04-30-2024',
      parent: 1,
      children: null
  },
  {
      body: 'great language cantonese is',
      user: 'Bob',
      ID: 10,
      likes: 4,
      date: '04-30-2024',
      parent: 4,
      children: null
  }
];

  const [language, setLanguage] = useState("English");

  //This is all the pages and subpages of pages(denoted by children: ...) that our website will use
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainPage language={[language, setLanguage]}/>,
      children: [
        {
          index: true,
          element: <Home language={[language, setLanguage]} posts={fakePostObjs}/>,
        },
        {
          path: '/:postID',
          element: <FullscreenPost posts={fakePostObjs} comments={fakeCommentObjs}/>,
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
