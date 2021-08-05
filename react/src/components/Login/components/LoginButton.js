import "../style/loginButton.css"


function Button ({ text, mod, onClick}){
    let style;
    const tempLayout = "login__btn";
    if(mod===""){
        style=tempLayout;
    }else{
        style=tempLayout+" "+tempLayout+mod
    }


    return(
     <button className={style} onClick={onClick}>{text}</button>
    )
}

export default Button