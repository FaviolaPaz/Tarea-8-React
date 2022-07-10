
import carrusel1 from '../assets/img/carrusel-1.jpg';
import carrusel2 from '../assets/img/carrusel-2.jpg';
import carrusel3 from '../assets/img/carrusel-3.jpg';

const Slider = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
        <img className="carousel__img" alt="carousel1" src={carrusel1} />    
    </div>
    <div className="carousel-item">
        <img className="carousel__img" alt="carousel2" src={carrusel2} />
    </div>
    <div className="carousel-item">
        <img className="carousel__img" alt="carousel3" src={carrusel3} />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Slider