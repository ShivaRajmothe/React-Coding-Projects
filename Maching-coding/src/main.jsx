import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Accordion from './components/Accordion.js'
import Counter from './components/Counter.jsx'
import UsersList from './components/UsersList.js'
import Products from './components/Products.js'
import TodoList from './components/TodoList.js'
createRoot(document.getElementById('root')).render(
  <>
    {/* <App />  */}
     <Accordion />
    <Counter />
     {/* <EvenOrOddChecker /> */} 
  {/* <UsersList /> 
    <Products /> */}
    <TodoList />

 </>
)
