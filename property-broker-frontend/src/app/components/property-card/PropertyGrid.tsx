// 
// src/components/propiedades/PropertyGrid.tsx
import Link from 'next/link';
import PropertyCard from './PropertyCard';
import SkeletonCard from '../SkeletonCard';
import { Property } from '@/lib/types';

interface Props {
  properties: Property[] | undefined;
  isLoading: boolean;
  isError: boolean;
}

export default function PropertyGrid({ properties, isLoading, isError }: Props) {
  if (isLoading)
    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );

  if (isError)
    return <p className="py-12 text-center text-red-600">Error al cargar datos.</p>;

  if (!properties?.length)
    return <p className="py-12 text-center">No se encontraron propiedades 😕</p>;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {properties.map((p) => (
        <Link
          key={p.id}
          href={`/property/${p.id}`}
          className="block hover:shadow-lg hover:-translate-y-1 transition-transform duration-200"
          passHref
        >
          <PropertyCard key={p.id} property={p} />
        </Link>
      ))}
    </div>
  );
}
