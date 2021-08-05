import "../style/loginInput.css"

function Input({ type, valid, onChange, lableText }){

    
    return( <>
            <label className={"login__label"}>{lableText}</label>
            <input className={valid ? "login__input" : "login__input login__input-invalid"} type={type} onChange={onChange}></input>
        </>
    )
}

export default Input