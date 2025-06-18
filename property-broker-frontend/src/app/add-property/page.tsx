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
  '1','2','3','4','5','6+',
].map((o) => ({ label: o, value: o }));

export default function AddProperties() {
  // Modo del formulario: 'Airbnb' o 'Portal'
  const [mode, setMode] = useState<'Airbnb' | 'Portal'>('Airbnb');

  // Campos compartidos
  const [tipoPropiedad, setTipoPropiedad] = useState('');
  const [piezas, setPiezas] = useState('');
  const [banos, setBanos] = useState('');
  const [ubicacion, setUbicacion] = useState('');
  // Campo exclusivo de Airbnb
  const [maxHuespedes, setMaxHuespedes] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const data = {
      formType: mode,
      tipoPropiedad,
      ...(mode === 'Airbnb' && { maxHuespedes }),
      piezas,
      banos,
      ubicacion,
    };
    console.log('Enviando datos:', data);
    // Aquí podrías llamar a tu API:
    // fetch('/api/propiedades', { method: 'POST', body: JSON.stringify(data') })
  }

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-lg p-4">
        <h1 className="text-2xl font-semibold mb-4">Agregar Propiedad</h1>

        <button
          type="button"
          onClick={() =>
            setMode((m) => (m === 'Airbnb' ? 'Portal' : 'Airbnb'))
          }
          className="toggle-btn mb-6 px-4 py-2 bg-gray-200 rounded"
        >
          Comparando con{' '}
          {mode === 'Airbnb' ? 'Airbnb' : 'Portal Inmobiliario'}
        </button>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Tipo de formulario (oculto) */}
          <input type="hidden" name="formType" value={mode} />

          {/* Campo compartido: Tipo de propiedad */}
          <Dropdown
            label="Tipo de propiedad"
            options={typeOptions}
            value={tipoPropiedad}
            onChange={setTipoPropiedad}
          />

          {/* Sólo en Airbnb: Máximo de huéspedes */}
          {mode === 'Airbnb' && (
            <div>
              <label className="block mb-1">Máximo de huéspedes</label>
              <input
                type="number"
                value={maxHuespedes}
                onChange={(e) => setMaxHuespedes(e.target.value)}
                className="w-full border rounded px-3 py-2"
                min={1}
              />
            </div>
          )}

          {/* Cantidad de piezas */}
          <Dropdown
            label="Cantidad de piezas"
            options={nOfBathroomsOptions}
            value={piezas}
            onChange={setPiezas}
          />

          {/* Cantidad de baños */}
          <Dropdown
            label="Cantidad de baños"
            options={nOfBathroomsOptions}
            value={banos}
            onChange={setBanos}
          />

          {/* Ubicación */}
          <Dropdown
            label="Ubicación (Comuna)"
            options={comunaOptions}
            value={ubicacion}
            onChange={setUbicacion}
          />

          <button
            type="submit"
            className="primary-button"
          >
            Guardar ({mode})
          </button>
        </form>
      </main>
    </>
  );
}