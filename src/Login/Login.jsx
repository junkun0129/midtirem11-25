import ReactDOM from "react-dom";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useReducer } from "react";


export default function Login({setUser}){
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [personalInfo, setPersonalInfo] = useState(null);

    
    
    useEffect(()=>{
        fetchUserInfo();
    },[])

    


    
    const fetchUserInfo = async()=>{
        try {
            
            const response = await fetch("http://jsonblob.com/api/1045638803993411584");
            const result = await response.json();
            console.log(result);
            setPersonalInfo(result);
        } catch (error) {
            console.log(error);
        }
    }

    const comfirmLogiin =()=>{
        
        const isEmail = personalInfo.some((one)=>one.Email === email);
        const isPassword = personalInfo.some((one)=>one.Password === password);
        const correctEmailIndex = personalInfo.findIndex((info)=>info.Email === email);
        console.log(isEmail)
        console.log(isPassword)
        if(isEmail){
            if(isPassword){
                console.log("login!");
                //setUser(personalInfo[correctEmailIndex]);
                setUser(personalInfo[correctEmailIndex])
            }else{
                console.log("password went wrong")
            }
        }else{
            console.log("we dont have such acaunts")
        }
    }
    

    return(
        <>
            <h1>login page</h1>
           
                <input type="email" onChange={(e)=>setemail(e.target.value)}/>email<br></br>
                <input type="password" onChange={(e)=>setpassword(e.target.value)}/>password<br></br>
                <button onClick={comfirmLogiin}>login</button>
            
        </>
    )
}