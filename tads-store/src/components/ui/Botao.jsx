// Componente reutilizável de botão com variantes visuais
export function Botao({ children, variante = 'primario', onClick, className = '', disabled = false }) {
  const base = 'px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'

  const variantes = {
    primario:  'bg-loja-700 hover:bg-loja-800 text-white active:scale-95',
    secundario:'bg-oferta-500 hover:bg-oferta-600 text-white active:scale-95',
    contorno:  'border-2 border-loja-700 text-loja-700 hover:bg-loja-50 active:scale-95',
    perigo:    'bg-red-600 hover:bg-red-700 text-white active:scale-95',
  }

  return (
    <button
      className={`${base} ${variantes[variante] ?? variantes.primario} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
