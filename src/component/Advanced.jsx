import visualization from "../assets/visualization.png"
import strategy from "../assets/strategy and consulting.png"
import datacollect from "../assets/datacollect.png"
import staristical from "../assets/staristical.png"
import modelling from "../assets/data modelling.png"
import cloud from "../assets/cloud computing.png"
import consumable from "../assets/consumable.png"
import g from "../assets/5g.png"
import handuni from "../assets/handuni.png"
import { Link } from "react-router-dom"
const Advanced = () => {
  return (
    <div>
       <div className="ADVANCED-body">
            <h1>ADVANCED DATA ANALYSIS</h1>
          </div>
          <div>
            <h1 className="h1-ADVANCED">ADVANCED DATA ANALYSIS</h1>
            <h5 className="h5-ADVANCED">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum cumque mollitia fugiat ex doloremque dolores amet quo eaque labore, 
              alias minus tempore quia officiis similique. Perferendis, optio laborum? Explicabo, aliquid.
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ducimus, recusandae est tempore, obcaecati laboriosam, 
              molestiae sapiente at modi vel totam non! Impedit fugiat alias expedita? Ipsum eos esse aut?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam enim consectetur assumenda obcaecati quas placeat ab accusamus? 
            Facere ea, doloremque, ipsam ratione vero quas recusandae animi dignissimos, ipsa dolores provident?</h5>
          </div>
          <h1 className="h1-product">PRODUCT</h1><br/>
          <div className="Unifiedproduct">
            <div className="product" >
              <img src={visualization} alt=""/>
            <h3 >Data Visualizationg</h3>
            </div>
            <div className="product">
             <img src={strategy} alt=""/>
            <h3>Data strategy and consulting</h3>
            </div>
            <div className="product" >
              <img src={datacollect} alt=""/>
            <h3>Data collection and preparation</h3>
            </div>
            <div className="product">
              <img src={staristical} alt=""/>
            <h3>Statistical analysis</h3>
            </div>
            <div className="product">
              <img src= {modelling} alt=""/>
            <h3>Data modelling </h3>
            </div>
              </div>
              <div class="othersolution">
          <h1>OTHER SOLUTION</h1>
          <div class="sec-body-solution">
            <div class="sec-body-unified">
              <img class="productimg" src={handuni}/>
              <h2>Unified Communication</h2><br/>
              <h4>Build a smarter, more efficient organization. Drive transformation, optimization and automation for your organization with 
                our intelligent network as a service (NaaS) infrastructure.</h4><br/>
                <Link to="/unified"><button>Learn more</button></Link>
            </div>
            <div class="sec-body-unified">
              <img class="productimg" src={cloud}/>
              <h2>Cloud-Computing</h2><br/>
              <h4 class="text">Realizing the value of cloud starts with the right understanding of cloud. When you view cloud as 
                the enabler to drive business outcomes, great things happen to your business.</h4><br/>
                <Link to="/computing"><button>Learn more</button></Link><br/>
            </div>
          </div>
          <div class="sec-body-solution">
            <div class="sec-body-unified ">
              <img class="productimg" src={g}/>
              <h2>5G Connectivity(NVNO)</h2><br/>
              <h4>From VoIP and unified communication to advanced automation tools,Simplify cloud complexity,
                build long-term resilience and control costs.</h4><br/><br/><br/>
                <Link to="/connectivity"><button>Learn more</button></Link>
              </div>
            <div class="sec-body-unified">
              <img class="productimg" src={consumable}/>
              <h2>Consumables</h2><br/>
              <h4 class="text">Realizing the value of cloud starts with the right understanding of cloud. When you view cloud as 
                the enabler to drive business outcomes, great things happen to your business.</h4><br/>
                <Link to="/consumable"><button>Learn more</button></Link><br/>
            </div>
          </div>    
        </div>
    </div>
  )
}

export default Advanced