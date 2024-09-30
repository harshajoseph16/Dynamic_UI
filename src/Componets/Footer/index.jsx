import './footer.css';
import Email from '../../Componets/Email';
import SocialIcons from '../SocialIcons';
import LanguageDropdown from '../LanguageDropdown';
import FooterCompo from '../FooterCompo';

const data = [
  {
    id: 1,
    heading: 'Products',
    link1: "Core HR",
    link2: "Employee Management",
    link3: "Leave Management",
    link4: "Time & Attendance",
    link5: "Payroll Management",
    link6: "People Analytics",
    link7: "Recruitment",
    link8: "Performance Management",
  },
  {
    id: 2,
    heading: 'Resources',
    link1: "All Resources",
    link2: "Blogs",
    link3: "Case Studies",
    link4: "Product Videos",
    link5: "HR Glossary",
  },
  {
    id: 3,
    heading: 'Platform',
    link1: "Log In",
    link2: "Schedule a Demo",
    link3: "Use Cases",
    link4: "Integrations",
    link5: "Pricing",
  },
  {
    id: 4,
    heading: 'Mobile App',
    image: 'Googleplay.png',
    image2: 'AppStore.png',
  },
];

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="logo">
            <img src='footer_logo.png' alt="Company Logo" />
          </div>
          <div className="email-sec">
            <h5>HR Updates, straight to your Inbox - Subscribe Today</h5>
            <Email />
          </div>
          <div className="footer-social">
            <LanguageDropdown />
            <SocialIcons />
          </div>
        </div>

        <div className="footer-middle">
          <div className="row">
            {data.map((item) => (
              <FooterCompo
                key={item.id}
                heading={item.heading}
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
            ))}
          </div>
        </div>

        <div className="footer-logos">
          <img src='Logo1.png' alt="Logo 1" />
          <img src='Logo1.png' alt="Logo 2" />
          <img src='logo2.png' alt="Logo 3" />
          <img src='logo3.png' alt="Logo 4" />
          <img src='logo5.png' alt="Logo 5" />
        </div>

        <div className="footer-btm">
          <div className="footer-bt-privacy">
            <ul>
              <li>
                <a href='#' key="privacy-policy">Privacy Policy</a>
              </li>
              <li>
                <a href='#' key="terms-of-use">Terms of Use</a>
              </li>
              <li>
                <a href='#' key="cookie-policy">Cookie Policy</a>
              </li>
            </ul>
          </div>
          <p>Copyright © 2024 KPI Group. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
