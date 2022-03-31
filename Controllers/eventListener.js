import { ethers } from "ethers";
import dotenv from "dotenv"
import Event from "../model/Events.js";
import masterChef from "../ABI/masterChef.js";
dotenv.config();

const alchemyApiKey = process.env.ALCHEMY_API;
const sushiMaster = process.env.SUSHIMASTER; 
const provider = new ethers.providers.WebSocketProvider(alchemyApiKey);
const contract = new ethers.Contract(sushiMaster,masterChef,provider);

const event = async function main() {
        
    contract.on('Deposit', (user, pid, amount)=>{
        insert('Deposit',user,pid,amount);
    })
    
    contract.on('Withdraw', (user, pid, amount)=>{
        insert('Withdraw',user,pid,amount);
    })
    
    contract.on('EmergencyWithdraw', (user, pid, amount)=>{
        insert('EmergencyWithdraw',user,pid,amount);
    })
}

function insert(eventType,user,pid,amount){
    const Amount = amount.toNumber();
    const Pid = pid.toNumber();
    const event = new Event({
        Event:eventType,
        user:user,
        poolId:Pid,
        amount:Amount
    });

    event.save();    
}

export default event;