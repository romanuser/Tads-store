import { useState } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { LogIn, Eye, EyeOff, ShoppingCart } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import { Botao } from '../components/ui/Botao'

export function PaginaLogin() {
  const { login, erro, carregando } = useAuth()
  const navigate  = useNavigate()
  const location  = useLocation()
  const destino   = location.state?.de || '/'

  const [email, setEmail]         = useState('')
  const [senha, setSenha]         = useState('')
  const [mostrarSenha, setMostrar] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    const resultado = await login(email, senha)
    if (resultado.sucesso) navigate(destino, { replace: true })
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-sm">

        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-loja-700 rounded-2xl flex items-center justify-center mb-3 shadow-lg">
            <ShoppingCart className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-black text-gray-800">Aqui Tem</h1>
          <p className="text-sm text-gray-500 mt-1">Entre na sua conta para continuar</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            {/* E-mail */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                E-mail
              </label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="seu@email.com"
                required
                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-loja-600 transition-colors"
              />
            </div>

            {/* Senha */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Senha
              </label>
              <div className="relative">
                <input
                  type={mostrarSenha ? 'text' : 'password'}
                  value={senha}
                  onChange={e => setSenha(e.target.value)}
                  placeholder="••••••"
                  required
                  className="w-full px-4 py-2.5 pr-10 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-loja-600 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setMostrar(v => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {mostrarSenha ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Erro */}
            {erro && (
              <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-3 py-2">
                {erro}
              </p>
            )}

            {/* Submit */}
            <Botao
              className="w-full flex items-center justify-center gap-2 py-3"
              disabled={carregando}
            >
              {carregando ? (
                <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
              ) : (
                <LogIn className="w-4 h-4" />
              )}
              {carregando ? 'Entrando...' : 'Entrar'}
            </Botao>
          </form>
        </div>

        <p className="text-center text-sm text-gray-500 mt-4">
          <Link to="/" className="text-loja-700 font-semibold hover:underline">
            ← Voltar à loja
          </Link>
        </p>
      </div>
    </div>
  )
}
