import './footer.css';
import Email from '../../Componets/Email'
import SocialIcons from '../SocialIcons';
import LanguageDropdown from '../LanguageDropdown';
import FooterCompo from '../FooterCompo';

const data = [
  

{  
    heading: 'Products ',
      link1: "Core HR",
      link2: "Employee Management",
      link3: "Leave Management",
      link4: "Time & Attendance ",
      link5: "Payroll Management ",
      link6: "People Analytics",
      link7: "Recruitment ",
      link8: "Performance Management ",

},

{
    heading : 'Resources',
    link1: "All Resources",
      link2: "Blogs",
      link3: "Case Studies",
      link4: "Product Videos ",
      link5: "HR Glossary ",
    
},
{
    heading : 'Platform',
    link1: "Log In",
      link2: "Schedule a Demo",
      link3: "Use Cases",
      link4: "Integrations ",
      link5: "Pricing ",
    
},

{
    heading : 'Mobile App',
    image: 'Googleplay.png',
    image2: 'AppStore.png',


},

]
const Footer = () => {
    return (

        <>
        <div className="footer">
            <div className="container">
           <div className="footer-top">
            <div className="logo">            <img src='footer_logo.png'></img>
            </div>
            <div className="email-sec">
                <h5>HR Updates, straight to your Inbox - Subscribe Today </h5>
                <Email/>
            </div>
            <div className="footer-social">
                <LanguageDropdown />
               <SocialIcons/> 
            </div>
           </div>

           <div className="footer-middle">

           <div className="row">
                    {data.map ((item) => {
                        return (
                            <FooterCompo

                            heading= {item.heading}
                            text= {item.text}
                            paragraph={item.paragraph}
                            paragraph1={item.paragraph1}
                            paragraph2={item.paragraph2}
                            link1={item.link1}
                            link2={item.link2}
                            link3={item.link3}
                            link4={item.link4}
                            link5={item.link5}
                            link6={item.link6}
                            link7={item.link7}
                            link8={item.link8}
                            image={item.image}
                            image2={item.image2}



                            
                            />
                        )
                    })}
                    
                </div>           </div>

                <div className="footer-logos">
                    <img src='Logo1.png'></img>
                    <img src='Logo1.png'></img>
                    <img src='logo2.png'></img>
                    <img src='logo3.png'></img>
                    <img src='logo5.png'></img>

                </div>

                <div className="footer-btm">
                    <div className="footer-bt-privacy">
                        <ul>
                            <li>
                                <a href='#'>Privacy Policy</a>
                                <a href='#'>Terms of Use</a>
                                <a href='#'>Cookie Policy</a>

                            </li>
                        </ul>
                    </div>
                    <p>Copyright © 2024 KPI Group. All Rights Reserved.</p>
                </div>

            </div>

        </div>
        </>
    )
}
export default Footer;