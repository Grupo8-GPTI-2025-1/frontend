import Navbar from "./components/navbar/Navbar";
import './components/navbar/styles.css';
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen px-8 pb-20 pt-12 sm:px-20 font-inter gap-16">
        <main className="flex flex-col gap-8 items-center max-w-4xl text-center">

          <h1 className="text-6xl font-light tracking-widest text-[#342B46] -mt-10">PROPERTY EXPERT</h1>

          <p className="text-base sm:text-lg text-[#342B46] font-light -mt-8 pt-0">
            Tu herramienta para decidir de manera <b className="font-black">justa</b> y <b className="font-black">precisa</b> el valor de tu propiedad
          </p>

          <ul className="text-lg sm:text-xl text-[#342B46] font-light list-none text-left leading-[3.5rem]">
            <li>🏠🔍 Compara tu propiedad con las de Airbnb y el Portal Inmobiliario</li>
            <li>🧮💲 Calcula el precio de mercado mediante otras con características similares</li>
            <li>📍🇨🇱 Descubre la oferta inmobiliaria en Santiago de Chile</li>
          </ul>
          
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Link href="/login" className="bg-[#963BFF] text-white px-6 py-3 rounded-md text-lg hover:bg-purple-700 transition">
              Iniciar sesión
            </Link>
            <Link href="/register" className="bg-[#963BFF] text-white px-6 py-3 rounded-md text-lg hover:bg-purple-700 transition">
              Registrarse
            </Link>
            <Link href="/home" className="bg-[#963BFF] text-white px-6 py-3 rounded-md text-lg hover:bg-purple-700 transition">
              Dev Mode
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
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
  fontFamily: '"300 Inter-Normal", Helvetica',
  letterSpacing: '9.6px',
  lineHeight: '1.1',
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