import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { Layout } from './components/layout/Layout'
import { RotaProtegida } from './components/layout/RotaProtegida'
import { PaginaInicial } from './pages/PaginaInicial'
import { PaginaProduto } from './pages/PaginaProduto'
import { PaginaLogin } from './pages/PaginaLogin'
import { PaginaMinhaConta } from './pages/PaginaMinhaConta'
import { PaginaNaoEncontrada } from './pages/PaginaNaoEncontrada'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<PaginaInicial />} />
            <Route path="/produto/:id" element={<PaginaProduto />} />
            <Route path="/login" element={<PaginaLogin />} />
            <Route
              path="/minha-conta"
              element={
                <RotaProtegida>
                  <PaginaMinhaConta />
                </RotaProtegida>
              }
            />
            <Route path="*" element={<PaginaNaoEncontrada />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
