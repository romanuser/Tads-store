import { Link } from 'react-router-dom'
import { User, Mail, LogOut, ShoppingBag, Heart, MapPin } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import { Botao } from '../components/ui/Botao'

export function PaginaMinhaConta() {
  const { usuario, logout } = useAuth()

  return (
    <div className="max-w-2xl mx-auto py-8">
      {/* Header */}
      <div className="flex items-center gap-4 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
        <div className="w-16 h-16 bg-loja-700 rounded-full flex items-center justify-center text-white text-xl font-black flex-shrink-0">
          {usuario.avatar}
        </div>
        <div className="flex-1 min-w-0">
          <h1 className="text-xl font-black text-gray-800">{usuario.nome}</h1>
          <div className="flex items-center gap-1.5 text-sm text-gray-500 mt-0.5">
            <Mail className="w-3.5 h-3.5" />
            <span className="truncate">{usuario.email}</span>
          </div>
        </div>
        <Botao
          variante="perigo"
          onClick={logout}
          className="flex items-center gap-2 whitespace-nowrap"
        >
          <LogOut className="w-4 h-4" />
          Sair
        </Botao>
      </div>

      {/* Cards de ações */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {[
          { icon: ShoppingBag, label: 'Meus Pedidos', desc: '0 pedidos realizados', cor: 'text-loja-600 bg-loja-50' },
          { icon: Heart,       label: 'Favoritos',   desc: '0 produtos salvos',   cor: 'text-oferta-600 bg-oferta-400/10' },
          { icon: MapPin,      label: 'Endereços',   desc: '0 endereços cadastrados', cor: 'text-purple-600 bg-purple-50' },
        ].map(({ icon: Icon, label, desc, cor }) => (
          <div key={label} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col items-center text-center gap-2">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${cor}`}>
              <Icon className="w-6 h-6" />
            </div>
            <p className="font-bold text-gray-800 text-sm">{label}</p>
            <p className="text-xs text-gray-400">{desc}</p>
          </div>
        ))}
      </div>

      {/* Dados da conta */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
        <h2 className="text-sm font-black text-gray-700 uppercase tracking-wide mb-4">Dados da Conta</h2>
        <div className="space-y-3">
          <div className="flex items-center gap-3 py-2 border-b border-gray-50">
            <User className="w-4 h-4 text-loja-600" />
            <div>
              <p className="text-xs text-gray-400">Nome completo</p>
              <p className="text-sm font-semibold text-gray-700">{usuario.nome}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 py-2">
            <Mail className="w-4 h-4 text-loja-600" />
            <div>
              <p className="text-xs text-gray-400">E-mail</p>
              <p className="text-sm font-semibold text-gray-700">{usuario.email}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Link to="/" className="text-sm text-loja-700 font-semibold hover:underline">
          ← Voltar ao catálogo
        </Link>
      </div>
    </div>
  )
}
