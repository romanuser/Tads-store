import { AlertCircle } from 'lucide-react'
import { Botao } from './Botao'

export function Erro({ mensagem, onTentar }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-4 text-center">
      <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center">
        <AlertCircle className="w-7 h-7 text-red-500" />
      </div>
      <div>
        <p className="font-bold text-gray-700 mb-1">Algo deu errado</p>
        <p className="text-sm text-gray-500">{mensagem}</p>
      </div>
      {onTentar && (
        <Botao variante="contorno" onClick={onTentar}>
          Tentar novamente
        </Botao>
      )}
    </div>
  )
}
