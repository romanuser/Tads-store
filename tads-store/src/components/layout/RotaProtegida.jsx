import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

export function RotaProtegida({ children }) {
  const { autenticado } = useAuth()
  const location = useLocation()

  if (!autenticado) {
    return <Navigate to="/login" state={{ de: location.pathname }} replace />
  }

  return children
}
