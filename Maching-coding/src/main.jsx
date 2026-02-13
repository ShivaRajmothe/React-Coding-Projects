import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Accordion from './Accordion.jsx'
import Counter from './Counter.jsx'
import UsersList from './UsersList.jsx'
import Products from './Products.jsx'
import TodoList from './TodoList.jsx'
createRoot(document.getElementById('root')).render(
  <>
    {/* <App /> */}
    {/* <Accordion />
    <Counter /> */}
    {/* <EvenOrOddChecker /> */}
  {/* <UsersList /> */}
    {/* <Products /> */}
    <TodoList />
 </>
)
