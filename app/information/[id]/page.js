'use client'; // Directiva para que este componente se ejecute en el cliente

import React, { useState } from 'react';
import { useParams } from 'next/navigation'; // Para obtener el parámetro dinámico
import data from '@/data/planets.json'; // Los datos de los planetas
import './styleInformation.css';

export default function Information() {
  const { id } = useParams(); // Obtener el parámetro dinámico 'id' de la URL

  // Buscar el planeta correspondiente a ese id
  const planet = data.find((item) => item._id === id);

  if (!planet) {
    return <div>Planeta no encontrado.</div>;  // Si no encontramos el planeta, mostramos un mensaje
  }

  const [mainImage, setMainImage] = useState(planet.image_url);

  const handleImageClick = (url) => {
    setMainImage(url);  // Cambia la imagen principal al hacer clic
  };

  return (
    <div className='main'>
      <div className='principal container mx-auto'>
        <div className='imagenArrow'>
          <a href="/" className='href-arrow'><img src='/images/arrow.png' alt="arrow" /></a>
        </div>
        <div className='content-planet'>
          <div className='pricipal-description'>
            <div className="image">
              <img src={mainImage} alt={planet.name} />
            </div>
            <a href="#">
              <div className="carousel">
                {
                  planet.images && planet.images.map((url, index) => (
                    <img
                      className="imagen-carousel"
                      key={url || index}
                      src={url}
                      alt={`planet-carousel-${index}`}
                      onClick={() => handleImageClick(url)} // Cambia la imagen principal al hacer clic
                    />
                  ))
                }
              </div>
            </a>
          </div>
          <div className='secundary-description'>
            <div className='text-info'>
              <h1 className='title'>{planet.name}</h1>
              <p className='description'>{planet.description}</p>
            </div>
            <div className="table">
              <div className="row">
                <div className="cell">Fecha de Descubrimiento</div>
                <div className="cell">{planet.discovery_date}</div>
              </div>
              <div className="row">
                <div className="cell">Masa</div>
                <div className="cell">{planet.mass} kg</div>
              </div>
              <div className="row">
                <div className="cell">Radio</div>
                <div className="cell">{planet.radius} km</div>
              </div>
              <div className="row">
                <div className="cell">Periodo Orbital</div>
                <div className="cell">{planet.orbital_period} días</div>
              </div>
              <div className="row">
                <div className="cell">Distancia desde la Tierra</div>
                <div className="cell">{planet.distance_from_earth} AU</div>
              </div>
              <div className="row">
                <div className="cell">Number of moons</div>
                <div className="cell">{planet.additional_info?.number_of_moons}</div>
              </div>
              <div className="row">
                <div className="cell">Atmosphere composition</div>
                <div className="cell">{planet.additional_info?.atmosphere_composition}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
