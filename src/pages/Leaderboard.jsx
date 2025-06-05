import { useEffect, useState } from 'react'
import { useSupabase } from '../hooks/useSupabase'

export default function Leaderboard() {
  const { supabase } = useSupabase()
  const [players, setPlayers] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const fetchPlayers = async () => {
      const { data, error } = await supabase
        .from('players')
        .select('*')
        .order('score', { ascending: false })
        .limit(100)
      
      if (error) {
        console.error('Error fetching players:', error)
      } else {
        setPlayers(data || [])
      }
      setLoading(false)
    }
    
    fetchPlayers()
  }, [])
  
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Tabla de Clasificación</h2>
      
      {loading ? (
        <div className="text-center">Cargando...</div>
      ) : (
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <table className="w-full">
            <thead className="bg-gray-700">
              <tr>
                <th className="p-4 text-left">Posición</th>
                <th className="p-4 text-left">Jugador</th>
                <th className="p-4 text-left">Puntuación</th>
                <th className="p-4 text-left">Nivel</th>
              </tr>
            </thead>
            <tbody>
              {players.map((player, index) => (
                <tr key={player.id} className="border-b border-gray-700 hover:bg-gray-750">
                  <td className="p-4">#{index + 1}</td>
                  <td className="p-4 flex items-center">
                    {/*<img 
                      src={player.avatar_url || '/default-avatar.png'} 
                      alt={player.username} 
                      className="w-8 h-8 rounded-full mr-3"
                    />*/}
                    {player.username}
                  </td>
                  <td className="p-4">{player.score}</td>
                  <td className="p-4">{player.level}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}