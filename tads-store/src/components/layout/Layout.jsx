import { Cabecalho } from './Cabecalho'
import { Rodape } from './Rodape'

// Componente de layout raiz — envolve todas as páginas com cabeçalho e rodapé
export function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Cabecalho />
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-8">
        {children}
      </main>
      <Rodape />
    </div>
  )
}
