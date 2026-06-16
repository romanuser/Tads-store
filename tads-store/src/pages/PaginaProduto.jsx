import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Star, ShoppingCart, Tag, Package, Truck } from 'lucide-react'
import { Botao } from '../components/ui/Botao'
import { Selo } from '../components/ui/Selo'
import { Carregando } from '../components/ui/Carregando'
import { Erro } from '../components/ui/Erro'

function formatarPreco(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

export function PaginaProduto() {
  const { id }              = useParams()
  const [produto,      setProduto]      = useState(null)
  const [imagemAtiva,  setImagemAtiva]  = useState(0)
  const [carregando,   setCarregando]   = useState(true)
  const [erro,         setErro]         = useState(null)

  useEffect(() => {
    setCarregando(true)
    setErro(null)
    setImagemAtiva(0)

    fetch(`https://dummyjson.com/products/${id}`)
      .then(r => {
        if (!r.ok) throw new Error('Produto não encontrado.')
        return r.json()
      })
      .then(data => {
        setProduto(data)
        setCarregando(false)
      })
      .catch(err => {
        setErro(err.message)
        setCarregando(false)
      })
  }, [id])

  if (carregando) return <div className="py-8"><Carregando quantidade={1} /></div>
  if (erro)       return <Erro mensagem={erro} />
  if (!produto)   return null

  const precoFinal    = produto.price * (1 - produto.discountPercentage / 100)
  const temDesconto   = produto.discountPercentage > 0
  const temFreteGratis = produto.price >= 25
  const imagens       = produto.images?.length ? produto.images : [produto.thumbnail]

  return (
    <div>
      {/* Voltar */}
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-loja-700 hover:text-loja-900 font-semibold mb-6 group">
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
        Voltar ao catálogo
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">

        {/* Galeria */}
        <div>
          <div className="aspect-square rounded-xl overflow-hidden bg-gray-50 mb-3">
            <img
              src={imagens[imagemAtiva]}
              alt={produto.title}
              className="w-full h-full object-contain"
            />
          </div>
          {imagens.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-1">
              {imagens.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setImagemAtiva(i)}
                  className={`w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-colors ${
                    i === imagemAtiva ? 'border-loja-600' : 'border-gray-100 hover:border-gray-300'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Informações */}
        <div className="flex flex-col">
          {/* Categoria + marca */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold text-loja-700 bg-loja-100 px-2 py-0.5 rounded-full capitalize">
              {produto.category}
            </span>
            {produto.brand && (
              <span className="text-xs text-gray-400 font-medium">{produto.brand}</span>
            )}
          </div>

          <h1 className="text-2xl font-black text-gray-800 leading-snug mb-3">
            {produto.title}
          </h1>

          {/* Avaliação */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < Math.round(produto.rating) ? 'fill-oferta-400 text-oferta-400' : 'text-gray-200'}`}
                />
              ))}
            </div>
            <span className="text-sm font-semibold text-gray-600">{produto.rating.toFixed(1)}</span>
          </div>

          {/* Selos */}
          <div className="flex flex-wrap gap-2 mb-4">
            {temDesconto    && <Selo label={`-${Math.round(produto.discountPercentage)}% OFF`} cor="amarelo" />}
            {temFreteGratis && <Selo label="Frete Grátis" cor="verde" />}
            {produto.stock < 10 && <Selo label={`Restam ${produto.stock}`} cor="vermelho" />}
          </div>

          {/* Preços */}
          <div className="mb-6 p-4 bg-loja-50 rounded-xl">
            {temDesconto && (
              <p className="text-sm text-gray-400 line-through">
                {formatarPreco(produto.price)}
              </p>
            )}
            <p className="text-3xl font-black text-loja-700">{formatarPreco(precoFinal)}</p>
            {temDesconto && (
              <p className="text-xs text-loja-600 font-semibold mt-0.5">
                Você economiza {formatarPreco(produto.price - precoFinal)}
              </p>
            )}
          </div>

          {/* Descrição */}
          {produto.description && (
            <p className="text-sm text-gray-600 leading-relaxed mb-6">{produto.description}</p>
          )}

          {/* Detalhes */}
          <div className="grid grid-cols-2 gap-3 mb-6 text-xs">
            <div className="flex items-center gap-2 text-gray-500">
              <Package className="w-4 h-4 text-loja-600" />
              <span>Estoque: <strong>{produto.stock} un.</strong></span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <Tag className="w-4 h-4 text-loja-600" />
              <span>SKU: <strong>{produto.sku ?? '—'}</strong></span>
            </div>
            <div className="flex items-center gap-2 text-gray-500 col-span-2">
              <Truck className="w-4 h-4 text-loja-600" />
              <span>{produto.shippingInformation ?? 'Consulte prazo de entrega'}</span>
            </div>
          </div>

          {/* Ação */}
          <Botao className="w-full flex items-center justify-center gap-2 py-3 text-base mt-auto">
            <ShoppingCart className="w-5 h-5" />
            Adicionar ao Carrinho
          </Botao>
        </div>
      </div>
    </div>
  )
}
