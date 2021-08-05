import { useState } from "react";
import "./style/login.css"
import Button from "./components/LoginButton";
import Input from "./components/LoginInput";


function Login({ handleToUpdate }) {

    const [validPassword, setValidPassword] = useState(true)
    const [validMail, setValidMail] = useState(true)
    const [mail, setMail] = useState()
    const [password, setPassword] = useState()

    const emailHandle = (event) => {
        const email = event.target.value;

        function validateEmail(email) {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }

        if (!validateEmail(email)) {
            setValidMail(false)
        }
        if (validateEmail(email)) {
            setMail(email)
            setValidMail(true)
        }
    }

    const passwordHandle = (event) => {
        const password = event.target.value;

        let validPassword = 0;


        let lowerCaseLetters = /[a-z]/g;
        if (password.match(lowerCaseLetters)) {
            validPassword++
        } else {
            validPassword = 0
        }

        let upperCaseLetters = /[A-Z]/g;
        if (password.match(upperCaseLetters)) {
            validPassword++
        } else {
            validPassword = 0
        }

        let numbers = /[0-9]/g;
        if (password.match(numbers)) {
            validPassword++
        } else {
            validPassword = 0
        }

        if (password.length >= 8) {
            validPassword++
        } else {
            validPassword = 0
        }

        if (validPassword === 4) {
            setValidPassword(true);
            setPassword(password)
        } else {
            setValidPassword(false);
        }
    }



    const login = () => {
        let loopBreaker = false;
        const someLoginData = JSON.parse(localStorage.getItem("login"))
        if (!loopBreaker) {
        for (let i = 0; i < someLoginData.length; i++) {
                let tempLoginData = someLoginData[i]
                if (tempLoginData.email === mail) {
                    if (tempLoginData.password === password) {
                        localStorage.setItem("logged", true);
                        localStorage.setItem("loggedID", tempLoginData.id);
                         loopBreaker = true;
                         handleToUpdate();
                    }
                }
                
            }
        }
        if(!loopBreaker){
            window.alert("Zły mail, albo hasło!")
        }
    }


    return (
        <div className={"login"}>
            <img className={"login__picBg"} src="./pic/_default/login.png" alt=""/>
            <div className={"login__formBox"}>
            <form className={"login__form"}>
                <Input type={"text"} lableText={"E-mail:"} valid={validMail} onChange={emailHandle}/>
                <Input type={"password"} lableText={"Hasło:"} valid={validPassword} onChange={passwordHandle}/>
            </form>
            {password!==undefined && mail!==undefined & validMail===true && validPassword===true ? <Button type="submit" text="Zaloguj" onClick={()=>login(true)}/> : <Button text="Zaloguj" mod={"-notValid"}/>}
            <Button mod={""} text="Przypomnij Hasło"/>
        </div></div>
    )
}

export default Login