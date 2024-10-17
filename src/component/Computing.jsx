import database from "../assets/database.png"
import networking from "../assets/networking.png"
import storage from "../assets/storage.png"
import analysys from "../assets/analysys.png"
import handuni from "../assets/handuni.png"
import analysis from "../assets/analysis.png"
import g from "../assets/5g.png"
import consumable from "../assets/consumable.png"
import { Link } from "react-router-dom"

const Computing = () => {
  return (
   <div>
        <div className="CLOUD-body">
            <h1>CLOUD-COMPUTING</h1>
          </div>
          <div>
            <h1 className="h1-CLOUD-COMPUTING">CLOUD-COMPUTING</h1>
            <h5 className="h5-CLOUD-COMPUTING">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum cumque mollitia fugiat ex doloremque dolores amet quo eaque labore, 
              alias minus tempore quia officiis similique. Perferendis, optio laborum? Explicabo, aliquid.
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ducimus, recusandae est tempore, obcaecati laboriosam, 
              molestiae sapiente at modi vel totam non! Impedit fugiat alias expedita? Ipsum eos esse aut?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam enim consectetur assumenda obcaecati quas placeat ab accusamus? 
            Facere ea, doloremque, ipsam ratione vero quas recusandae animi dignissimos, ipsa dolores provident?</h5>
          </div>
          <h1 className="h1-product">PRODUCT</h1><br/>
          <div className="cloud-product">
            <div className="product">
              <img src={database}/>
              <h3>Database management</h3>
            </div>
            <div className="product">
              <img src={networking}/>
              <h3>Networking</h3>
            </div>
            <div className="product">
              <img src={storage}/>
              <h3>Storages</h3>
            </div>
            
            <div className="product">
              <img src={analysys}/>
              <h3>Software Analytics</h3>
            </div>
          </div><br/>
          
          <div className="othersolution">
            <h1>OTHER SOLUTION</h1>
            <div className="sec-body-solution">
              <div className="sec-body-unified">
                <img className="productimg" src={handuni}/>
                <h2>Unified Communication</h2><br/>
                <h4>Build a smarter, more efficient organization. Drive transformation, optimization and automation for your organization with 
                  our intelligent network as a service (NaaS) infrastructure.</h4><br/>
                  <Link to="/unified"><button>Learn more</button></Link>
              </div>
              <div className="sec-body-unified">
                <img className="productimg" src={analysis}/>
                <h2>Advanced Data Analysis</h2><br/>
                <h4>Build a smarter, more efficient organization. Drive transformation, optimization and automation for your organization with 
                  our intelligent network as a service (NaaS) infrastructure. </h4><br/>
                  <Link to="/advanced"><button>Learn more</button></Link>
              </div>
            </div>
            <div className="sec-body-solution">
              <div className="sec-body-unified ">
                <img className="productimg" src={g}/>
                <h2>5G Connectivity(NVNO)</h2><br/>
                <h4>From VoIP and unified communication to advanced automation tools,Simplify cloud complexity,
                  build long-term resilience and control costs.</h4><br/><br/><br/>
                  <Link to="/connectivity"><button>Learn more</button></Link>
                </div>
              <div className="sec-body-unified">
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

export default Computing