
// app/propiedades/page.tsx       (o pages/propiedades/index.tsx si usas Pages Router)
'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useProperties } from '@/hooks/useProperties';
import PropertyGrid from '../components/PropertyGrid';

const qc = new QueryClient();

export default function Listado() {
  return (
    <QueryClientProvider client={qc}>
      <ListadoInner />
    </QueryClientProvider>
  );
}

function ListadoInner() {
  const { data, isLoading, isError } = useProperties(8);

  return (
    <main className="mx-auto max-w-screen-2xl px-4 py-8 lg:px-8">
      {/* Aquí iría tu <FilterBar /> */}
      <PropertyGrid
        properties={data}
        isLoading={isLoading}
        isError={isError}
      />
    </main>
  );
}
