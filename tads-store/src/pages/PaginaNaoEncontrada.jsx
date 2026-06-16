import { Link } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'
import { Botao } from '../components/ui/Botao'

export function PaginaNaoEncontrada() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center gap-4">
      <div className="w-24 h-24 bg-loja-100 rounded-full flex items-center justify-center mb-2">
        <ShoppingCart className="w-10 h-10 text-loja-600" />
      </div>
      <h1 className="text-6xl font-black text-gray-800">404</h1>
      <h2 className="text-xl font-bold text-gray-600">Página não encontrada</h2>
      <p className="text-gray-400 text-sm max-w-xs">
        O endereço que você acessou não existe ou foi removido.
      </p>
      <Link to="/">
        <Botao>Voltar para a loja</Botao>
      </Link>
    </div>
  )
}
