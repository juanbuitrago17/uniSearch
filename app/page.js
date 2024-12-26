'use client'; // Marca el archivo como componente de cliente
import React, { useState } from 'react';
import Results from './ui/results'; // Asegúrate de tener este componente
import data from "../data/planets.json"; // Los planetas
import { searchInObjects } from "./search";
import '@/public/images/alien.png'

import Head from './ui/head';
import Feature from './ui/feature';
import Section from './ui/section';
import Footer from './ui/footer';
import Error from './ui/error';

export default function Home() {
  const [query, setQuery] = useState(''); // Estado para la consulta de búsqueda
  const [filteredResults, setFilteredResults] = useState(data); // Estado para los resultados filtrados
  const [error, setError] = useState(false); // Estado para manejar el error



  // Función para manejar la búsqueda
  const handleSearch = (e) => {
    e.preventDefault(); // Evita la recarga de la página
    const results = searchInObjects(data, query); // Filtra los planetas según la consulta
    setFilteredResults(results); // Actualiza el estado con los resultados filtrados

    // Si no hay resultados, muestra el mensaje de error
    if (results.length === 0) {
      setError(true);
    } else {
      setError(false);
    }
  };

  // Función para manejar el cambio en el campo de búsqueda
  const handleInputChange = (e) => {
    setQuery(e.target.value); // Actualiza el valor de la consulta
  };

  return (
    <>
      <Head />
      
        {/* Hero Section */}
        <section className="bg-gray-800 py-20 text-center">
          <div className="container mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Explore the Universe with Unisearch</h2>
            <p className="text-lg text-gray-300 mb-8">Discover planets, moons, constellations, and more—all in one place.</p>
            <form onSubmit={handleSearch} className="max-w-3xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  value={query}
                  onChange={handleInputChange} // Captura la consulta del usuario
                  placeholder="Search for planets, moons, or constellations..."
                  className="w-full py-3 px-4 text-gray-900 rounded-lg outline-none"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700"
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          {/* Mostrar los resultados filtrados o el mensaje de error */}
          {error ? (
            <Error/>
          ) : (
            <Results data={filteredResults} />
          )}
        </section>
        <Feature />
        <Section />
        <Footer />
    </>
  );
}
