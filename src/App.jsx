import React, { useState } from 'react';
import Header from './components/Header';
import Tabs from './components/Tabs';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import PromotionSection from './components/PromotionSection';
import LocalesSection from './components/LocalesSection';  
import ResenasSection from './components/ResenasSection';  // Importa arriba

function App() {
  const [activeTab, setActiveTab] = useState('Home');  // Empieza en Home para ver el hero

  return (
    <div className="min-h-screen bg-gray-50">
      <Header /> 

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tabs justo debajo del header, sin gap extra */}
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Contenido según la tab activa */}
        {activeTab === 'Home' && (
          <div>
            <HeroSection />
            <FeaturesSection />
            <PromotionSection/>
          </div>
        )}

        {activeTab === 'Locales' && (
          <div className="py-12">
            {/* Comentario opcional */}
    <p className="text-center text-gray-700 text-lg mb-8">
      Ubicacion y lista de locales aquí 
    </p>
    
    {/* Aquí sí va el componente, FUERA del <p> */}
    <LocalesSection />
          </div>
        )}


        {activeTab === 'Reseñas' && (
          <div className="py-12">
            <p className="text-center text-gray-500 text-lg">
              <ResenasSection />
            </p>
          </div>
        )}
      </main>
      <Footer/>
    </div>
  );
}

export default App;