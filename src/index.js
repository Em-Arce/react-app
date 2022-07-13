import React from 'react';
import ReactDOM from 'react-dom';
// import logo from './assets/images/logo192.png';

// create assets folder inside src
//under src/assets create images and styles folder
//add all styling in styles/global-css file. then call the className in respective html element
// https://create-react-app.dev/docs/adding-images-fonts-and-files
//  https://stackoverflow.com/questions/37644265/correct-path-for-img-on-react-js
// render image from public folder: https://stackoverflow.com/questions/47196800/reactjs-and-images-in-public-folder

const page = (
      <div>
        <img src='/logo512.png' width='40px'></img>
        <h1>Fun facts about React</h1>
        <ul>
            <li>First released in 2013</li>
            <li>Originally created by Jordan Walke</li>
            <li>Has well over 100K stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </div>
);
const root = document.getElementById('root');
console.log(page);

ReactDOM.render(page, root);
