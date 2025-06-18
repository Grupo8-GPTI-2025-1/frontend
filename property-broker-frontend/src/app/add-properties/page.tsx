'use client';

import { useState } from 'react';
import Dropdown from '../components/Dropdown';

const sizeOptions = [
  '0-30m2',
  '30-60m2',
  '60-90m2',
  '90-120m2',
  '120m2 - 150 m2',
  '150m2 - 180m2',
  '+180m2',
].map((o) => ({ label: o, value: o }));

const comunaOptions = [
  'Providencia',
  'Ñuñoa',
  'Recoleta',
  'Macul',
  'Las Condes',
  'Vitacura',
  'Santiago',
  'Independencia',
  'Huechuraba',
].map((o) => ({ label: o, value: o }));

const typeOptions = [
  'Departamento',
  'Casa',
  'Otro',
].map((o) => ({ label: o, value: o }));

export default function AddProperties() {
  const [size, setSize] = useState('');
  const [comuna, setComuna] = useState('');
  const [type, setType] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // For now just log the form values
    console.log({ size, comuna, type });
  }

  return (
    <main className="mx-auto max-w-lg p-4">
      <h1 className="text-2xl font-semibold mb-4">Agregar Propiedad</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <Dropdown label="Tamaño" options={sizeOptions} value={size} onChange={setSize} />
        <Dropdown label="Comuna" options={comunaOptions} value={comuna} onChange={setComuna} />
        <Dropdown label="Tipo de propiedad" options={typeOptions} value={type} onChange={setType} />
        <button
          type="submit"
          className="bg-purple-700 text-white rounded-md p-2 mt-2 hover:bg-purple-800"
        >
          Guardar
        </button>
      </form>
    </main>
  );
}
