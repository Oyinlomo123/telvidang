
import analysis from "../assets/analysis.png"
import cloud from "../assets/cloud computing.png"
import consumable from "../assets/consumable.png"
import g from "../assets/5g.png"
import videoconferencing from "../assets/videoconferencing.png"
import iptelephony from "../assets/iptelephony.png"
import cloudpbx from "../assets/cloudpbx.png"
import erp from "../assets/erp.png"
import wireless from "../assets/wireless.png"
import digital from "../assets/digital signal.png"
import document from "../assets/document.png"
import prints from "../assets/print.png"
import info from "../assets/informationsecurity.png"
import { Link } from "react-router-dom"

const Unified = () => {
  return (
    <div>
       <div>
       <div className="unified-body">
            <h1>UNIFIED COMMUNICATION</h1>
          </div>
          <div>
            <h1 className="h1-Unified-Communication">UNIFIED COMMUNICATION</h1>
            <h5 className="h5-Unified-Communication">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum cumque mollitia fugiat ex doloremque dolores amet quo eaque labore, 
              alias minus tempore quia officiis similique. Perferendis, optio laborum? Explicabo, aliquid.
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ducimus, recusandae est tempore, obcaecati laboriosam, 
              molestiae sapiente at modi vel totam non! Impedit fugiat alias expedita? Ipsum eos esse aut?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam enim consectetur assumenda obcaecati quas placeat ab accusamus? 
            Facere ea, doloremque, ipsam ratione vero quas recusandae animi dignissimos, ipsa dolores provident?</h5>
          </div>
          <h1 className="h1-product">PRODUCT</h1><br/>
          <div className="Unifiedproduct">
            <div className="product" >
              <img src={videoconferencing} alt="videoconferencing"/>
             <h3 >Video Confrencing</h3>
            </div>
            <div className="product">
              <img src={iptelephony }alt=""/>
             <h3>IP Telephony</h3>
            </div>
            <div className="product" >
              <img src={cloudpbx} alt=""/>
             <h3>Cloud PBX</h3>
            </div>
            <div className="product">
              <img src={erp} alt=""/>
             <h3>ERP solution</h3>
            </div>
            <div className="product">
              <img src={wireless} alt=""/>
              <h3>Wireless Presentation System</h3>
            </div>
            <div className="product">
              <img src={digital} alt=""/>
              <h3>Digital Signage</h3>
            </div>
            <div className="product">
              <img src={document} alt=""/>
              <h3>Document Management System</h3>
            </div>
            <div className="product">
              <img src={prints} alt=""/>
              <h3>Print Management Systems</h3>
            </div>
              <div className="product">
                <img src={info} alt=""/>
                <h3>Information Security</h3>
              </div>
          </div>
          <br/>
          <div className="othersolution">
            <h1>OTHER SOLUTION</h1>
            <div className="sec-body-solution">
              <div className="sec-body-unified solution">
                <img className="productimg" src={analysis}/>
                <h2>Advanced Data Analysis</h2><br/>
                <h4>Build a smarter, more efficient organization. Drive transformation, optimization and automation for your organization with 
                  our intelligent network as a service (NaaS) infrastructure. </h4><br/>
                  <Link to="/advanced"><button>Learn more</button></Link>
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
              <div className="sec-body-unified solution">
                <img className="productimg" src={g}/>
                <h2>5G Connectivity(NVNO)</h2><br/>
                <h4>From VoIP and unified communication to advanced automation tools,Simplify cloud complexity,
                  build long-term resilience and control costs.</h4><br/><br/><br/>
                  <Link to="/connectivity"><button>Learn more</button></Link>
                </div>
               <div className="sec-body-unified solution">
                <img className="productimg" src={consumable}/>
                <h2>Consumables</h2><br/>
                <h4 className="text">Realizing the value of cloud starts with the right understanding of cloud. When you view cloud as 
                  the enabler to drive business outcomes, great things happen to your business.</h4><br/>
                  <Link to="/consumables"><button>Learn more</button></Link><br/>
              </div> 
            </div>    
          </div>
    </div>
    </div>
  )
}

export default Unified