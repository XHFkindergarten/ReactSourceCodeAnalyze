import React from 'react'
import './todoForm.css';

class TodoForm extends React.Component {
  state = {
    value: 0
  }
  submitTask = e => {
    this.setState({
      value: this.state.value + 1
    })
    e.preventDefault();
    const task = this.task.value.trim();
    if (!task) {
      return;
    }
    this.props.submitTask(task);
    this.task.value = '';
  };

  render() {
    const { value } = this.state
    return (
      <div>
        {value}
        <hr />
        <div className="todoform">
          <label htmlFor="task" className="todoform_label">
            Task
          </label>
          <input
            type="text"
            id="task"
            ref={domNode => (this.task = domNode)}
            className="todoform_input"
            placeholder="what do you plan to do?"
          />
          <div className="todoform_btn" onClick={this.submitTask}>
            Save Task
          </div>
        </div>
      </div>
    );
  }
}

export default TodoForm;
