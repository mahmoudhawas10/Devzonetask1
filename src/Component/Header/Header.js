import { Component } from "react";
import logo from "./logo.png"
class Header extends Component{
render (){
    return(
        <header>
            <nav>
            <img src ={logo} />
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Shop</a></li>
                <li><a href="">Contact</a></li>
            </ul>
            </nav>
        </header>
        
    )
}
}
export default Header