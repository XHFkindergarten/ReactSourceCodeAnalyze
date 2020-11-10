import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoBox from '../component/todoBox/todoBox';

// class App extends React.Component {
//   render () {
//     return (
//       <TodoBox />
//     )
//   }
// }

// ReactDOM.render(<App />, document.getElementById('root'));


class HelloNerv extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      toggle: true
    }
  }


  handleClick = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }
  
  render() {
    return (
      <h1>
        <div>{ this.state.toggle ? 'Nerv_Fiber' : 'React_Fiber' }</div>
        <div onClick={this.handleClick}>XHFkindergarten</div>
      </h1>
    )
  }
}

HelloNerv.defaultProps = {
  name: 'lzk',
  hh: 23
}


ReactDOM.render(<HelloNerv />, document.getElementById('root'))