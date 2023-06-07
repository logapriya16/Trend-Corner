import React from "react";
import {AiFillGithub} from "react-icons/ai"
import {AiOutlineInstagram} from "react-icons/ai"
import {BsFillPersonVcardFill} from "react-icons/bs"
import "./footer.css"
export const Footer =()=>{
    return <div className="footer-container">
        
        <div>
            
            <p></p>
            <ul type="none" className="footer-items" >
                <li  className="footer-links" > <a href="https://slogaapriya@gmail.com/"> <AiFillGithub className="footer-links" /></a></li>
                <li className="footer-links"> <a href="https://www.linkedin.com/in/logapriya-s-04ba9b222"><AiOutlineInstagram className="footer-links"/></a> </li>
                <li className="footer-links"><a href="https://github.com/logapriya16/"> <BsFillPersonVcardFill className="footer-links"/></a></li>
            </ul>
            <span>Privacy Policy <br/>Terms of Use</span><br/>
            <a href="" style={{textDecoration:"none"}}>trencorner@2023</a>
             </div>
    </div>
} 