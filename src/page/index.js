import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoBox from '../component/todoBox/todoBox';

function App () {
  return <TodoBox />;
}

ReactDOM.render(<App />, document.getElementById('root'));
