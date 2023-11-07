import './App.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import DownloadButton from './Components/DownLoadButton'

function App() {

  return (
    <div style={{ display: 'flex', height: '90vh', flexWrap: 'wrap', alignContent: 'space-between' }}>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 10 }}>
        <Carousel showArrows={true} autoPlay={true}  infiniteLoop={true} transitionTime={1000} interval={3000}>
          <div>
            <img src="https://innovainternetmx.com/wp-content/uploads/app.jpeg" alt="Imagen 1" />
          </div>
          <div>
            <img src="https://www.lancetalent.com/blog/wp-content/uploads/crear-una-app.png" alt="Imagen 2" />
          </div>
          <div>
            <img src="https://www.lancetalent.com/blog/wp-content/uploads/crear-una-app.png" alt="Imagen 3" />
          </div>
          <div>
            <img src="https://innovainternetmx.com/wp-content/uploads/app.jpeg" alt="Imagen 1" />
          </div>
        </Carousel>
      </div>
      <div style={{ flex: 1, backgroundColor: 'lightgray', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 10 }}>
        <div style={{ maxWidth: '80%', padding: '20px', textAlign: 'center' }}>
          <h1>Located</h1>
          <DownloadButton />
        </div>
      </div>
    </div>
  )
}

export default App
