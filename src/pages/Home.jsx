import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import AnimatedSection from '../components/AnimatedSection'

export default function Home() {
  const videoRef = useRef(null)
  
  useEffect(() => {
    // Intenta autoplay el video
    const playVideo = async () => {
      try {
        await videoRef.current.play()
      } catch (err) {
        console.log("Autoplay prevented, showing fallback")
      }
    }
    
    playVideo()
  }, [])
  
  return (
    <div className="text-white">
      {/* Hero Section with Video */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video 
          ref={videoRef}
          className="absolute w-full h-full object-cover z-0"
          muted
          loop
          playsInline
          poster="/assets/poster.jpg"
        >
          <source src="/assets/game-trailer.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-black bg-opacity-50 z-1"></div>
        
        <motion.div 
          className="relative z-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">PROYECTO 0</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Una experiencia de juego única que te mantendrá al borde de tu asiento</p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full text-lg transition transform hover:scale-105">
            <a href='https://drive.google.com/uc?export=download&id=1u8AzToTKgRNV-3scPWteAc81MqMZx7cJ'>Descargar Ahora</a>
          </button>
        </motion.div>
      </section>
      
      {/* Game Description */}
      <AnimatedSection>
        <div className="container mx-auto py-20 px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Sobre el Juego</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Una Aventura Terrorífica</h3>
              <p className="text-lg mb-6">
                Sumérgete en un mundo lleno de misterio y terror. Explora el hospital abandonado y encuentra la salida antes de que sea tarde...
              </p>
              <p className="text-lg">
                Compatible con realidad virtual para una experiencia más inmersiva y con una historia cautivadora que te  
                mantendrá enganchado durante horas.
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="rounded-xl overflow-hidden shadow-2xl"
            >
              <img src="/assets/game-screenshot1.jpg" alt="Game Screenshot" className="w-full" />
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
      
      {/* Features Section */}
      <AnimatedSection>
        <div className="bg-gray-800 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">Características Principales</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Gráficos Impresionantes",
                  description: "Motor Unity 3D",
                  icon: "🎮"
                },
                {
                  title: "Realidad Virtual",
                  description: "Siente el verdadero terror",
                  icon: "🌐"
                },
                {
                  title: "Sonidos",
                  description: "Traspasa la 4º pared",
                  icon: "✨"
                }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-900 p-8 rounded-xl text-center"
                  whileHover={{ y: -10 }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                  <p>{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}