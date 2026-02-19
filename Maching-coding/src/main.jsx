import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Accordion from '../src/components/Accordion.jsx'
import Counter from '../src/components/Counter.jsx'
import UsersList from '../src/components/UsersList.jsx'
import Products from '../src/components/Products.jsx'
import TodoList from '../src//components/TodoList.jsx'
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
