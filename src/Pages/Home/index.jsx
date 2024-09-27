import './home.css'
import Nav from "../../Componets/Nav";
import PerksSection from '../../Componets/PerksSection';
import Footer from '../../Componets/Footer';


const Home = () => {
    return (
<div className="wrapper">
      <Nav/>
      <PerksSection/>
      <Footer/>
    </div>
    )
    
}

export default Home