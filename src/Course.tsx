import "./App.css";
import Registration from "./Registration";
import { useState } from "react";

export default function Course({name} : {name:string}){
    const [registrationList, changeRegistrationList] = useState(0);
    return(
        <>
            <div className="course">
                <div className="courseHeader">
                    <h3>{name}</h3>
                    <button onClick={(event) => changeRegistrationList(registrationList + 1)}>Register Student</button>
                </div>
                {Array(registrationList).fill(null).map((item, index) => (
                    <>
                        <Registration course={name}/>
                    </>
                ))}
            </div>
        </>
    )
}