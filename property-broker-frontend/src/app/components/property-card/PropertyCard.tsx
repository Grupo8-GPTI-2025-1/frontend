// src/components/propiedades/PropertyCard.tsx
import React from 'react';
import './property-card.css';
import { Property } from '@/lib/types'

export type Props = {
  property: Property;
  modelType?: string
};

const imagePlaceholderMapper: Record<string, string> = {
  departamento: 'departamento.jpg',
  casa: 'casa.jpg',
  default: 'departamento.jpg',
};

function getPlaceholder(propertyType: string) {
  const typeKey = propertyType.toLowerCase();
  return imagePlaceholderMapper[typeKey] || imagePlaceholderMapper.default;
}

// function getCardDetailColor(modelType: string){
//   const color = modelType.toLowerCase() === 'airbnb' ? "#ffe83b" : "#ff3b80";
  
// }

const PropertyCard: React.FC<Props> = ({ property, modelType }) => {
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

      <div className="property-card__details"> {/*style={styles[`${modelType}`]}> */}
        <p className="property-card__title">
          <b>{property.name}</b>
          {/* {property.property_type} en {property.location} */}
        </p>
        <p className="property-card__price">{Number(property.price).toLocaleString('es-CL', {
                  style: 'currency',
                  currency: 'CLP',
                  minimumFractionDigits: 0,
                })}</p>
      </div>
    </div>
  );
};

const styles = {
  airbnb: {
    backgroundColor: "#ffe83b",
  },
  portal: {
    backgroundColor: "#ff3b80",
  }
}

export default PropertyCard;
