// src/components/propiedades/PropertyCard.tsx
import React from 'react';
import './property-card.css';
import { Property } from '@/lib/types';

export type Props = {
  property: Property;
};

const imagePlaceholderMapper: Record<string, string> = {
  departamento: 'edificio.jpg',
  casa: 'casa.jpg',
  default: 'edificio.jpg',
};

function getPlaceholder(propertyType: string) {
  const key = propertyType.toLowerCase();
  return imagePlaceholderMapper[key] || imagePlaceholderMapper.default;
}

const PropertyCard: React.FC<Props> = ({ property }) => {
  const imageSrc = getPlaceholder(property.property_type);
  return (
    <div className="property-card">
      <div className="property-card__image-container">
        <img
          src={imageSrc}
          alt={`${property.property_type} en ${property.location}`}
          className="property-card__image"
        />
      </div>

      <div className="property-card__details">
        <p className="property-card__title">
          {property.property_type} en {property.location}
        </p>
        <p className="property-card__price">{property.price}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
