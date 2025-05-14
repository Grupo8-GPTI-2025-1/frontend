export default function Pagination({
    currentPage,
    totalPages,
    onPageChange,
}: {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}) {
    return (
        <div className="flex justify-center items-center gap-4 mt-8">
            <button
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
                className={`px-4 py-2 rounded-md ${
                    currentPage === 1 ? "bg-gray-300" : "bg-blue-500 text-white"
                }`}
            >
                Anterior
            </button>
            <span>
                Página {currentPage} de {totalPages}
            </span>
            <button
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
                className={`px-4 py-2 rounded-md ${
                    currentPage === totalPages
                        ? "bg-gray-300"
                        : "bg-blue-500 text-white"
                }`}
            >
                Siguiente
            </button>
        </div>
    );
}