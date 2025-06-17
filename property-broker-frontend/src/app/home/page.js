import Navbar from "../components/navbar/Navbar"
import Link from "next/link"
import './userhomepage.css'

export default function UserHomepage() {
    return(
        <>
        <Navbar />
        <main className="container">
            <div>
                <h1 className="hola-usuario">Hola, Usuario!</h1>
            </div>
            <div className="button-container">
                <Link href="/properties" className="primary-button">Ver tus propiedades</Link>
                <br />
                <Link href="/add-property" className="primary-button">Agregar nueva propiedad</Link>
            </div>
        </main>
        </>
    )
}