import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import './components/navbar/styles.css';
import { text } from "stream/consumers";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <Navbar/>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500&display=swap" rel="stylesheet"></link>
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="landing-text" style={styles["landing-text"]}>
          <div className="text-wrapper-5" style={styles["property-expert-logo"]}>PROPERTY EXPERT</div>
          <br />
          <div className="div" style={styles.bajada}>Tu herramienta de decidir de manera <b>justa</b> y precisa  el valor de tu propiedad</div>
          <br />
          <br />
          <div className="unordered-list" style={styles["unordered-list"]}>
            <ul>
              <li>Compara tu propiedad con las de Airbnb y el Portal Inmobiliario</li>
              <li>Calcula el precio de mercado de tu propiedad mediante otras con características similares</li>
              <li>Descubre la oferta inmobiliaria en Santiago de Chile</li>
            </ul>
          </div>
        </div>
        <br />
      <div className="button-or-button">
        <Link href="/login" className="primary-button">Iniciar sesión</Link>
        <Link href="/register" className="primary-button">Registrarse</Link>
        <Link href='/home' className='primary-button'>Dev Mode</Link>
      </div>
    </div>
    </>
  );
}

const styles = {
  "landing-text": {
    height: '272px',
    // position: 'relative',
    width: '833px',
    // display: 'flex',
    lineHeight: '40px',
    fontSize: '28px'

  },
  "con-simples-pasos": {
    fontFamily: '"Inter-Light", Helvetica',
    fontSize: '28px',
    fontWeight: '400',
    lineHeight: '40px',
    top: '-2px',
    width: '833px'
  },
airbnb: {
  color: '#FF5A69',
  fontSize: '28px',
  fontWeight: '700',
  textDecorationThickness: '3px',
  textDecorationLine: 'underline',
  // textDecorationStyle: 'solid',
  letterSpacing: '1.4px'
},
"portal-inmobiliario": {
  color: '#E9D200',
  fontWeight: '700',
  textDecorationLine: 'underline',
  textDecorationThickness: '3px'

},
iniciar: {
  color: "#963BFF",
  textDecorationLine: 'underline',
  textDecorationThickness: '3px',
  fontWeight: '700'
},
"property-expert-logo": {
  fontSize: '76px',
  fontFamilt: '"300 Inter-Normal", Helvetica',
  letterSpacing: '9.6px',
  lineHeight: '15px',
  color: '#342B46',
  textAlign: 'center'
},
bajada:{
  color: '#342B46',
  fontFamily: 'Inter',
  fontSize: '22px',
  fontStyle: 'normal',
  fontWeight: '300',
  lineHeight: '1px',
  textAlign: 'center',
},
"unordered-list": {
  fontFamily: 'Inter',
  fontSize: '25px',
  fontStyle: 'normal',
  fontWeight: '300',
  lineHeight: '54px',
  color: '#342B46',
  listStyleType: 'circle'
},
"button-or-button": {
  display: 'flex',
  // flexDirection: 'column',
  alignItems: 'center',
  gap: '16px',
  marginTop: '20px'
},
"primary-button": {
  backgroundColor: '#963BFF',
  color: '#FFFFFF',
  fontFamily: 'Inter',
  fontSize: '20px',
  fontWeight: '300',
  lineHeight: '24px',
  padding: '12px 24px',
  borderRadius: '8px',
  border: 'none',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  textDecoration: 'none',
  textAlign: 'center',
  display: 'inline-block',
  marginTop: '20px',
}
}