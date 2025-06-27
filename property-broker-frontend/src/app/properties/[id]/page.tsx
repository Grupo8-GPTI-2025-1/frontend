// app/property/[id]/page.tsx

import { notFound } from 'next/navigation';
import { Property } from '@/lib/types';
import Navbar from '@/app/components/navbar/Navbar';
import PropertyCard from '@/app/components/property-card/PropertyCard';
import Link from 'next/link';
import MapExample from '@/app/components/MapExample';
import PropertyGrid from '@/app/components/property-card/PropertyGrid';
// Dummy data
const dummyProperties: Property[] = [
  {
    id: '1',
    property_type: 'Departamento',
    location: 'Providencia',
    price: '$1.200.000',
    rooms: 3,
    toilets: 2,
    name: 'Departamento universitario',
    url: 'placeholder.com',
  },
  {
    id: '2',
    property_type: 'Casa',
    location: 'Las Condes',
    price: '$2.500.000',
    rooms: 5,
    toilets: 3,
    name: 'Gran Casa en Las Condes',
    url: 'placeholder.com',
  },
  {
    id: '3',
    property_type: 'Otro',
    location: 'Ñuñoa',
    price: '$850.000',
    rooms: 2,
    toilets: 2,
    name: 'Experiencia Ñuñoa',
    url: 'placeholder.com',
  },
  {
    id: '4',
    property_type: 'Departamento',
    location: 'La Florida',
    price: '$950.000',
    rooms: 3,
    toilets: 2,
    name: 'Acogedor departamento familiar',
    url: 'placeholder.com',
  },
];

type PageProps = {
  params: Promise<{ id: string }>;
};


// Function to try fetching from the backend
async function getPropertyAndSimilar(id: string): Promise<[Property | null, Property[]]> {
  try {

    const res = await fetch(`http://backend:4000/properties/${id}`, {
      cache: 'no-store'
    });

    console.log("RES EN PROPERTIES/ID: ", res);

    if (!res.ok) throw new Error('Backend error');

    const property: Property = await res.json();
    console.log("TIPO DE LAT",typeof property.coordinates?.lat);

    const allRes = await fetch(`http://backend:4000/properties`, {
      cache: 'no-store',
    });

    if (!allRes.ok) throw new Error('Backend error');

    const allProperties: Property[] = await allRes.json();

    function propertyHaveSimilarRanges(p1: Property, p2: Property, delta_percentage: number): boolean {
      // TODO: esto puede extenderse, para tener deltas distintos
      const parsedPropertyFloats = (p: Property) => ({
        price: parseFloat(p.price.toString()),
        rooms: parseInt(p.rooms.toString(), 10),
        toilets: parseInt(p.toilets.toString(), 10),
      });
      //   price: parseFloat(p1.price.replace(/[$.]/g, '')),
      //   rooms: parseInt(p1.rooms.toString(), 10),
      //   toilets: parseInt(p1.toilets.toString(), 10),
      // };
      return (
        // precio x% similar
        Math.abs(parsedPropertyFloats(p1).price - parsedPropertyFloats(p2).price) <=
          parsedPropertyFloats(p1).price * delta_percentage &&

          // habitaciones x% similar
        Math.abs(parsedPropertyFloats(p1).rooms - parsedPropertyFloats(p2).rooms) <= 1 &&

        Math.abs(parsedPropertyFloats(p1).toilets - parsedPropertyFloats(p2).toilets) <= 1
      );
    }

    // TODO: Otras extensiones al modelo podrian ser: índices de comunas parecidas, mts2, etc.

    const similar = allProperties.filter(
      (p) => p.id !== property.id && p.property_type === property.property_type && propertyHaveSimilarRanges(property, p, 0.25) // 25% de diferencia en sus atributos a lo más
    );

    return [property, similar];
  } catch (err) {
    console.error('Fetch error', (err as any).cause ?? err);
    console.warn('Backend fetch failed, using dummy data:', err);
    const fallback = dummyProperties.find((p) => p.id === id);
    if (!fallback) return [null, []];

    const similar = dummyProperties.filter(
      (p) => p.id !== fallback.id && p.property_type === fallback.property_type
    );
    return [fallback, similar];
  }
}

export default async function PropertyDetailPage({ params }: PageProps) {
  const { id } = await params;
  const [property, similarProperties] = await getPropertyAndSimilar(id);

  console.log("LAT-LONG", property?.coordinates);

  // OJO AQUI: lat y long vienen al reves desde el scraper
  const lat = Number(property?.coordinates?.long);
  const long = Number(property?.coordinates?.lat);

  const hasValidCoords =
  Number.isFinite(lat) && Number.isFinite(long);

  console.log("HAS VALID COORDS", hasValidCoords);
  console.log("LAT", lat, "LONG", long);

  if (!property) return notFound();

  // const formattedPrice = property.price.toLocaleString('es-CL', {
  //       style: 'currency',
  //       currency: 'CLP',
  //       minimumFractionDigits: 0,
  //     });

  // Format price as CLP currency
  // Ensure property.price is a number before formatting
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
              {/* Format int price to $ format */}
              {/* <p className="text-xl text-green-600 font-semibold">{property.price}</p> */}
              <p className="text-xl text-green-600 font-semibold">
                {Number(property.price).toLocaleString('es-CL', {
                  style: 'currency',
                  currency: 'CLP',
                  minimumFractionDigits: 0,
                })}
              </p>
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

        <div>
          <h2>Ubicación de la propiedad</h2>

          {hasValidCoords ? (
            <MapExample
              latitude={lat} 
              longitude={long} 
              zoom={14}
              // className="h-64 rounded-lg shadow"
            />
          ) : (
            <p className="text-red-500">No se pudo cargar el mapa. Coordenenadas inválidas.</p>
          )}

          <h2 className='text-[#963bff]-800 text-lg-center mt-8 mb-8'>Transportes cercanos</h2>

          {/* Despliega paraderos cercanos si es que hay */}
          {property.transport?.Paraderos && property.transport?.Paraderos.length > 0 ?
          (<>
            <h3 className="text-gray-800 text-lg-center mt-8 mb-8">Paraderos cercanos:</h3>

            {(property.transport?.Paraderos || []).map((paradero, index) => (
              <p key={index} className="text-gray-600 text-center">{paradero}</p>
            ))}
           </>
          ):(<p className="text-[#963bff]-400">No hay paraderos cercanos disponibles.</p>)}


          {/* Despliega estaciones de metro cercanas si es que hay */}
          {property.transport?.Metro && property.transport?.Metro.length > 0 ?
          (<>
            <h3 className="text-gray-800 text-lg-center mt-8 mb-8">Estaciones de metro cercanas:</h3>
            
            {(property.transport?.Metro || []).map((metro, index) => (
              <p key={index} className="text-gray-600 text-center">{metro}</p>
            ))}
           </>
          ):(<p className="text-[#963bff]-400">No hay estaciones de metro cercanas a la propiedad.</p>)}

          {!property.transport && (
            <>
              <p className="text-[#963bff]-400">No hay información de transportes cercanos disponible.</p>
              <p className="text-[#963bff]-400">Recomendamos revisar en internet opciones.</p>
            </>
          )}

        </div>




        <h2 className="text-2xl font-semibold mb-4">Propiedades similares</h2>
        <PropertyGrid
          properties={similarProperties}
          isLoading={false}
          isError={false}
        />
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {similarProperties.map((prop) => (
            <Link key={prop.id} href={`/properties/${prop.id}`}>
              <PropertyCard property={prop} />
            </Link>
          ))}
        </div> */}
      </main>
    </>
  );
}
