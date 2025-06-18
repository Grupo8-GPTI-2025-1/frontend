export interface Property {
// funcionamiento interno
id: string;

// compartidos con la propiedad del client
name: string;
description?: string;
property_type: string;
rooms: number;
toilets: number;

// solo de los sacados de la base de datos
price: string;
location: string;
url: string;

// unico para airbnbs
guests?: number;
}
