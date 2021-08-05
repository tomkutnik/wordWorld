import "./style/header.css"

function Header () {
    return(
        <div className={"header"}>
            <img className={"header__pic"} src="./pic/_default/logoBg.png" alt=""/>
            <img className={"header__title"} src="./pic/_default/logoTextSqu.png" alt=""/>
        </div>
    )
}

export default Header