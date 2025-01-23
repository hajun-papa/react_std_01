import World from "./World"
import UserName from "./UserName.js"
import styles from "./Hello.module.css";
import { useState } from "react";

export default function Hello({age}) {
    //let name = "hong";
    const [name, setName] = useState('hong');
    const msg = age > 19 ? "성인" : "미성년";


    return (
        <div>
            <h1>Hello</h1>
            <h2 id="name">{name}({age}) : {msg}</h2>
            <UserName name={name}/>
            <button onClick={() => {
                setName(name === "hong"  ? "kim" : "hong");
                
            }}>name</button>
            
        </div>
    );
}