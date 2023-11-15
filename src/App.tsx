import './App.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import DownloadButton from './Components/DownLoadButton';

function App() {
  return (
    <div style={{ display: 'flex', height: '90vh', flexWrap: 'wrap', alignContent: 'space-between' }}>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 10 }}>
        <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} transitionTime={1000} interval={3000}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', flexDirection: 'column'}}>
            <img className="carousel-image" src="../assets/Images/logo_located2.png" alt="located logo" />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', flexDirection: 'column', marginBottom: 20}}>
            <img className="carousel-image" src="../assets/Images/Comments.png" alt="Comments" />
            <p style={{color: '#FFC600' }} >Clasificación automatizada de comentarios en positivos, negativos o neutros mediante algoritmos especializados</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', flexDirection: 'column'}}>
            <img className="carousel-image" src="../assets/Images/Recommendations.png" alt="Recommendations" />
            <p style={{color: '#FFC600' }} >Recomendaciones personalizadas de locales basadas en tus interacciones con Located.</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', flexDirection: 'column'}}>
            <img className="carousel-image" src="../assets/Images/Google.png" alt="Google login" />
            <p style={{color: '#FFC600' }}>Registro sencillo mediante tu cuenta de Google.</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', flexDirection: 'column'}}>
            <img className="carousel-image" src="../assets/Images/Rangos.png" alt="Rangos en mapas" />
            <p style={{color: '#FFC600' }}>Búsqueda de establecimientos dentro de un rango de 500 metros</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', flexDirection: 'column'}}>
            <img className="carousel-image" src="../assets/Images/Busquedas.png" alt="Busquedas" />
            <p style={{color: '#FFC600' }}>Búsqueda más precisa de establecimientos mediante categorías y rangos dinámicos</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', flexDirection: 'column'}}>
            <img className="carousel-image" src="../assets/Images/Splash.png" alt="Splash Screen" />
          </div>
        </Carousel>
      </div>
      <div style={{ flex: 1, backgroundColor: 'lightgray', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 10 }}>
        <div style={{ maxWidth: '80%', padding: '20px', textAlign: 'center', marginBottom: 100 }}>
          <img className="carousel-image" src="../assets/Images/logo_color.png" alt="located logo" />
          <img className="carousel-image" src="../assets/Images/logo_located.png" alt="located logo" />
          <DownloadButton />
        </div>
      </div>
    </div>
  );
}

export default App;
