import { motion } from 'framer-motion'
import CharacterCard from '../components/CharacterCard'

export default function AboutGame() {
  const characters = [
    {
      name: "Elizabeth",
      description: "El protagonista de nuestra historia, un detective con un misterio entre manos.",
      image: "/hero.jpg",
      abilities: ["Fuerza", "Valor", "Habilidad con la espada"]
    },
    {
      name: "Red John",
      description: "El antagonista principal, escondido entre las sombras, evitando que nadie salga de este hospital.",
      image: "/villain.jpg",
      abilities: ["Magia oscura", "Inteligencia", "Manipulación"]
    },
    // Agrega más personajes
  ]
  
  return (
    <div className="container mx-auto p-4 text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8 text-center">El Mundo del Juego</h1>
        
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Historia y Lore</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-4">
                En un mundo fracturado por la guerra mágica, las antiguas civilizaciones han caído, 
                dejando atrás sólo ruinas y secretos por descubrir.
              </p>
              <p className="text-lg mb-4">
                Los jugadores asumen el papel de un aventurero en busca de la legendaria "Reliquia 
                del Amanecer", un artefacto que promete restaurar el equilibrio al mundo.
              </p>
            </div>
            <motion.div whileHover={{ scale: 1.02 }}>
              <img 
                src="/world-map.jpg" 
                alt="Mapa del Mundo" 
                className="rounded-xl shadow-2xl"
              />
            </motion.div>
          </div>
        </section>
        
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Personajes Principales</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {characters.map((character, index) => (
              <CharacterCard 
                key={index}
                character={character}
                delay={index * 0.1}
              />
            ))}
          </div>
        </section>
        
      </motion.div>
    </div>
  )
}