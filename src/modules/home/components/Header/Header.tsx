import "./Header.scss";
import logoRimac from '../../../../assets/logo_rimac.svg'
import logoPhone from '../../../../assets/icon_phone.svg'
export default function Header() {
  return (
    <header className='header container'>
        <div className='header__container'>
            <div>
            <img src={logoRimac} alt="Logo Rimac" style={{width:'100%',maxWidth:'73.19px'}}/>
            </div>
            <div className='header__contact'>
                <p className='header__text'>¡Compra por este medio!</p>
                <img src={logoPhone} alt="icon phone" style={{width:'100%',maxWidth:'20px',cursor:'pointer'}}/>
                <p className='header__number'>(01) 411 6001</p>
            </div>
        </div>
    </header>
  )
}
