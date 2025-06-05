import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {
  const { user, logout } = useAuth()
  
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <img src="src\assets\logos\logo.pnf" alt="Game Logo" className="h-10" />
        <span className="text-xl font-bold">PROYECTO 0</span>
      </div>
      
      <div className="flex space-x-6">
        <Link to="/" className="hover:text-yellow-400 transition">Inicio</Link>
        <Link to="/chat" className="hover:text-yellow-400 transition">Chat</Link>
        <Link to="/leaderboard" className="hover:text-yellow-400 transition">Leaderboard</Link>
        <Link to="/about" className="hover:text-yellow-400 transition">Sobre el Juego</Link>
        
        {user ? (
          <button onClick={logout} className="hover:text-yellow-400 transition">Cerrar Sesión</button>
        ) : (
          <Link to="/login" className="hover:text-yellow-400 transition">Login/Registro</Link>
        )}
      </div>
    </nav>
  )
}