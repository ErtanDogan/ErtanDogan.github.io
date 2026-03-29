import "./App.css"
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import emailjs from "@emailjs/browser"

async function handlePost({course, name, email}: {course:string, name:string, email:string}){
    const APP_ID = "${{ secrets.APP_ID }}"
    const baseURL = `https://script.google.com/macros/s/${APP_ID}/exec`
    
    try {
        const res = await fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify({"course":course, "name":name, "email":email}),
        })
        if(res.ok){
            //console.log('Request was successful:', res);
        }else{
            //console.log('Request Failed:', res);        
        }
    }catch(e){
        //console.error('Error during fetch:', e);
    }
}

function checkEmail(email : string){
    if(email == ""){
        return false
    }
    for(const letter of email){
        if(letter == " "){
            return false
        }
    }
    return true
}

export default function Registration({course} : {course:string}){
    const [deleted, changeDeleted] = useState(false);
    const [name, changeName] = useState("");
    const [email, changeEmail] = useState("");

    if(deleted){
        return(<></>);
    }

    else{
        return(
            <>
                <div className="registration">
                    <h5>Student Name: </h5>
                    <input className="textbox" type="text" onChange={(event) => changeName(event.target.value)}></input>
                    <h5>Parent Email: </h5>
                    <input className="textbox" type="email" onChange={(event) => changeEmail(event.target.value)}></input>

                    <div className="buttons">
                        <button id="Approve" onClick={(event) => {
                            if(name != "" && checkEmail(email)){
                                handlePost({course, name, email})
                                toast.success('Registered Student!', {
                                    position: "top-right",
                                    autoClose: 3000,
                                    hideProgressBar: false,
                                    closeOnClick: false,
                                    pauseOnHover: true,
                                    progress: undefined,
                                    theme: "light",
                                })

                                emailjs.send("service_jesvtdt","template_wmw8mjo", {
                                    student: name,
                                    course: course,
                                    email: email
                                }, {publicKey: "u5qJuArLGTc5EgV1N"});

                                changeDeleted(true)
                            } else {
                                toast.error('Invalid Name or Email!', {
                                    position: "top-right",
                                    autoClose: 3000,
                                    hideProgressBar: false,
                                    closeOnClick: false,
                                    pauseOnHover: true,
                                    progress: undefined,
                                    theme: "light",
                                })
                            }
                        }}>&#10004;</button>
                        <button id="Cancel" onClick={(event)=>changeDeleted(true)}>&#10006;</button>
                    </div>
                </div>
            </>
        )
    }
}
