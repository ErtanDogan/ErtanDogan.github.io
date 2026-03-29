import { useState } from "react";
import "./App.css"

function Section({header, img_src, body}: {header:string, img_src?:string, body?:string}){
    if(img_src){
        return (
        <>
            <div className="subsection">
                <h1>{header}</h1>
                <img src={img_src} height="20%" width="20%" />
                <p>{body}</p>
            </div>
        </>
    )
    } else {
        return (
            <>
                <div className="subsection">
                    <h1>{header}</h1>
                    <p>{body}</p>
                </div>
            </>
        )
    }
}

export default Section