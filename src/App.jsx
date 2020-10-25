import React from 'react';
import './App.css';

 const App = () =>{
   return(
     <div className="w-screen flex flex-col items-center my-6	">
        <h1 className="text-white-600 text-4xl" >Codevillagefriends</h1>
        <input class="shadow appearance-none border rounded w-6/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-5" type="text" placeholder="Search for your friends" />
      </div>
   )
 }

export default App;
