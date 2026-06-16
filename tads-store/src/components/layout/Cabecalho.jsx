import { Link } from 'react-router-dom'
import { ShoppingCart, MapPin, User, LogOut } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'

export function Cabecalho() {
  const { autenticado, usuario, logout } = useAuth()

  return (
    <header className="bg-loja-800 text-white shadow-lg">
      {/* Barra superior — localização */}
      <div className="bg-loja-900 py-1 px-4">
        <div className="max-w-6xl mx-auto flex items-center gap-1.5 text-xs text-loja-200">
          <MapPin className="w-3 h-3" />
          <span>Entregamos em todo o Brasil</span>
        </div>
      </div>

      {/* Header principal */}
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo + Nome */}
        <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow">
            <span className="text-loja-800 font-black text-lg leading-none">A</span>
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tight leading-none">Tads Store - Aqui Tem</h1>
            <p className="text-loja-200 text-xs font-medium">Supermercado de itens gerais Online</p>
          </div>
        </Link>

        {/* Slogan central */}
        <p className="hidden md:block text-loja-200 text-sm font-medium italic">
          "Se precisar, aqui tem!"
        </p>

        {/* Área do usuário + Carrinho */}
        <div className="flex items-center gap-2">
          {autenticado ? (
            <>
              <Link
                to="/minha-conta"
                className="hidden sm:flex items-center gap-2 bg-loja-700 hover:bg-loja-600 transition-colors px-3 py-2 rounded-xl text-sm font-semibold"
              >
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-loja-800 text-[10px] font-black">
                  {usuario.avatar}
                </div>
                <span className="max-w-[100px] truncate">{usuario.nome.split(' ')[0]}</span>
              </Link>
              <button
                onClick={logout}
                title="Sair"
                className="p-2 bg-loja-700 hover:bg-red-600 transition-colors rounded-xl"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="flex items-center gap-2 bg-loja-700 hover:bg-loja-600 transition-colors px-3 py-2 rounded-xl text-sm font-semibold"
            >
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">Entrar</span>
            </Link>
          )}

          <button className="flex items-center gap-2 bg-oferta-500 hover:bg-oferta-600 transition-colors px-4 py-2 rounded-xl font-semibold text-sm text-white">
            <ShoppingCart className="w-4 h-4" />
            <span className="hidden sm:inline">Carrinho</span>
            <span className="bg-white text-oferta-600 text-xs font-black rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </button>
        </div>
      </div>

      {/* Barra de categorias */}
      <nav className="bg-loja-700">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center gap-1 overflow-x-auto text-sm font-medium">
          {['Hortifruti', 'Bebidas', 'Laticínios', 'Grãos', 'Limpeza', 'Condimentos'].map(cat => (
            <span
              key={cat}
              className="px-3 py-1 rounded-full text-loja-100 hover:bg-loja-600 hover:text-white transition-colors cursor-pointer whitespace-nowrap text-xs"
            >
              {cat}
            </span>
          ))}
        </div>
      </nav>
    </header>
  )
}
