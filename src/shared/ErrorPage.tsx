import React from 'react'
import { useRouteError } from 'react-router-dom';

function ErrorPage() {
    const error:any = useRouteError();
    console.log('ERROR 🔴🔴🔴',error.message);
  return (
    <div>ESTA PAGINA NO EXISTE</div>
  )
}

export default ErrorPage