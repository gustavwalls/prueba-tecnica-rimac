import "./Hero.scss";
import familiaRimac from '.././../../../assets/Familia_rimac.png'
export default function Hero() {
    return (
        <section className='hero container'>
            <div className='hero__container'>
                <div>
                    <img src={familiaRimac} alt="familiaRimac" />
                </div>

                <div className="hero__info">
                    <span className="hero__promo">Seguro Salud Flexible</span>
                    <h1 className="hero__title">
                        Creado para ti y tu familia
                    </h1>
                    <p className="hero__paragraph">
                        Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.
                    </p>

                    <form>
                        <div className="form_row">
                            <div className="form_select">
                                <select name="documents" id="documents">
                                    <option value="dni">DNI</option>
                                    <option value="pasaport">Pasaport</option>
                                </select>
                            </div>
                            <div className="form_input">
                                <label>Nro. de documento</label>
                                <input type="text" />
                            </div>
                        </div>

                        <div className="form_input border_all">
                            <label>Celular</label>
                            <input type="text" className="border_all" />
                        </div>


                        <div className="form_checkbox">
                            <input type="checkbox" />
                            <label>Acepto lo Política de Privacidad</label>
                        </div>
                        <div className="form_checkbox">
                            <input type="checkbox" />
                            <label>Acepto la Política Comunicaciones Comerciales</label>
                        </div>


                        <p className="form_termcond">Aplican Términos y Condiciones.</p>



                        <button className="form_btn">Cotiza Aqui</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
