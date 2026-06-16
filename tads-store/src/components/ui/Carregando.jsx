// Skeleton de carregamento — mesma grade do ProdutoCard
function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden animate-pulse">
      <div className="bg-gray-200 aspect-square w-full" />
      <div className="p-3 space-y-2.5">
        <div className="h-3 bg-gray-200 rounded w-1/3" />
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-4/5" />
        <div className="h-3 bg-gray-200 rounded w-1/4 mt-1" />
        <div className="h-8 bg-gray-200 rounded-lg mt-3" />
      </div>
    </div>
  )
}

export function Carregando({ quantidade = 8 }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Array.from({ length: quantidade }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  )
}
