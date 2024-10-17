import cctv from "../assets/cctv.png"
import laptop from "../assets/laptop.png"
import inverter from "../assets/inverter.png"
import desktop from "../assets/desktop.png"
import printer from "../assets/printer.png"
import otherhardware from "../assets/otherhardware.png"
import laninstallation from "../assets/laninstallation.png"
import analysis from "../assets/analysis.png"
import cloud from "../assets/cloud computing.png"
import handuni from "../assets/handuni.png"
import g from "../assets/5g.png"
import { Link } from "react-router-dom"

const Consumable = () => {
  return (
    <div>
      
          <div className="CONSUMABLE-body">
            <h1>CONSUMABLE</h1>
          </div>
          <div>
            <h1 className="h1-CONSUMABLE">CONSUMABLE</h1>
            <h5 className="h5-CONSUMABLE">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum cumque mollitia fugiat ex doloremque dolores amet quo eaque labore, 
              alias minus tempore quia officiis similique. Perferendis, optio laborum? Explicabo, aliquid.
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ducimus, recusandae est tempore, obcaecati laboriosam, 
              molestiae sapiente at modi vel totam non! Impedit fugiat alias expedita? Ipsum eos esse aut?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam enim consectetur assumenda obcaecati quas placeat ab accusamus? 
            Facere ea, doloremque, ipsam ratione vero quas recusandae animi dignissimos, ipsa dolores provident?</h5>
          </div>
          <h1 className="h1-product">PRODUCT</h1>
          <div className="consumable-product">
            <div className="product" >
              <img src={laptop} alt=""/>
            <h3 >Laptops</h3>
            </div>
            <div className="product">
              <img src={cctv} alt=""/>
            <h3>CCTV Camera</h3>
            </div>
            <div className="product" >
              <img src={inverter} alt=""/>
            <h3>Inverters</h3>
            </div>
            <div className="product">
              <img src={laninstallation} alt=""/>
            <h3>LAN Installation</h3>
            </div>
            <div className="product">
              <img src={desktop} alt=""/>
            <h3>Desktops</h3>
            </div>
            <div className="product">
              <img src={printer} alt=""/>
            <h3>Printers</h3>
            </div><br/>
            <div className="product">
              <img src={otherhardware} alt=""/>
            <h3>Other Hardware Components</h3>
            </div><br/>
             
          </div>
          <div className="othersolution">
            <h1>OTHER SOLUTION</h1>
            <div className="sec-body-solution ">
              <div className="sec-body-unified solution">
                <img className="productimg" src={analysis}/>
                <h2>Advanced Data Analysis</h2><br/>
                <h4>Build a smarter, more efficient organization. Drive transformation, optimization and automation for your organization with 
                  our intelligent network as a service (NaaS) infrastructure. </h4><br/>
                  <Link to="/Advanced"><button>Learn more</button></Link>
              </div>
              <div className="sec-body-unified solution">
                <img className="productimg" src={cloud} />
                <h2>Cloud-Computing</h2><br/>
                <h4 className="text">Realizing the value of cloud starts with the right understanding of cloud. When you view cloud as 
                  the enabler to drive business outcomes, great things happen to your business.</h4><br/>
                  <Link to="/computing"><button>Learn more</button></Link><br/>
              </div>
            </div>
            <div className="sec-body-solution ">
              <div className="sec-body-unified">
                <img className="productimg" src={handuni}/>
                <h2>Unified Communication</h2><br/>
                <h4>Build a smarter, more efficient organization. Drive transformation, optimization and automation for your organization with 
                  our intelligent network as a service (NaaS) infrastructure.</h4><br/>
                  <Link to="/unified"><button>Learn more</button></Link>
              </div>
              <div class="sec-body-unified ">
              <img class="productimg" src={g}/>
              <h2>5G Connectivity(NVNO)</h2><br/>
              <h4>From VoIP and unified communication to advanced automation tools,Simplify cloud complexity,
                build long-term resilience and control costs.</h4><br/><br/><br/>
                <Link to="/connectivity"><button>Learn more</button></Link>
              </div>
            </div>    
          </div>
    </div>
  )
}

export default Consumable