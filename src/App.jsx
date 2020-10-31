import React from 'react';
import './App.css';
import Card from './components/Card'

 const App = () =>{


  const friends = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      img: '1558809469654.jpg'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      img: '1558809469654.jpg'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      img: '1558809469654.jpg'

    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      img: '1558809469654.jpg'

    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      img: '1558809469654.jpg'

    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      img: '1558809469654.jpg'

    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      img: '1558809469654.jpg'

    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      img: '1558809469654.jpg'

    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      img: '1558809469654.jpg'

    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      img: '1558809469654.jpg'

    }
  ];
   return(
     <div className="flex flex-col items-center my-6 mx-auto">
        <h1 className="text-white-600 text-4xl" >Codevillagefriends</h1>
        <input class="shadow appearance-none border rounded w-6/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-5" type="text" placeholder="Search for your friends" />
        <Card friends= {friends} />
       
      </div>
   )
 }

export default App;
