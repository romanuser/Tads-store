import { ShoppingCart, Phone, Mail, MapPin } from 'lucide-react'

export function Rodape() {
  const ano = new Date().getFullYear()

  return (
    <footer className="bg-loja-900 text-loja-200 mt-auto">
      {/* Conteúdo principal */}
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Coluna 1 — Marca */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-loja-800 font-black text-sm">A</span>
            </div>
            <span className="text-white font-black text-lg">Aqui Tem</span>
          </div>
          <p className="text-sm leading-relaxed">
            Seu supermercado online com os melhores produtos e preços. Qualidade e praticidade para o seu dia a dia.
          </p>
        </div>

        {/* Coluna 2 — Categorias */}
        <div>
          <h3 className="text-white font-bold mb-3 text-sm uppercase tracking-wider">Categorias</h3>
          <ul className="space-y-1.5 text-sm">
            {['Hortifruti', 'Bebidas', 'Laticínios', 'Grãos e Cereais', 'Limpeza', 'Condimentos'].map(cat => (
              <li key={cat}>
                <span className="hover:text-white transition-colors cursor-pointer">→ {cat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Coluna 3 — Contato */}
        <div>
          <h3 className="text-white font-bold mb-3 text-sm uppercase tracking-wider">Contato</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-oferta-400" />
              <span>(27) 99999-0000</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-oferta-400" />
              <span>contato@aquitem.com.br</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-oferta-400" />
              <span>Vitória, ES — Brasil</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Rodapé inferior */}
      <div className="border-t border-loja-800 py-4 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between text-xs flex-wrap gap-2">
          <span>© {ano} Aqui Tem Supermercado. Todos os direitos reservados.</span>
          <span className="flex items-center gap-1.5">
            <ShoppingCart className="w-3 h-3" />
            TADS Store · IFES
          </span>
        </div>
      </div>
    </footer>
  )
}
