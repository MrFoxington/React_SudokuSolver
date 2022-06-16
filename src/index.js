import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = document.getElementById("root");
const reactContentRoot = ReactDOM.createRoot(root);

const App = () => {
  return (
    <div>
      <h1>
        My AWESOME APP GO!</h1>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
    </div>
  );
}

// ReactDOM.render(<App/>, reactContentRoot);
reactContentRoot.render(<App/>);