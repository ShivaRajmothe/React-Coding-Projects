import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Accordion from './Accordion.jsx'
import Counter from './Counter.jsx'
import EvenOrOddChecker from './EvenorOdd.jsx'
import UsersList from './UsersList.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Accordion />
    <Counter /> */}
    {/* <EvenOrOddChecker /> */}
    <UsersList />
  </StrictMode>,
)
