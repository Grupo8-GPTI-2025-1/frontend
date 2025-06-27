'use client';
// src/components/MapExample.tsx
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import PropTypes from 'prop-types';

// interface MapExampleProps {
//   /** Latitud decimal, ej. -33.4489 */
//   latitude: number;
//   /** Longitud decimal, ej. -70.6693 */
//   longitude: number;
//   /** Nivel de zoom; Google recomienda 1–20. Default 12 */
//   zoom?: number;
//   /** Librerías opcionales: places, geometry, etc. */
//   libraries?: ("places" | "geometry" | "drawing")[];
// }



export default function MapExample({
  latitude,
  longitude,
  zoom = 12,
}){
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAjpFlrsug2dqaNTIo4Jv6HbGILQuK-TY0",// process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY, // "AIzaSyAjpFlrsug2dqaNTIo4Jv6HbGILQuK-TY0",// import.meta.env.VITE_GOOGLE_MAPS_API_KEY, // ó process.env...
    libraries: ["places"],
  });

  if (loadError) return <p>Error al cargar el mapa</p>;
  if (!isLoaded) return <p>Cargando…</p>;

  const center = { lat: latitude, lng: longitude };

  return (
    <GoogleMap
      mapContainerStyle={{ width: "100%", height: "400px" }}
      center={center}
      // latitude={latitude}
      // longitude={longitude}
      zoom={zoom}
      options={{ disableDefaultUI: true, zoomControl: true }}
    >
      <Marker position={center} />
    </GoogleMap>
  );
};
