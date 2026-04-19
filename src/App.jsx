import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import HomePage from './pages/HomePage' // Import mis à jour vers le dossier pages
import TextUsWidget from './components/TextUsWidget'
import Footer from './components/Footer' 

function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      
      <main>
        <HeroSection />
        <HomePage />
      </main>

      <Footer />

      <TextUsWidget />
    </div>
  )
}

export default App;