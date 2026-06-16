// Componente reutilizável de selo/badge para destacar informações nos produtos
export function Selo({ label, cor = 'verde' }) {
  const cores = {
    verde:    'bg-loja-100 text-loja-800 border border-loja-200',
    amarelo:  'bg-oferta-400/20 text-oferta-600 border border-oferta-400/40',
    vermelho: 'bg-red-100 text-red-700 border border-red-200',
    cinza:    'bg-gray-100 text-gray-600 border border-gray-200',
  }

  return (
    <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${cores[cor] ?? cores.cinza}`}>
      {label}
    </span>
  )
}
