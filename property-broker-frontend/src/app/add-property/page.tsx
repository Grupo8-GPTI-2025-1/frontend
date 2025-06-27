'use client';

import { useState } from 'react';
import Dropdown from '../components/Dropdown';
import Navbar from '../components/navbar/Navbar';
import './styles.css';

interface Option {
  label: string;
  value: string;
}


// Lista completa de comunas de Santiago
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

// const nOfBathroomsOptions = [
//   1,2,3,4,5,6,7,8,
// ].map((o) => ({ label: o, value: o }));

// const nOfBathroomsOptions = Array.from({ length: 10 }, (_, i) => ({
//   label: `${i}`,   // «1», «2», …
//   value: `${i}`,   // «1», «2», …
// })) satisfies Option[];


const nOfBathroomsOptions: Option[] = [
  1, 2, 3, 4, 5, 6, 7, 8,
].map((o) => ({ label: String(o), value: String(o) }));

export default function AddProperties() {

  // const [id, setId] = useState(1);  // sacar
  const [modelType, setModelType] = useState<'Airbnb' | 'Portal'>('Airbnb');

  // Campos compartidos
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [property_type, setTipoPropiedad] = useState('');
  const [rooms, setPiezas]   = useState<number | ''>('');
  const [toilets, setBanos] = useState<number | ''>('');
  const [location, setUbicacion] = useState('');

  // Campos exclusivos de Airbnb
  const [guests, setGuests] = useState<number | ''>('');
  const [nights, setNights] = useState<number | ''>('');

  const [price, setPrice] = useState('');
  const url = 'https://localhost:3000/propiedades'; // URL placeholder tambien, vamos a dar el todas las properties, pq no sabemos cual va a ser el id de antes para dirigirlo

  const transport = {
    Metro: [],
    Paraderos: [],
  };

  // ubicación sorpresa
  const coordinates = {
    // lat: "-33.49999",
    // long: "-70.613317",
    lat: "-70.613317",
    long: "-33.49999"
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const route = modelType === 'Airbnb' ? 'airbnbs' : 'properties';

    const data = {
      name,
      property_type,
      ...(modelType === 'Airbnb' && { guests: Number(guests) || 0 }),
      ...(modelType === 'Airbnb' && { nights: Number(nights) || 0 }),
      rooms: Number(rooms) || 0 ,
      toilets: Number(toilets) || 0,
      price,
      url,
      description,
      location,
      ...(modelType === 'Portal' && { transport }),
      ...(modelType === 'Portal' && { coordinates }),
    };

    console.log('Enviando datos:', data);

    fetch(`http://localhost:4000/${route}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([data]),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Respuesta del servidor:', data);

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
            setModelType((m) => (m === 'Airbnb' ? 'Portal' : 'Airbnb'))
          }
          className="toggle-btn mb-6 px-4 py-2 bg-gray-200 rounded"
         >
          Comparando con{' '}
          {modelType === 'Airbnb' ? 'Airbnb' : 'Portal Inmobiliario'}
        </button>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Tipo de formulario (oculto) */}
          <input type="hidden" name="description" value={modelType} />

          {/* Input para dar descripcion a la propiedad */}
          <div>
            <label className="block mb-1">Nombre de tu propiedad</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded px-3 py-2 bg-gray-100 cursor-not-allowed"
            />
            </div>

            <div>
            <label className="block mb-1">Descripción</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border rounded px-3 py-2 bg-gray-100 cursor-not-allowed"
              rows={4}
            />
            </div>

          {/* Campo compartido: Tipo de propiedad */}
          <Dropdown
            label="Tipo de propiedad"
            options={typeOptions}
            value={property_type}
            onChange={setTipoPropiedad}
          />

          {/* Sólo en Airbnb: Máximo de huéspedes 
          modelType === 'Airbnb' && (
            <Dropdown
            label="Cantidad de noches"
            options={nOfBathroomsOptions}
            value={nights === '' ? '' : nights.toString()}
            onChange={(n) => setNights(n === '' ? '' : Number(n))}
            />
          )} */}

          {modelType === 'Airbnb' && (
            <Dropdown
            label="Máximo de huéspedes"
            options={nOfBathroomsOptions}
            value={guests === '' ? '' : guests.toString()}
            onChange={(g) => setGuests(g === '' ? '' : Number(g))}
            />
          )}

            {/* {modelType === 'Airbnb' && (
            <div>
              <label className="block mb-1">Cantidad de noches</label>
              <input
                type="number"
                value={nights}
                onChange={(n) => Number(setNights(n.target.value))}
                className="w-full border rounded px-3 py-2"
                min={1}
              />
            </div>
          )} */}

          {modelType === 'Airbnb' && (
            <Dropdown
            label="Cantidad de noches"
            options={nOfBathroomsOptions}
            value={nights === '' ? '' : nights.toString()}
            onChange={(n) => setNights(n === '' ? '' : Number(n))}
            />
          )}

          {/* Cantidad de piezas */}
          <Dropdown
            label="Cantidad de piezas"
            options={nOfBathroomsOptions}
            value={rooms === '' ? '' : rooms.toString()}      // siempre string
            onChange={(v) => setPiezas(v === '' ? '' : Number(v))}
          />

          {/* Cantidad de baños */}
          <Dropdown
            label="Cantidad de baños"
            options={nOfBathroomsOptions}
            value={rooms == '' ? '' : toilets.toString()} // siempre string
            onChange={(v) => setBanos(v === '' ? '' : Number(v))}
            />

          {/* Ubicación */}
          <Dropdown
            label="Ubicación (Comuna)"
            options={comunaOptions}
            value={location}
            onChange={setUbicacion}
          />

          <div>
            <p>Finalmente,¿a qué precio piensas poner tu propiedad? Compararemos con rangos parecidos</p>
            <label className="block mb-1">Valor de venta estimado</label>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full border rounded px-3 py-2 bg-gray-100 cursor-not-allowed"
            />
            </div>

          <button
            type="submit"
            className="primary-button"
          >
            Guardar ({modelType})
          </button>
        </form>
      </main>
    </>
  );
}