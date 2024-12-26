"use client";

import React, { useState } from 'react';
import './header.css';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="bg-gray-800 border-b border-gray-700">
            <div className="mx-auto py-4 px-6 casa" >
                <h1 className="text-3xl font-bold text-white">Unisearch</h1>
                <div className="menu-container">
                    {/* Mostrar solo el ícono en pantallas pequeñas */}
                    <label 
                        htmlFor="menu-toggle" 
                        className={`menu-icon`}
                        onClick={toggleMenu}
                    >
                        {menuOpen ? '✖' : '☰'}
                    </label>

                    {/* Menú en la barra de título (solo en pantallas grandes) */}
                    <nav className={`menu ${menuOpen ? 'open' : ''}`}>
                        <a href="#" className="menu-item">Home</a>
                        <a href="#" className="menu-item">About</a>
                        <a href="#" className="menu-item">Features</a>
                        <a href="#" className="menu-item">Contact</a>
                    </nav>
                </div>
            </div>
        </header>
    );
}
