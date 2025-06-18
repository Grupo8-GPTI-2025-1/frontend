// app/property/[id]/page.tsx
import { notFound } from 'next/navigation';
import { Property } from '@/lib/types';
import Navbar from '@/app/components/navbar/Navbar';
import PropertyCard from '@/app/components/property-card/PropertyCard';
import Link from 'next/link';
import React from 'react';

// Dummy data (same as in your properties page)
const dummyProperties: Property[] = [
  {
    id: '1',
    property_type: 'Departamento',
    location: 'Providencia',
    price: '$1.200.000',
    rooms: 3,
    toilets: 2,
    name: "Departamento aesthetic",
    url: "placeholder.com"
  },
  {
    id: '2',
    property_type: 'Casa',
    location: 'Las Condes',
    price: '$2.500.000',
    rooms: 5,
    toilets: 3,
    name: "Mansa casa",
    url: "placeholder.com"
  },
  {
    id: '3',
    property_type: 'Otro',
    location: 'Ñuñoa',
    price: '$850.000',
    rooms: 2,
    toilets: 2,
    name: "Concepto full ñuñoino",
    url: "placeholder.com"
  },
  {
    id: '4',
    property_type: 'Departamento',
    location: 'La Florida',
    price: '$950.000',
    rooms: 3,
    toilets: 2,
    name: "Rico depto familiar",
    url: "placeholder.com"
  },
];

type PageProps = {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

const imagePlaceholderMapper: Record<string, string> = {
  departamento: 'edificio.jpg',
  casa: 'casa.jpg',
  default: 'edificio.jpg',
};

export default async function PropertyDetailPage({ params }: PageProps) {
  const property = dummyProperties.find((p) => p.id === params.id);
  if (!property) return notFound();

  const similarProperties = dummyProperties
    .filter((p) => p.id !== property.id && p.property_type === property.property_type);

  return (
    <>
        <Navbar />
        <main className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">{property.name}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
            <img
                src={`/${property.property_type.toLowerCase()}.jpg`}
                alt={property.name}
                className="w-full h-auto rounded-lg shadow"
            />
            </div>
            <div className="flex flex-col justify-between">
            <div>
                <p className="text-xl text-green-600 font-semibold">{property.price}</p>
                <p className="mt-2 text-gray-600">Ubicación: {property.location}</p>
                <p className="mt-2 text-gray-600">Habitaciones: {property.rooms}</p>
                <p className="mt-2 text-gray-600">Baños: {property.toilets}</p>
                <p className="mt-4 text-sm text-gray-400">Tipo: {property.property_type}</p>
            </div>
            <a
                href={property.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 text-center"
            >
                Ver publicación original
            </a>
            </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Propiedades similares</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {similarProperties.map((prop) => (
            <Link key={prop.id} href={`/property/${prop.id}`}>
                <PropertyCard property={prop} />
            </Link>
            ))}
        </div>
        </main>
    </>
  );
}
