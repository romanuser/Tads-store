import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext(null)

const STORAGE_KEY = 'aqui-tem-usuario'

const USUARIOS_SIMULADOS = [
  { id: 1, email: 'usuario@email.com', senha: '123456', nome: 'João Silva', avatar: 'JS' },
  { id: 2, email: 'maria@email.com',   senha: '123456', nome: 'Maria Souza', avatar: 'MS' },
  { id: 3, email: 'roman@email.com',   senha: '123456', nome: 'Rafael Roman', avatar: 'RR' },
]

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(() => {
    try {
      const salvo = localStorage.getItem(STORAGE_KEY)
      return salvo ? JSON.parse(salvo) : null
    } catch {
      return null
    }
  })

  const [erro, setErro] = useState(null)
  const [carregando, setCarregando] = useState(false)

  useEffect(() => {
    if (usuario) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(usuario))
    } else {
      localStorage.removeItem(STORAGE_KEY)
    }
  }, [usuario])

  function login(email, senha) {
    setCarregando(true)
    setErro(null)

    return new Promise((resolve) => {
      setTimeout(() => {
        const encontrado = USUARIOS_SIMULADOS.find(
          u => u.email === email && u.senha === senha
        )

        if (encontrado) {
          const { senha: _, ...dadosPublicos } = encontrado
          setUsuario(dadosPublicos)
          setCarregando(false)
          resolve({ sucesso: true })
        } else {
          setErro('E-mail ou senha incorretos.')
          setCarregando(false)
          resolve({ sucesso: false })
        }
      }, 800)
    })
  }

  function logout() {
    setUsuario(null)
    setErro(null)
  }

  return (
    <AuthContext.Provider value={{ usuario, login, logout, erro, carregando, autenticado: !!usuario }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth deve ser usado dentro de <AuthProvider>')
  return ctx
}
