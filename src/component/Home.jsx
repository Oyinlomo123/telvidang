import cloudv from "../assets/video2.mp4"
import handuni from "../assets/handuni.png"
import epson from "../assets/epson.png"
import ibm from "../assets/ibm.png"
import dax from "../assets/dax.png"
import lenovo from "../assets/lenovo.png"
import sonicwall from "../assets/sonicwall.png"
import hp from "../assets/hp.png"
import microsoft from "../assets/microsoft.png"
import avaya from "../assets/avaya.png"
import netgear from "../assets/netgear.png"
import powerone from "../assets/powerone.png"
import lifesize from "../assets/lifesize.png"
import cyberoam from "../assets/cyberoam.png"
import extron from "../assets/extron.png"
import middleimg from "../assets/middleimg.png"
import revolabs from "../assets/revolabs.png"
import rm from "../assets/r&m.png"
import emc from "../assets/emc.png"
import redhat from "../assets/redhat.png"
import ruckus from "../assets/ruckus.png"
import samsung from "../assets/samsung.png"
import systimax from "../assets/systimax.png"
import molex from "../assets/molex.png"
import barco from "../assets/barco.png"
import fortinet from "../assets/fortinet.png"
import crest from "../assets/crest.png"
import juniper from "../assets/juniper.png"
import amp from "../assets/amp.png"
import computing from"../assets/cloud computing.png"
import g from "../assets/5g.png"
import analysis from"../assets/analysis.png"
import consumable from"../assets/consumable.png"
import thirdbodypic from"../assets/thirdbodypic.png"
import { Link } from "react-router-dom"
const Home = () => {
  return (
    <div>
       <div className="body" >
          <h1 className="body-content-h1">Your partner for<br/> Digital <span className="trans">Transformation</span></h1>
          <h3 className="body-content-h3">Full suite of communications solutions, computing, and managed services. We are a trusted partner for your digital transformation journey.</h3>
          <button className="body-content-button">Explore Your Solution</button>
        </div> 

        <div className="sec-body">
            <h1>Technology Solutions to power growth</h1>
            <h4>We utilize advances in AI and Cloud Computing to deliver cutting edge cost-effective IT solutions.</h4>
            <div className="sec-body-tspg">
              <div className="sec-body-unified">
                <img className="productimg" src={handuni}/>
                <h2>Unified Communication</h2><br/>
                <h4>Build a smarter, more efficient organization. Drive transformation, optimization and automation for your organization with 
                  our intelligent network as a service (NaaS) infrastructure.</h4>
                  <Link to="/unified"><button>Learn more</button></Link>
              </div>
              <div className="sec-body-unified">
                <img className="productimg" src={computing}/>
                <h2>Cloud-Computing</h2><br/>
                <h4 className="text">Realizing the value of cloud starts with the right understanding of cloud. When you view cloud as 
                  the enabler to drive business outcomes, great things happen to your business.</h4>
                  <Link to="/cloud"><button>Learn more</button></Link>
              </div>
              <div className="sec-body-unified">
                <img className="productimg" src={g}/>
                <h2>5G Connectivity(NVNO)</h2><br/><br/>
                <h4>From VoIP and unified communication to advanced automation tools,Simplify cloud complexity,
                  build long-term resilience and control costs.</h4>
                  <Link to="/connectivity"><button>Learn more</button></Link>
              </div>
            </div>
            <div className="sec-body-tspg">
              <div className="sec-body-unified advan">
                <img className="productimg" src={analysis}/>
                <h2>Advanced Data Analysis</h2>
                <h4>Build a smarter, more efficient organization. Drive transformation, optimization and automation for your organization with 
                  our intelligent network as a service (NaaS) infrastructure. </h4>
                  <Link to="/Advanced"><button>Learn more</button></Link>
              </div>
              <div className="sec-body-unified product3"><br/>
                <img  src={middleimg}/>
            </div>
              <div className="sec-body-unified">
                <img className="productimg" src={consumable}/>
                <h2>Consumables</h2><br/>
                <h4 className="text">Realizing the value of cloud starts with the right understanding of cloud. When you view cloud as 
                  the enabler to drive business outcomes, great things happen to your business.</h4>
                  <Link to="/consumable"><button>Learn more</button></Link>
              </div>
              
            </div>
          </div>
          <div className="video-body">
            <div>
              <video autoPlay loop muted className="back-video">
                <source src={cloudv} type="video/mp4"/>
              </video>
            </div>
              <div className="video-content">
                <h5>Cloud-Based End-to-End Solutions</h5>
                <h1 className="video-h1">Unlock the Power of Cloud Computing</h1>
                <h4 className="video-h4">Empower your business with our cloud-based end-to-end solutions</h4>
                <ul className="cloud-based-list">
                  <li> <i className="ri-check-line"></i><a href="#" >5G Tiers MVNO</a></li>
                  <li><i className="ri-check-line"></i><a href="#" >CRM/ERP</a></li>
                  <li><i className="ri-check-line"></i><a href="#" >Email</a></li>
                  <li><i className="ri-check-line"></i><a href="#" >Scalable&nbsp;infrastructure</a></li>
                  <li><i className="ri-check-line"></i><a href="#" >Storage</a></li>
                </ul>
              </div>
            </div><br/><br/>
            <div className="partner">
            
            <div className="">
              <h3>OUR PARTNER</h3>
              <marquee scrollamount="10" direction="left">
              
              <img src={ibm}/>
              <img src={dax}/>
              <img src={lenovo}/>
              <img src={sonicwall}/>
                <img src={hp}/>
                <img src={microsoft}/>
                <img src={epson}/>
                <img src={avaya}/>
                <img src={netgear}/>
                <img src={lifesize}/>
                <img src={powerone}/>
                <img src={cyberoam}/>
                <img src={extron}/>
                <img src={revolabs}/>
                <img src={emc}/>
                <img src={ruckus}/>
                <img src={redhat}/>
                <img src={rm}/>
                <img src={molex}/>
                <img src={barco}/>
                <img src={fortinet}/>
                <img src={crest}/>
                <img src={juniper}/>
                <img src={amp}/>
                <img src={samsung}/>
                <img src={systimax}/>
              </marquee>
            </div>
          </div>
          <div className="third-bod-div">
            <h1  className="third-bod-div-h1">Integrated workflow designed for product teams</h1>
            <h4 className="third-bod-div-h4">Ditch data silos. Streamline your workflow with seamless integration between <br/> Telvida and all your existing CRM and ERP platforms.</h4>
            
            <div className="third-bod-div-box">
              <div className="third-bod-div-box1">
                <h2 className="third-bod-div-box1-h2">Optimize and scale, easy to start</h2>
                <h4 className="third-bod-div-box1-h4">Leave IT headaches behind. Securely migrate your operations to the cloud with Telvida's comprehensive suite of cloud solutions.</h4>
              </div>
              <div className="third-bod-div-box2">
                <img className="third-bod-div-box2-img" src={thirdbodypic} alt=""/>
              </div>
            </div>
          </div> 
          {/* <div className="forth-body">
            <h1>Refreshing news for developers and designers</h1>
            <div className="forth-body-refresh">

              <div className="forth-body-flex">
                <img className="forth-body-img" src="workflow.png" alt=""/>
                <h2>Designing a functional workflow at home</h2>
                <h5 className="forth-body-flex-h5">With Telvida's guidance, individuals can establish a structured routine, designate a conducive workspace, leverage technology effectively, and maintain a healthy work-life balance, ensuring success and well-being in a remote work setting.</h5>
                <a href="h"><button className="forth-body-button">Product</button></a><a href="h"><button className="forth-body-button1">Engineering</button></a><br/><br/>
                <img className="forth-body-img1" src="kindpng_7191738.png"/>
                <h5 className="forth-body-flex-h55">thomos joseph</h5>
              </div>
              <div className="forth-body-flex"><img className="forth-body-img Brand" src="brand.png" alt=""/>
                <h2>Why Your Startup Needs a Strong Brand Identity</h2>
                  <h5 className="forth-body-flex-h5">With Telvida's guidance, individuals can establish a structured routine, designate a conducive workspace, leverage technology effectively, and maintain a healthy work-life balance, ensuring success and well-being in a remote work setting.</h5>
                  <a href="h"><button className="forth-body-button">Product</button></a><a href="h"><button className="forth-body-button1">Engineering</button></a><br/><br/>
                  <img className="forth-body-img1" src="kindpng_7191738.png"/>
                  <h5 className="forth-body-flex-h55">thomos joseph</h5>
              </div>
              <div className="forth-body-flex"><img className="forth-body-img" src="Screenshot 2024-04-23 095323.png" alt=""/>
                <h2>The Benefits of Agile Methodology for Startups</h2>
                  <h5 className="forth-body-flex-h5">With Telvida's guidance, individuals can establish a structured routine, designate a conducive workspace, leverage technology effectively, and maintain a healthy work-life balance, ensuring success and well-being in a remote work setting.</h5>
                  <a href="h"><button className="forth-body-button">Product</button></a><a href="h"><button className="forth-body-button1">Engineering</button></a><br/><br/>
                  <img className="forth-body-img1" src="kindpng_7191738.png"/>
                  <h5 className="forth-body-flex-h55">thomos joseph</h5>
              </div>

            </div>
          </div> */}

    </div>
  )
}

export default Home