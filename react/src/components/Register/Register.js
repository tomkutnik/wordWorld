import {  useState } from "react";
import Button from "./components/RegButton";
import Input from "./components/RegInput";
import "./style/register.css"

function Register() {


  const [validPassword, setValidPassword] = useState(true)
  const [validMail, setValidMail] = useState(true)
  const [validName, setValidName] = useState(true)
  const [mail, setMail] = useState()
  const [name, setName] = useState()
  const [password, setPassword] = useState()
  const [popup, setPopup] = useState(false);


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



  const nameHandle = (event) => {
    const name = event.target.value;
    let validNameCount = 0;
    const nameArr = name.split("")

    let lowerCaseLetters = /[a-z]/g;
    if (nameArr.length > 1) {
      for (let i = 1; i < nameArr.length; i++) {
        if (nameArr[i].match(lowerCaseLetters)) {
          validNameCount = 1
        } else {
          validNameCount = 0
        }
      }
    }

    if (name.length >= 3) {
      validNameCount++
    } else {
      validNameCount = 0
    }


    let upperCaseLetters = /[A-Z]/g;
    if (nameArr.length > 0) {
      if (nameArr[0].match(upperCaseLetters)) {
        validNameCount++
      } else {
        validNameCount = 0
      }
    }

    let specialSymbols = /^[A-Za-z]+$/;
    if (!name.match(specialSymbols)) {
      validNameCount = 0
    } else {
      validNameCount++
    }

    if (validNameCount === 4) {
      setValidName(true);
      setName(name)
    } else {
      setValidName(false);
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


  const accRegister = () => {
    console.log()
    let usedMail = false;
    const loginData = JSON.parse(localStorage.getItem("login"))

    for (let i = 0; i < loginData.length; i++) {
      let tempLoginData = loginData[i]
      if (!usedMail) {
        if (tempLoginData.email === mail) {
          usedMail = true;
        }
      }
    }
    if (!usedMail) {
      let tempData = loginData;
      let tempPlayerData = JSON.parse(localStorage.getItem("playerData"));
      let tempId = loginData[loginData.length - 1].id;
      tempData.push({ id: tempId + 1, name: name, email: mail, password: password })
      localStorage.setItem("login", JSON.stringify(tempData));
      tempPlayerData.push({id: tempId+1, newChar: true, name: name, race: "", class: "", })
      localStorage.setItem("playerData", JSON.stringify(tempPlayerData));
      setPopup(false);
    } else {
      window.alert("Istnieje konto zarejestrowane na tym mailu!")
    }

  }


  return (
    <div className={"reg"}>
      <Button text="Rejestracja" onClick={() => setPopup(!popup)} src="./pic/_default/regButton.png" alt=""/>
      <div className={"reg__wrapper"} style={ popup ? {diplay: "block"} : {display: "none"}}>
        <div className={"reg__formBox"}>
        <img className={"reg__picBg"} src="./pic/_default/reg.png" alt=""/>
        <Button mod="-exit" text="X" onClick={() => setPopup(!popup)} />
        <div className={"reg__form"}>
          <form>

            <Input type={"text"} lableText={"Imię Postaci:"} valid={validName} onChange={nameHandle} />
            <Input type={"text"} lableText={"E-mail:"} valid={validMail} onChange={emailHandle} />
            <Input type={"password"} lableText={"Hasło:"} valid={validPassword} onChange={passwordHandle} />
            </form>
            {password!==undefined && mail!==undefined && name!==undefined & validMail===true && validPassword===true && validName===true ? <Button text="Zarejestruj" onClick={accRegister}/> : <Button text="Zarejestruj" mod={"-notValid"}/>}
        
            </div></div>
      </div>
    </div>
  )
}

export default Register