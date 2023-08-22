import React from "react"
import logo from "../Assets/logo.png"
function Footer(){
    return(
        <div style={{position: 'relative',width: '92.4375rem',height: '13.625rem',background: '#E9EDC9'}}>
            <img src={logo} alt="logo" style={{width:"5.625rem",height:"3.125rem", position: 'absolute',left: '2.29%',right: '76.6%',top: '6.88%',bottom: '72.02%',
}}/>
            <p style={{position: 'absolute', left: '2.95%', right: '61.21%', top: '27.98%',bottom: '59.17%',fontFamily: 'Inter',fontStyle: 'normal',fontWeight: '300',fontSize: '1rem',lineHeight: '1.1875rem',display: 'flex',alignItems: 'center',color: '#000000'}}>
    stay in touch with us</p>

            <p style={{position: 'absolute',left: '2.95%',right: '69.89%',top: '45.41%',bottom: '45.87%',fontFamily: 'Inter',fontStyle: 'normal',fontWeight: '300',fontSize: '0.8125rem',lineHeight: '1rem',display: 'flex',alignItems: 'center',color: '#000000'}}>
    Enter your email</p>
            <input type='text' placeholder="example@email.com" style={{position: 'absolute',left: '2.29%',right: '71.85%',top: '58.72%',bottom: '27.98%',background: '#D9D9D9',borderRadius: '6.25rem',paddingLeft: '1.25rem'}}/>

        </div>
    )
}
export default Footer