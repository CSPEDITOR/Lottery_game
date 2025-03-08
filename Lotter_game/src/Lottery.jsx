import { useState } from "react";
import './Lottery.css';
import { genTicket,sum } from "./helper";
import Ticket from "./Ticket";
import Button from './Button'
export default function Lottery({n=3,winConsition}){

    let [ticket,setTicket] = useState(genTicket(n));
    let isWinning = winConsition(ticket);
    let buyTicket =(action) =>{
        setTicket(genTicket(n));
    }
return (
    <>
    <h1>Lottery Game</h1>
    <Ticket ticket={ticket}/>
    <br />
    <Button action = {buyTicket} />
    <h3>{isWinning && "Congratulation, you won !"}</h3>
    </>
);
}
