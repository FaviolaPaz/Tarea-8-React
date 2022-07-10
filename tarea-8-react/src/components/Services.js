import './styles/Services.css'
import management from '../assets/img/management.png';
import planning from '../assets/img/planning.png';
import marketing from '../assets/img/marketing.png';
import reports from '../assets/img/reports.png';


const Services = () => {
  return (
    <div className="services">
        <div className="service__1">
            <div className="service__grid">  
                <img className="services__img" alt="management" src={management} />
                <h5 className="service__h5">MANAGEMENT</h5>    
                <p className="services__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
        <div className="service__2">
            <div className="service__grid">  
                <img className="services__img" alt="planning" src={planning} />
                <h5 className="service__h5">PLANNING</h5>    
                <p className="services__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>  
        </div>
        <div className="service__3">
            <div className="service__grid">  
                <img className="services__img" alt="marketing" src={marketing} />
                <h5 className="service__h5">MARKETING</h5>    
                <p className="services__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>  
        </div>
        <div className="service__4">
            <div className="service__grid">  
                <img className="services__img" alt="reports" src={reports} />
                <h5 className="service__h5">REPORTS</h5>    
                <p className="services__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>  
        </div> 
    </div>
 
  )
}

export default Services