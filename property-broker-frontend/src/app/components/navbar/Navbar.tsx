'use client'

import React from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import "./styles.css";

export default function Navbar() {
    const pathname = usePathname();

    const buttons = [
        { href: '/',           label: 'Home',       showOn: ['/', '/login', '/register'] },
        { href: '/login',      label: 'Inicia Sesión',      showOn: ['/', '/about'] },
        { href: '/register',   label: 'Registro',   showOn: ['/', '/login'] },
        { href: '/dashboard',  label: 'Dashboard',      showOn: ['/dashboard'] },
        { href: '/home',       label: 'Inicio',     showOn: ['/add-property', '/properties', '/dashboard']},
        { href: '/profile',    label: 'Perfil',     showOn: ['/dashboard'] },
        { href: '/',           label: 'Cerrar Sesión',      showOn: ['/add-property', '/dashboard', '/properties', '/home']}
    ];

    const filtered = buttons.filter(b => b.showOn.includes(pathname))

  return (
    <header className="navbar">
      <div className="navbar-logo"><a href="/">PROPERTY&nbsp;EXPERT</a></div>

      <nav className="navbar-links">
        {filtered.map(btn => (
          <Link key={btn.href} href={btn.href} className="nav-btn">
            {btn.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};


