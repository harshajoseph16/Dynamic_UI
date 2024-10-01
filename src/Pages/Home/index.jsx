import './home.css'
import Nav from "../../Componets/Nav";
import PerksSection from '../../Componets/PerksSection';
import Footer from '../../Componets/Footer';
import TabComponents from '../../Componets/TabComponents';
import ScheduleDemo from '../../Componets/ScheduleDemo';


const Home = () => {
    return (
<div className="wrapper">
      <Nav/>
      <ScheduleDemo/>
      <TabComponents/>
      <PerksSection/>
      <Footer/>
    </div>
    )
    
}

export default Home