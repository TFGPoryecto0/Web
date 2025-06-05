import { motion } from 'framer-motion'
import CharacterCard from '../components/CharacterCard'

export default function AboutGame() {
  const characters = [
    {
      name: "Elizabeth",
      description: "La protagonista de nuestra historia, una detective con un misterio entre manos.",
      image: "/hero.jpg",
      abilities: ["Determinación", "Valor", "Inteligente"]
    },
    {
      name: "Red John",
      description: "El antagonista principal, escondido entre las sombras, evitando que nadie salga de este hospital.",
      image: "src/assets/images/antagonista.png",
      abilities: ["Sombrío", "Espeluznante", "Manipulador"]
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
        <h1 className="text-4xl font-bold mb-8 text-center">El Mundo de Paciente 0</h1>
        
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Historia y Lore</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-4">
                Años después de su clausura repentina, el Hospital Psiquiátrico San Elías permanece en ruinas, olvidado por el mundo... oficialmente.

                Nadie supo nunca qué provocó su cierre: no hubo incendio, ni catástrofe natural, ni informe público. Solo un abrupto abandono. Expedientes fueron sellados, y las autoridades nunca dieron explicaciones. Algunos hablan de experimentos médicos secretos. Otros, de pacientes que desaparecían sin dejar rastro.

                Tú despiertas solo, en una sala oscura. No recuerdas cómo llegaste, ni quién eres con certeza. Solo sabes que no estás solo.

                Las cámaras parpadean. Las luces fallan. Algo —o alguien— te está observando desde los rincones oscuros del edificio. Su presencia se siente, pero nunca se muestra del todo. Te estudia. Se anticipa.

                Mientras exploras pasillos oxidados, habitaciones selladas y registros olvidados, descubres que tus pasos forman parte de un juego mayor, uno que alguien o algo empezó hace años y que aún sigue en marcha.

                Escapar no será solo salir por la puerta. Será enfrentar lo que acecha, descubrir tu vínculo con el hospital… y decidir hasta qué punto puedes confiar en tu mente.
              </p>

            </div>
            <motion.div whileHover={{ scale: 1.02 }}>
              <img 
                src="src\assets\images\fondoInicio.jpg" 
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