export default function FilterBar() {
    return (
        <div className="flex flex-col gap-4 bg-white dark:bg-[#1a1a1a] rounded-lg shadow-md p-4 w-full sm:w-[400px]">
            <h2 className="text-xl font-semibold">Filtros</h2>
            <div className="flex flex-col gap-2">
                <label htmlFor="price" className="text-gray-600">Precio</label>
                <input type="number" id="price" placeholder="$" className="border border-gray-300 rounded-md p-2" />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="location" className="text-gray-600">Ubicación</label>
                <input type="text" id="location" placeholder="Ciudad, barrio..." className="border border-gray-300 rounded-md p-2" />
            </div>
        </div>
    );
}