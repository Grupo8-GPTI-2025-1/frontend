import axios from 'axios';
import { Property } from './types';

export async function fetchProperties(limit = 8): Promise<Property[]> {
    try {
        const response = await axios.get<Property[]>(
            `https://api.example.com/properties?limit=${limit}`
        );
        return response.data;
    } catch (error) {
        console.error('Error fetching properties:', error);
        return [];
    }
}