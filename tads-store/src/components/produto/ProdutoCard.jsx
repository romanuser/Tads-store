import { Link } from 'react-router-dom'
import { ShoppingCart, Star } from 'lucide-react'
import { Botao } from '../ui/Botao'
import { Selo } from '../ui/Selo'

// Preço no formato brasileiro: 24.90 → "R$ 24,90"
function formatarPreco(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

export function ProdutoCard({ produto }) {
  const { title, price, discountPercentage, thumbnail, brand, category, rating } = produto

  // Preço com desconto aplicado
  const precoFinal = discountPercentage > 0
    ? price * (1 - discountPercentage / 100)
    : price

  // Regras de renderização condicional dos selos
  const temDesconto   = discountPercentage > 0
  const temFreteGratis = price >= 25

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">

      {/* Imagem do produto — clica para ir à página do produto */}
      <Link to={`/produto/${produto.id}`} className="block">
      <div className="relative">
        <img
          src={thumbnail}
          alt={title}
          className="w-full aspect-square object-cover"
        />
        {/* Badge de categoria sobre a imagem */}
        <span className="absolute top-2 left-2 bg-white/90 text-loja-800 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm capitalize">
          {category}
        </span>
        {/* Badge de desconto no canto superior direito */}
        {temDesconto && (
          <span className="absolute top-2 right-2 bg-oferta-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow">
            -{discountPercentage}%
          </span>
        )}
      </div>
      </Link>

      {/* Conteúdo */}
      <div className="p-3 flex flex-col flex-1">
        {/* Marca */}
        <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wide mb-0.5">
          {brand}
        </p>

        {/* Nome do produto */}
        <h2 className="text-sm font-semibold text-gray-800 leading-snug line-clamp-2 mb-2">
          {title}
        </h2>

        {/* Avaliação */}
        <div className="flex items-center gap-1 mb-2">
          <Star className="w-3 h-3 fill-oferta-400 text-oferta-400" />
          <span className="text-xs text-gray-500">{rating.toFixed(1)}</span>
        </div>

        {/* Selos — renderização condicional */}
        {(temDesconto || temFreteGratis) && (
          <div className="flex flex-wrap gap-1 mb-2">
            {temDesconto   && <Selo label={`-${discountPercentage}% OFF`} cor="amarelo" />}
            {temFreteGratis && <Selo label="Frete Grátis" cor="verde" />}
          </div>
        )}

        {/* Preços */}
        <div className="mt-auto pt-2 border-t border-gray-50">
          {temDesconto && (
            <p className="text-xs text-gray-400 line-through leading-none mb-0.5">
              {formatarPreco(price)}
            </p>
          )}
          <p className="text-xl font-black text-loja-700 leading-none">
            {formatarPreco(precoFinal)}
          </p>
          {temDesconto && (
            <p className="text-[10px] text-loja-600 font-medium mt-0.5">
              Economia de {formatarPreco(price - precoFinal)}
            </p>
          )}
        </div>

        {/* Botão */}
        <Botao className="w-full mt-3 flex items-center justify-center gap-2">
          <ShoppingCart className="w-3.5 h-3.5" />
          Adicionar
        </Botao>
      </div>
    </div>
  )
}
