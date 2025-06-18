// app/properties/page.tsx  (Next.js App Router)
'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import PropertyGrid from '../components/property-card/PropertyGrid';
import { Property } from '@/lib/types';

// Datos dummy simulando la estructura de Property
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
    // imageUrl: '/images/properties/departamento.jpg',
  },
  {
    id: '2',
    property_type: 'Casa',
    location: 'Las Condes',
    price: '$2.500.000',
    // imageUrl: '/images/properties/casa.jpg',
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
    // imageUrl: '/images/properties/otro.jpg',
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
    // imageUrl: '/images/properties/departamento.jpg',
    rooms: 3,
    toilets: 2,
    name: "Rico depto familiar",
    url: "placeholder.com"
  },
  // ... más propiedades dummy si lo necesitas
];

export default function PropertiesPage() {
  const [properties, setProperties] = useState<Property[] | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // Simula llamada a API
    const timeout = setTimeout(() => {
      try {
        setProperties(dummyProperties);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl p-4">
        <h1 className="text-3xl font-semibold mb-6">Propiedades Similares</h1>
        <PropertyGrid
          properties={properties}
          isLoading={isLoading}
          isError={isError}
        />
      </main>
    </>
  );
}


// app/propiedades/page.tsx       (o pages/propiedades/index.tsx si usas Pages Router)
// 'use client';
// import Navbar from '../components/navbar/Navbar';

// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { useProperties } from '@/hooks/useProperties';
// import PropertyGrid from '../components/PropertyGrid';

// const qc = new QueryClient();

// export default function Listado() {
//   return (
//     <QueryClientProvider client={qc}>
//       <ListadoInner />
//     </QueryClientProvider>
//   );
// }

// function ListadoInner() {
//   const { data, isLoading, isError } = useProperties(8);

//   return (
//     <>
//     <Navbar/>
//     <main className="mx-auto max-w-screen-2xl px-4 py-8 lg:px-8">
//       {/* Aquí iría tu <FilterBar /> */}
//       <PropertyGrid
//         properties={data}
//         isLoading={isLoading}
//         isError={isError}
//       />
//     </main>
//     </>
//   );
// }
