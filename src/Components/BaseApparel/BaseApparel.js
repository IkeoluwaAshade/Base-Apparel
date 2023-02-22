
import React from 'react'
import './BaseApparel.css'
import Logo from '../Images/logo.svg'
import heroDesktop from '../Images/hero-desktop.jpg'
import heroMobile from '../Images/hero-mobile.jpg'
import iconArrow from '../Images/icon-arrow.svg'
import iconError from '../Images/icon-error.svg'



const BaseApparel = () => {
  return (
    <div className='Overall-Background'>

        <div>

            <div className='LogoDiv'>
                <img className="" src={Logo} alt="logo" />
            </div>

            <div>
                <img className='mobile' src={heroMobile} alt='Hero-mobile'/>
            </div> 

            <div className='Desktop'>
                <img id="desktopImage" src={heroDesktop} alt="Hero-Desktop" />
            </div>



            <div className='mainHeader'>
                <h1><span>WE'RE</span></h1> <br/> 
                <h1 className='coming-soon'>COMING SOON</h1>
            </div>

            <div className='mainParagraph'>
                <p id='t-1'>We're coming soon Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>
            </div>

            <div className='emailSection'>
                <form>
                
                    <label for='text'>Email Address:
                    <input className='' type='email'></input>
                    </label>
                    <button><img id="" src={iconArrow} alt="icon-arrow" /></button>
                </form>
            </div>    
        </div>    
        

    </div>
  )
}

export default BaseApparel