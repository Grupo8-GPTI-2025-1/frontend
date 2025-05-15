import { useQuery } from '@tanstack/react-query';
import { fetchProperties } from '../lib/api';
import { Property } from '../lib/types';

export function useProperties(limit = 8) {
    return useQuery<Property[], Error>({
        queryKey: ['properties', limit],
        queryFn: () => fetchProperties(limit),
        staleTime: 1000 * 60 * 5, // 5 minutes
    });
}