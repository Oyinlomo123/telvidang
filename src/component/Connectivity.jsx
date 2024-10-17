import videoconferencing from "../assets/videoconferencing.png"
import iptelephony from "../assets/iptelephony.png"
import cloudpbx from "../assets/cloudpbx.png"
import erp from "../assets/erp.png"
import wireless from "../assets/wireless.png"
import digital from "../assets/digital signal.png"
import analysis from "../assets/analysis.png"
import cloud from "../assets/cloud computing.png"
import consumable from "../assets/consumable.png"
import handuni from "../assets/handuni.png"
import { Link } from "react-router-dom"
const Connectivity = () => {
  return (
    <div>
       <div className="Connectivity-body">
            <h1>5G CONNECTIVITY</h1>
          </div>
          <div>
            <h1 className="h1-CONNECTIVITY">5G CONNECTIVITY</h1>
            <h5 className="h5-CONNECTIVITY">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum cumque mollitia fugiat ex doloremque dolores amet quo eaque labore, 
              alias minus tempore quia officiis similique. Perferendis, optio laborum? Explicabo, aliquid.
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ducimus, recusandae est tempore, obcaecati laboriosam, 
              molestiae sapiente at modi vel totam non! Impedit fugiat alias expedita? Ipsum eos esse aut?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam enim consectetur assumenda obcaecati quas placeat ab accusamus? 
            Facere ea, doloremque, ipsam ratione vero quas recusandae animi dignissimos, ipsa dolores provident?</h5>
          </div>
          <h1 className="h1-product">PRODUCT</h1><br/>
          <div className="connectivity-product">
            <div className="product" >
              <img src={videoconferencing} alt=""/>
            <h3 >Video Confrencing</h3>
            </div>
            <div className="product">
             <img src={iptelephony} alt=""/>
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
             {/* <div className="product">
            <h3>Document Management System</h3>
            </div>
            <div className="product">
              <h3>Print Management Systems</h3>
              </div>
              <div className="product">
              <h3>Information Security</h3>
              </div>  */}
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
               <div className="sec-body-unified solution">
                <img className="productimg" src={consumable}/>
                <h2>Consumables</h2><br/>
                <h4 className="text">Realizing the value of cloud starts with the right understanding of cloud. When you view cloud as 
                  the enabler to drive business outcomes, great things happen to your business.</h4><br/>
                  <Link to="/consumable"><button>Learn more</button></Link><br/>
              </div> 
            </div>    
          </div>
    </div>
  )
}

export default Connectivity