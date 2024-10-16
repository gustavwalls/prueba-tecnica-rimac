import React from 'react'
import "./Header.scss";
export default function Header() {
  return (
    <header className='header container'>
        <div className='header__container'>
            <span>logo</span>
            <div className='header__contact'>
                <p className='header__text'>¡Compra por este medio!</p>
                <p className='header__number'>(01) 411 6001</p>
            </div>
        </div>
    </header>
  )
}
