import React from 'react'
import "./Footer.scss";
import logoRimacFooter from '../../../../assets/logo_rimac_footer.svg'
function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__container container' >
                <div>
                    <img src={logoRimacFooter} alt="Logo Rimac" style={{ width: '100%', maxWidth: '73.19px' }} />
                </div>
                <div className='footer__contact'>
                    <p className='footer__text'>© 2023 RIMAC Seguros y Reaseguros.</p>
                </div>
            </div>

        </footer>
    )
}

export default Footer