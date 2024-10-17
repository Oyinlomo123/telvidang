import { Link } from "react-router-dom"
import img from "../assets/image.png"

const Hero = () => {

    const menu =()=>{
    var menuState = document.getElementById('smallnav')
    var style = window.getComputedStyle(menuState);
    console.log(style.display)
    if (style.display=="block"){
      menuState.style.display = "none"
    }else{
      menuState.style.display = "block"
    }
  }
  return (
    <div>
      <header>
        <div>
          <Link to={"/"}><img  src={img}/></Link>
        </div>
        <div className="big-scrn-navbar">
          <nav>
            <ul className="nav-links">
              <li className="nav-link" >
                <Link to={"/"}>HOME</Link>
                </li>
                    <li className="nav-link service">
                      <Link to="#PRODUCT">SOLUTION</Link>
                      <ul className="dropdown">
                    <li><Link to="/unified">Unified Communication</Link></li>
                    <li><Link to="/computing">Cloud-Computing</Link></li>
                    <li><Link to="/connectivity">5G Connectivity(NVNO)</Link> </li>
                    <li><Link to="/advanced">Advanced Data Analysis</Link> </li>
                    <li><Link to="/consumable">Consumables</Link> </li>
                      </ul>
                    </li>
                    <li className="nav-link "> 
                    <Link to="/aboutus">ABOUT&nbsp;US</Link></li>
                    <li className="nav-link "><Link to="#CONTACTUS">CONTACT&nbsp;US</Link></li>
                   
            </ul>
          </nav>
          <button className="btn" id="menu" onClick={menu}><i className="ri-menu-line"></i>
          </button>
        </div>
        
    </header>
    <div>
            <nav>
              <ul className="small-nav " id="smallnav">
                <li className="nav-link " >
                  <Link to="/">HOME</Link>
                  </li>
                      <li className="nav-link service">
                        <a href="#PRODUCT">SOLUTION</a>
                        <ul className="dropdown">
                        <li><Link to="/unified">Unified Communication</Link></li>
                        <li><Link to="/computing">Cloud-Computing</Link></li>
                        <li><Link to="/connectivity">5G Connectivity(NVNO)</Link> </li>
                        <li><Link to="/advanced">Advanced Data Analysis</Link> </li>
                        <li><Link to="/consumable">Consumables</Link> </li>
                        </ul>
                      </li>
                      <li className="nav-link "> 
                      <Link to="/aboutus">ABOUT&nbsp;US</Link></li>
                      <li className="nav-link "><a href="#CONTACTUS">CONTACT&nbsp;US</a></li>
                      <li className="nav-link" >
                <a href="signin.html">sign&nbsp;in</a>
                </li>
                
              </ul>
            </nav>
        </div>
    </div>
  )
}

export default Hero