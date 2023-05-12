import projectImage1 from '../images/blue-jornal.png'
import projectImage2 from '../images/blue-jornal1.png'
import projectImage3 from '../images/blue-jornal2.png'
import projectImage4 from '../images/blue-jornal3.png'
import projectImage5 from '../images/blue-jornal4.png'
import project1Image1 from '../images/React-Movie-Catalog.png'
import project1Image2 from '../images/React-Movie-Catalog1.png'
import project1Image3 from '../images/React-Movie-Catalog2.png'
import project1Image4 from '../images/React-Movie-Catalog3.png'
import project1Image5 from '../images/React-Movie-Catalog4.png'
import project2Image1 from '../images/weather.png'
import project2Image2 from '../images/weather1.png'
import project2Image3 from '../images/weather3.png'

const data = [
  {
    id: 1,
    title: 'BlueJornal',
    description:
      'The social network was created to find friends, exchange messages with them, and create and view posts. In this social network, it is possible to subscribe to interesting users, and if this subscription is mutual, then you become friends.',
    images: [
      {
        title: 'BlueJournal',
        caption: 'BlueJournal home page',
        url: projectImage1
      },
      {
        title: 'BlueJournal',
        caption: 'BlueJournal friends page',
        url: projectImage2
      },
      {
        title: 'BlueJournal',
        caption: 'BlueJournal users page',
        url: projectImage3
      },
      {
        title: 'BlueJournal',
        caption: 'BlueJournal profile page',
        url: projectImage4
      },
      {
        title: 'BlueJournal',
        caption: 'BlueJournal search user',
        url: projectImage5
      }
    ],
    sourceUrl: 'https://github.com/OlAndrey/BlueJournal',
    liveViewUrl: 'https://olandrey.github.io/BlueJournal',
    technology: ['React', 'React-router-dom', 'FireBase', 'Bootstrap']
  },
  {
    id: 2,
    title: 'React-Movie-Catalog',
    description: `Movie directory where you can find all your favorite movies. 
        This application is a movie catalog where the user can search for their favorite movies and if the user is authorized then add them to the favorite list. The main page displays currently popular films that can be filtered by genre. And when viewing information about a movie, the application will offer movies based on it.`,
    images: [
      {
        title: 'CatalogMovie',
        caption: 'CatalogMovie main page',
        url: project1Image1
      },
      {
        title: 'CatalogMovie',
        caption: 'CatalogMovie search result',
        url: project1Image2
      },
      {
        title: 'CatalogMovie',
        caption: 'CatalogMovie movie page',
        url: project1Image3
      },
      {
        title: 'CatalogMovie',
        caption: 'CatalogMovie incorect log-in',
        url: project1Image4
      },
      {
        title: 'CatalogMovie',
        caption: 'CatalogMovie favorite movies',
        url: project1Image5
      }
    ],
    sourceUrl: 'https://github.com/OlAndrey/React-Movie-Catalog',
    liveViewUrl: 'https://react-movie-catalog.vercel.app/',
    technology: [
      'TypeScript',
      'React',
      'React-router-dom',
      'Redux',
      'Redux-form',
      'FireBase',
      'MUI'
    ]
  },
  {
    id: 3,
    title: 'The-News-App',
    description:
      'The News App project allows users to view the list of news in real time. Search and filter different types of news to read.',
    images: [
      {
        title: 'The-News-App',
        caption: 'The-News-App Home Page',
        url: 'https://res.cloudinary.com/dtpqmlah5/image/upload/v1683832898/news1_zixrvs.png'
      },
      {
        title: 'The-News-App',
        caption: 'The-News-App view category in Home Page',
        url: 'https://res.cloudinary.com/dtpqmlah5/image/upload/v1683832901/news2_owj6pq.png'
      },
      {
        title: 'The-News-App',
        caption: 'The-News-App Article Page',
        url: 'https://res.cloudinary.com/dtpqmlah5/image/upload/v1683832899/news3_xz3p7e.png'
      },
      {
        title: 'The-News-App',
        caption: 'The-News-App Category Page',
        url: 'https://res.cloudinary.com/dtpqmlah5/image/upload/v1683832898/news4_u8evbj.png'
      }
    ],
    sourceUrl: 'https://github.com/OlAndrey/the-news-app',
    liveViewUrl: 'https://the-news-app.vercel.app/',
    technology: ['Next', 'React', 'Tailwind', 'PWA', 'MediaStackAPI']
  },
  {
    id: 4,
    title: 'Blogging-app',
    description:
      'A small post application built on MERN. With authorization and the ability to create, modify and delete posts, and attach images to them. Also their comments. Counting the number of post views and displaying them.',
    images: [
      {
        title: 'Blogging-app',
        caption: 'Blogging-app Home Page',
        url: 'https://res.cloudinary.com/dtpqmlah5/image/upload/v1682706624/snapshot-1_lnudgx.png'
      },
      {
        title: 'Blogging-app',
        caption: 'Blogging-app Login Page',
        url: 'https://res.cloudinary.com/dtpqmlah5/image/upload/v1682706623/snapshot-2_khi1zw.png'
      },
      {
        title: 'Blogging-app',
        caption: 'Blogging-app SignUp Page',
        url: 'https://res.cloudinary.com/dtpqmlah5/image/upload/v1682706623/snapshot-3_r04yjm.png'
      },
      {
        title: 'Blogging-app',
        caption: 'Blogging-app Add Article Page',
        url: 'https://res.cloudinary.com/dtpqmlah5/image/upload/v1682706623/snapshot-4_vbtcwa.png'
      },
      {
        title: 'Blogging-app',
        caption: 'Blogging-app Article Page',
        url: 'https://res.cloudinary.com/dtpqmlah5/image/upload/v1682706623/snapshot1_glsglq.png'
      }
    ],
    sourceUrl: 'https://github.com/OlAndrey/Blogging-app',
    liveViewUrl: 'https://blogging-app-li92.vercel.app/',
    technology: ['MongoDB', 'Express', 'React', 'Node', 'Redux', 'MUI', 'JWT']
  },
  {
    id: 5,
    title: 'Weather',
    description:
      'Website for monitoring weather in cities using the OpenWeatherMap API.',
    images: [
      { title: 'Weather', caption: 'Weather main page', url: project2Image1 },
      { title: 'Weather', caption: 'Weather search city', url: project2Image2 },
      { title: 'Weather', caption: 'Weather select city', url: project2Image3 }
    ],
    sourceUrl: 'https://github.com/OlAndrey/Weather',
    liveViewUrl: 'https://olandrey.github.io/Weather/build/',
    technology: ['React', 'Redux', 'API Weather']
  }
]

export { data }
