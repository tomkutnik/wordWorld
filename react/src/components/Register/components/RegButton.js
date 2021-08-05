import "../style/regButton.css"


function Button ({ text, mod, onClick, src}){
    let style;
    const tempLayout = "reg__btn";
    if(mod===undefined){
        style=tempLayout;
    }else{
        style=tempLayout+" "+tempLayout+mod
    }

    let button;
    if (src===undefined){
        button =  <button className={style} onClick={onClick}>{text}</button>
    } else {
        button = <button className={style+"-pic"} onClick={onClick}><img src={src} alt=""/><span>{text}</span></button>
    }


    return(
        <div>
     {button}
     </div>
    )
}

export default Button