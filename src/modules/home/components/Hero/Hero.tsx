import React from "react";
import { useForm } from "react-hook-form";
import "./Hero.scss";
import familiaRimac from '.././../../../assets/Familia_rimac.png';
import { FormQuote } from "./interfaces/form.interface";
import Error from "../../../../shared/Error";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  const { register: registerDesktop, handleSubmit: handleSubmitDesktop, formState: { errors: errorsDesktop } } = useForm<FormQuote>();

  const { register: registerMobile, handleSubmit: handleSubmitMobile, formState: { errors: errorsMobile } } = useForm<FormQuote>();

  const onSubmitDesktop = (data: FormQuote) => {
    console.log('Formulario de escritorio enviado:', data);
    navigate("/resume");
  };

  const onSubmitMobile = (data: FormQuote) => {
    console.log('Formulario de móvil enviado:', data);
    navigate("/resume");
  };

  return (
    <section className='hero container'>
      <div className='hero__container'>
        <div>
          <img src={familiaRimac} alt="familiaRimac" className="hero__img" />
        </div>

        <div className="hero__info">
          <span className="hero__promo">Seguro Salud Flexible</span>
          <h1 className="hero__title">Creado para ti y tu familia</h1>
          <p className="hero__paragraph">
            Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.
          </p>

          {/* Formulario de Escritorio */}
          <form onSubmit={handleSubmitDesktop(onSubmitDesktop)} className="hero__form">
            {errorsDesktop.documentNumber && <Error>{errorsDesktop.documentNumber.message}</Error>}
            <div className="form_row">
              <div className="form_select">
                <select {...registerDesktop("documentType", { required: "Selecciona un tipo de documento" })}>
                  <option value="dni">DNI</option>
                  <option value="pasaport">Pasaporte</option>
                </select>
              </div>

              <div className="form_input">
                <label>Nro. de documento</label>
                <input 
                  type="text" 
                  {...registerDesktop("documentNumber", { 
                    required: "El número de documento es obligatorio", 
                    pattern: {
                      value: /^[0-9]{8,12}$/, 
                      message: "Número de documento no válido" 
                    }
                  })} 
                />
              </div>
            </div>
            {errorsDesktop.phone && <Error>{errorsDesktop.phone.message}</Error>}
            <div className="form_input border_all">
              <label>Celular</label>
              <input 
                type="text"
                className="border_all"
                {...registerDesktop("phone", { 
                  required: "El número de celular es obligatorio", 
                  pattern: {
                    value: /^[0-9]{9}$/, 
                    message: "Número de celular no válido" 
                  }
                })} 
              />
            </div>

            <div className="form_checkbox">
              <input 
                type="checkbox" 
                {...registerDesktop("privacyPolicy", { required: "Debes aceptar la Política de Privacidad" })} 
              />
              <label>Acepto la Política de Privacidad</label>
            </div>
            {errorsDesktop.privacyPolicy && <Error>{errorsDesktop.privacyPolicy.message}</Error>}

            <div className="form_checkbox">
              <input 
                type="checkbox" 
                {...registerDesktop("commercialPolicy", { required: "Debes aceptar la Política de Comunicaciones Comerciales" })} 
              />
              <label>Acepto la Política de Comunicaciones Comerciales</label>
            </div>
            {errorsDesktop.commercialPolicy && <Error>{errorsDesktop.commercialPolicy.message}</Error>}

            <p className="form_termcond">Aplican Términos y Condiciones.</p>

            <button className="form_btn" type="submit">Cotiza Aquí</button>
          </form>
        </div>
      </div>

      {/* Formulario de Móvil */}
      <div className="hero__movil">
        <p className="hero__movil__paragraph">
          Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.
        </p>

        <form onSubmit={handleSubmitMobile(onSubmitMobile)} className="hero__movil__form">
          {errorsMobile.documentNumber && <Error>{errorsMobile.documentNumber.message}</Error>}

          <div className="form_row">
            <div className="form_select">
              <select {...registerMobile("documentType", { required: "Selecciona un tipo de documento" })}>
                <option value="dni">DNI</option>
                <option value="pasaport">Pasaporte</option>
              </select>
            </div>

            <div className="form_input">
              <label>Nro. de documento</label>
              <input 
                type="text" 
                {...registerMobile("documentNumber", { 
                  required: "El número de documento es obligatorio", 
                  pattern: {
                    value: /^[0-9]{8,12}$/, 
                    message: "Número de documento no válido" 
                  }
                })} 
              />
            </div>
          </div>
          {errorsMobile.phone && <Error>{errorsMobile.phone.message}</Error>}
          <div className="form_input border_all">
            <label>Celular</label>
            <input 
              type="text"
              className="border_all"
              {...registerMobile("phone", { 
                required: "El número de celular es obligatorio", 
                pattern: {
                  value: /^[0-9]{9}$/, 
                  message: "Número de celular no válido" 
                }
              })} 
            />
          </div>

          <div className="form_checkbox">
            <input 
              type="checkbox" 
              {...registerMobile("privacyPolicy", { required: "Debes aceptar la Política de Privacidad" })} 
            />
            <label>Acepto la Política de Privacidad</label>
          </div>
          {errorsMobile.privacyPolicy && <Error>{errorsMobile.privacyPolicy.message}</Error>}

          <div className="form_checkbox">
            <input 
              type="checkbox" 
              {...registerMobile("commercialPolicy", { required: "Debes aceptar la Política de Comunicaciones Comerciales" })} 
            />
            <label>Acepto la Política de Comunicaciones Comerciales</label>
          </div>
          {errorsMobile.commercialPolicy && <Error>{errorsMobile.commercialPolicy.message}</Error>}

          <p className="form_termcond">Aplican Términos y Condiciones.</p>

          <button className="form_btn" type="submit">Cotiza Aquí</button>
        </form>
      </div>
    </section>
  );
}
