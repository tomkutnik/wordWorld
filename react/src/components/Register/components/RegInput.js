import "../style/regInput.css"

function Input({ type, valid, onChange, lableText }){
    let layout = "reg"
    let style = layout+"__input";
    
    return( <>
            <label className={layout+"__label"}>{lableText}</label>
            <input className={valid ? style : style+" "+layout+"__input-invalid"} type={type} onChange={onChange}></input>
        </>
    )
}

export default Input