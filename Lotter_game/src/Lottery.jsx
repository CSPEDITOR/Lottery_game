import { useState } from "react";
import './Lottery.css';
import { genTicket,sum } from "./helper";
import Ticket from "./Ticket";
export default function Lottery({n=3,winningSum=15}){

    let [ticket,setTicket] = useState(genTicket(n));
    let isWinning = sum(ticket) === winningSum;
    let buyTicket =() =>{
        setTicket(genTicket(n));
    }
return (
    <>
    <h1>Lottery Game</h1>
    <Ticket ticket={ticket}/>
    <br />
    <button onClick={buyTicket}>Buy Ticket</button>
    <h3>{isWinning && "Congratulation, you won !"}</h3>
    </>
);
}
