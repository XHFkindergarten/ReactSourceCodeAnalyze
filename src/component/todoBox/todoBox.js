import React, { useState, useEffect } from 'react'
import './todoBox.css';
import TodoForm from '../todoForm/todoForm';
import TodoList from '../todoList/todoList';
import Test from '../test/test'


const initialItem = {
  id: 1,
  task: 'new todo',
  complete: false
}

export default function TodoBox () {
  // 初始数据
  const [ list, setList ] = useState([{
    id: 1,
    task: 'new todo',
    complete: false
  }])
  
  // 删除任务
  const handleTaskDelete = id => {
    setList(list.filter(i => i.id !== id))
  }
  // 完成/未完成 任务
  const handleToggleComplete = id => {
    const _list = [...list]
    _list.forEach(item => {
      if (item.id === id) {
        item.complete = !item.complete
      }
    })
    setList(_list)
  }

  const generateId = () => Math.floor(Math.random() * 9000) + 1000

  const handleSubmit = (task) => {
    setList([
      ...list, {
        id: generateId(),
        task,
        complete: false
      }
    ])
  }

  const statistics = {
    todoCount: list.length,
    todoCompleteCount: list.filter(i => i.complete).length
  }

  return (
    <div className="todobox">
      <h1 className="todobox_tit">Nerv Todo</h1>
      <TodoList
        data={list}
        deleteTask={handleTaskDelete}
        toggleComplete={handleToggleComplete}
        todoCount={statistics.todoCount}
        todoCompleteCount={statistics.todoCompleteCount}
      />
      <TodoForm submitTask={handleSubmit} />
      <Test />
    </div>
  )

}
