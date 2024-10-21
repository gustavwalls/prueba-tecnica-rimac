import React from 'react'
import "./Menu.scss";
import numberOne from '../../../assets/numberOne.svg'
import line from '../../../assets/line.svg'
export default function MenuResume() {
  return (
    <section className='menuResume'>
        <div>
            <img src={numberOne} alt="" />
        </div>
        <p>Planes y coberturas</p>
        <div>
            <img src={line} alt="" />
        </div>
        <div>
            <img src={numberOne} alt="" />
        </div>
        <p>Resumen</p>
    </section>
  )
}
