import React from 'react';
import ReactDOM from 'react-dom';

const page = (
      <nav>
        <h1>React Challenge</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      </nav>
);
const root = document.getElementById('root');
console.log(page);

ReactDOM.render(page, root);
