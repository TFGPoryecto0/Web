import { motion } from 'framer-motion'

export default function CharacterCard({ character, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800 rounded-xl overflow-hidden shadow-lg"
    >
      <img 
        src={character.image} 
        alt={character.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{character.name}</h3>
        <p className="text-gray-300 mb-4">{character.description}</p>
        <div>
          <h4 className="font-semibold mb-2">Habilidades:</h4>
          <ul className="space-y-1">
            {character.abilities.map((ability, index) => (
              <li key={index} className="flex items-center">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                {ability}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}