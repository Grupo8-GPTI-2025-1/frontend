import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import './components/navbar/styles.css';
import { text } from "stream/consumers";
import Link from "next/link";
import './homepage.css'

export default function Home() {
  return (
    <>
    <Navbar/>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500&display=swap" rel="stylesheet"></link>
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="landing-text">
          <div className="property-expert-logo">PROPERTY EXPERT</div>
          <br />
          <div className="bajada">Tu herramienta de decidir de manera <b>justa</b> y <b>precisa</b>  el valor de tu propiedad</div>
          <br />
          <br />
          <div className="unordered-list">
            <ul>
              <li> &#129514; Compara tu propiedad con las de <b className="airbnb">Airbnb</b> y el <b className="portal-inmobiliario">Portal Inmobiliario</b></li>
              <li>&#128176; Calcula el precio de mercado de tu propiedad mediante otras con características similares</li>
              <li> &#128269; Descubre la oferta inmobiliaria en Santiago de Chile</li>
            </ul>
          </div>
        </div>
        <br />
      <div className="button-or-button">
        <Link href="/login" className="primary-button">Iniciar sesión</Link>
        <Link href="/register" className="primary-button">Registrarse</Link>
        <Link href='/home' className='primary-button'>Dev Mode</Link>
      </div>
      </main>
    </div>
    </>
  );
}