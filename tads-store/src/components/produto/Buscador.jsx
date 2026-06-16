import { Search, X, SlidersHorizontal } from 'lucide-react'

export function Buscador({
  busca, setBusca,
  categorias, categoriaSelecionada, setCategoriaSelecionada,
  filtrosAtivos, limparFiltros,
}) {
  return (
    <div className="mb-6 flex flex-col sm:flex-row gap-3">
      {/* Campo de busca */}
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Buscar produto..."
          value={busca}
          onChange={e => setBusca(e.target.value)}
          className="w-full pl-10 pr-10 py-2.5 border border-gray-200 rounded-xl text-sm bg-white focus:outline-none focus:border-loja-600 transition-colors"
        />
        {busca && (
          <button
            onClick={() => setBusca('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Filtro por categoria */}
      <div className="relative">
        <SlidersHorizontal className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        <select
          value={categoriaSelecionada}
          onChange={e => setCategoriaSelecionada(e.target.value)}
          className="pl-10 pr-8 py-2.5 border border-gray-200 rounded-xl text-sm bg-white focus:outline-none focus:border-loja-600 transition-colors appearance-none w-full sm:w-52 capitalize"
        >
          <option value="">Todas as categorias</option>
          {categorias.map(cat => {
            // DummyJSON retorna objetos { slug, name } ou strings
            const slug = typeof cat === 'string' ? cat : cat.slug
            const nome = typeof cat === 'string' ? cat : cat.name
            return (
              <option key={slug} value={slug} className="capitalize">
                {nome}
              </option>
            )
          })}
        </select>
      </div>

      {/* Limpar filtros */}
      {filtrosAtivos && (
        <button
          onClick={limparFiltros}
          className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold text-red-500 hover:bg-red-50 border border-red-200 transition-colors whitespace-nowrap"
        >
          <X className="w-4 h-4" />
          Limpar
        </button>
      )}
    </div>
  )
}
