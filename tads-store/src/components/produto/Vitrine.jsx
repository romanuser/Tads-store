import { PackageSearch } from 'lucide-react'
import { ProdutoCard } from './ProdutoCard'
import { Carregando } from '../ui/Carregando'
import { Erro } from '../ui/Erro'

export function Vitrine({ produtos, carregando, erro, busca, categoriaSelecionada, onTentar }) {
  if (carregando) return <Carregando />
  if (erro)       return <Erro mensagem={erro} onTentar={onTentar} />

  const semResultado = produtos.length === 0
  const termoBusca  = busca || categoriaSelecionada

  return (
    <section>
      {/* Cabeçalho da vitrine */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-black text-gray-800">
            {categoriaSelecionada
              ? <span className="capitalize">{categoriaSelecionada}</span>
              : busca
              ? `Resultados para "${busca}"`
              : 'Nossos Produtos'}
          </h2>
          <p className="text-gray-500 text-sm mt-0.5">
            {semResultado
              ? 'Nenhum produto encontrado'
              : `${produtos.length} ${produtos.length === 1 ? 'produto' : 'produtos'}`}
          </p>
        </div>
        {!termoBusca && (
          <span className="bg-loja-100 text-loja-800 text-xs font-bold px-3 py-1.5 rounded-full">
            Ofertas do dia 🛒
          </span>
        )}
      </div>

      {/* Estado vazio */}
      {semResultado ? (
        <div className="flex flex-col items-center justify-center py-20 gap-3 text-center">
          <PackageSearch className="w-12 h-12 text-gray-300" />
          <p className="font-semibold text-gray-500">Nenhum produto encontrado</p>
          <p className="text-sm text-gray-400">
            Tente outro termo ou veja todas as categorias.
          </p>
        </div>
      ) : (
        /* Grade de produtos — .map() */
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {produtos.map(produto => (
            <ProdutoCard key={produto.id} produto={produto} />
          ))}
        </div>
      )}
    </section>
  )
}
