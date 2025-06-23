'use client';

import { useState } from 'react';
import Dropdown from '../components/Dropdown';
import Navbar from '../components/navbar/Navbar';
import './styles.css';

const comunaOptions = [
  'Cerrillos',
  'Cerro Navia',
  'Conchalí',
  'El Bosque',
  'Estación Central',
  'Huechuraba',
  'Independencia',
  'La Cisterna',
  'La Florida',
  'La Pintana',
  'La Granja',
  'La Reina',
  'Las Condes',
  'Lo Barnechea',
  'Lo Espejo',
  'Lo Prado',
  'Macul',
  'Maipú',
  'Ñuñoa',
  'Pedro Aguirre Cerda',
  'Peñalolén',
  'Providencia',
  'Pudahuel',
  'Quilicura',
  'Quinta Normal',
  'Recoleta',
  'Renca',
  'San Miguel',
  'San Joaquín',
  'San Ramón',
  'Santiago',
  'Vitacura',
].map((o) => ({ label: o, value: o }));

const typeOptions = [
  'Departamento',
  'Casa',
  'Otro',
].map((o) => ({ label: o, value: o }));

const nOfBathroomsOptions = [
  1,2,3,4,5,6,7,8,
].map((o) => ({ label: o, value: o }));

export default function AddProperties() {

  // seteo automatico de id numérico
  const [id, setId] = useState(Math.floor(Math.random() * 1000));
  // Modo del formulario: 'Airbnb' o 'Portal'
  const [description, setDescription] = useState<'Airbnb' | 'Portal'>('Airbnb');

  // Campos compartidos
  const [property_type, setTipoPropiedad] = useState('');
const [rooms, setPiezas]   = useState<number | ''>('');
const [toilets, setBanos] = useState<number | ''>('');
  const [location, setUbicacion] = useState('');
  // Campo exclusivo de Airbnb
  const [maxHuespedes, setMaxHuespedes] = useState('');

  const price = 0.0; // Este campo no se edita en el formulario, placeholder
  const url = 'https://placeholder.com'; // URL placeholder tambien

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const data = {
      id,
      name: `Propiedad numero ${id}  del usuario comparando en ${description}`, // Nombre genérico, podrías cambiarlo por
      description: description,
      property_type,
      ...(description === 'Airbnb' && { maxHuespedes }),
      rooms: Number(rooms) || 0 ,
      toilets: Number(toilets) || 0,
      location,
      price,
      url
    };
    console.log('Enviando datos:', data);
    // hacer llamado a localhost:4000
    fetch('http://localhost:4000/properties', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([data]),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Respuesta del servidor:', data);
        // Aquí podrías redirigir o mostrar un mensaje de éxito
      })
      .catch((error) => {
        console.error('Error al enviar los datos:', error);
      }
    )

  }

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-lg p-4">
        <h1 className="text-2xl font-semibold mb-4">Agregar Propiedad</h1>

        <button
          type="button"
          onClick={() =>
            setDescription((m) => (m === 'Airbnb' ? 'Portal' : 'Airbnb'))
          }
          className="toggle-btn mb-6 px-4 py-2 bg-gray-200 rounded"
         >
          Comparando con{' '}
          {description === 'Airbnb' ? 'Airbnb' : 'Portal Inmobiliario'}
        </button>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Tipo de formulario (oculto) */}
          <input type="hidden" name="description" value={description} />

          {/* Campo compartido: Tipo de propiedad */}
          <Dropdown
            label="Tipo de propiedad"
            options={typeOptions}
            value={property_type}
            onChange={setTipoPropiedad}
          />

          {/* Sólo en Airbnb: Máximo de huéspedes */}
          {description === 'Airbnb' && (
            <div>
              <label className="block mb-1">Máximo de huéspedes</label>
              <input
                type="number"
                value={maxHuespedes}
                onChange={(e) => Number(setMaxHuespedes(e.target.value))}
                className="w-full border rounded px-3 py-2"
                min={1}
              />
            </div>
          )}

          {/* Cantidad de piezas */}
          <Dropdown
            type="number"
            label="Cantidad de piezas"
            options={nOfBathroomsOptions}
            value={rooms}
            onChange={(v) => setPiezas(Number(v) || 0)}
          />

          {/* Cantidad de baños */}
          <Dropdown
            type="number"
            label="Cantidad de baños"
            options={nOfBathroomsOptions}
            value={toilets}
            onChange={(v) => setBanos(Number(v) || 0)}
          />

          {/* Ubicación */}
          <Dropdown
            label="Ubicación (Comuna)"
            options={comunaOptions}
            value={location}
            onChange={setUbicacion}
          />

          <button
            type="submit"
            className="primary-button"
          >
            Guardar ({description})
          </button>
        </form>
      </main>
    </>
  );
}