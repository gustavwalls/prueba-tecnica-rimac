import React from 'react'
import "./Header.scss";
//import logoRimac from '../../../../assets/Familia_rimac.png'
export default function Header() {
  return (
    <header className='header container'>
        <div className='header__container'>
            <div>
           <img src="" alt="" />
            </div>
            <div className='header__contact'>
                <p className='header__text'>¡Compra por este medio!</p>
                <p className='header__number'>(01) 411 6001</p>
            </div>
        </div>
    </header>
  )
}
