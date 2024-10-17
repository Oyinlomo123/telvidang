import img from "../assets/image.png"
import { Link } from "react-router-dom"
const Footer = () => {
  return (
    <div>
       <div className="lastbody">
              <div className="lastbody-flex"><br/><br/>
                <img src={img}/><br/><br/>
                <div className="Contact-flex">
                  <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#FFFFFF"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg>
                <h3> &nbsp; &nbsp; &nbsp;0700 0221 2013<br/> &nbsp; &nbsp; &nbsp;0700 02212012 </h3><br/>
                  </div><br/>
                <h3 className="tel"><svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#FFFFFF"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
                  &nbsp; &nbsp; telvida.com</h3><br/>
                  <div className="addressflex">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#FFFFFF"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>
                <h3> &nbsp; &nbsp; Telvida Intl. Systems,<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;Third Floor, AIICO Plaza
                  <br/>&nbsp;&nbsp;&nbsp;&nbsp;Plot PC12, Churchgate Street<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;victoria island, lagos state.</h3>
              </div>
            </div>
              
                <div className="lastbody-nav">                       
                  <div className="lastbody-flex middle">
                    <h2>SOLUTION</h2>
                    <ul>
                    <li><Link to="/unified">Unified Communication</Link></li>
                    <li><Link to="/computing">Cloud-Computing</Link></li>
                    <li><Link to="/connectivity">5G Connectivity(NVNO)</Link> </li>
                    <li><Link to="/advanced">Advanced Data Analysis</Link> </li>
                    <li><Link to="/consumable">Consumables</Link> </li>
                     </ul>
                    
                  </div>
                  <div className="lastbody-flex middle">
                    <h2>COMPANY</h2>
                    <ul>
                     <a href="aboutus.html"><li>ABOUT US</li></a>
                     <a href="#CONTACTUS"><li>CONTACT</li></a>
                    </ul>
                  </div>
                  <div></div>
                </div>  
            </div>
            <footer className="Copyright">
              <h4>Copyright @ telvida.ng</h4>
              <div className="font">
              <a href="https://www.facebook.com/telvida/" target="blak"><i class="ri-facebook-line"></i></a> &nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://x.com/telvidang" target="blak"><i class="ri-twitter-x-line"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://www.instagram.com/telvida_ng/" target="blak"><i class="ri-instagram-line"></i></a> &nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://www.linkedin.com/company/telvida/?originalSubdomain=ng" target="blak"><i class="ri-linkedin-fill"></i></a>
              </div>
            </footer>
    </div>
  )
}

export default Footer