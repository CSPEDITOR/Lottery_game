import './App.css'
import Lottery from './Lottery'
import {sum } from "./helper";

function App() {
  let winConsition = (ticket) =>{
    return sum(ticket) === 15;
  }
  return (
    <>
      <Lottery n={2} winConsition = {winConsition}/>
   
    </>
  )
}

export default App
