import { Property } from "@/lib/types";
import Link from "next/link";

interface Props {
    property: Property;
}

export default function PropertyCard({ property }: Props) {
    return (
        <Link
            href={`/property/${property.id}`}
            className="block rounded-xl shadow hover:shadow-lg transition"
            >
            {/* Usar paceholder aquí por mientras ?
            (y esto en un div)
             <Image
                src={property.url}
                alt={property.name}
                className="rounded-lg h-[200px] object-cover"
            /> */}
        <div className="p-4">
          <h3 className="truncate text-lg font-medium">{property.name}</h3>
          <p className="font-semibold text-primary">
          ${property.price}{/* ${property.price} .toLocaleString()} */}
          </p>

        <div className="mt-1 flex gap-3 text-sm text-gray-600">
          <span>{property.rooms}🛏</span>
          <span>{property.toilets}🛁</span>
        </div>

        {/* <p className="mt-1 text-xs text-gray-500">{property.comuna}</p> */}
      </div>
        </Link>
    );
}