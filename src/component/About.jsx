import ourm from "../assets/ourm.png"
import ourv from "../assets/ourv (1).png"
import overview from "../assets/overview.png"
import ourcore from "../assets/ourcore.png"
import round from "../assets/round logo.png"
import facebook from "../assets/facebook.png"
import instagram from"../assets/instagram.png"
import amazon from "../assets/hp.png"
import airbnd from "../assets/airbnd.png"
import tinder from "../assets/tinder.png"
import microsoft from"../assets/microsoft.png"
import hubspot from "../assets/hubspot.png"
import google from "../assets/google.png"

const About = () => {
  return (
    <div>
      <div className="aboutbg">
        <h2 className="">A journey to World-Class<br/> Expertise</h2>
        <p>We deliver cutting-edge IT solutions with a bold vision for transforming emerging markets in the ever-evolving digital age.</p>
    </div>
    <div>
      <div className="overview1">
        <div className="overview-text">
          <h1>Company&nbsp;Overview</h1>
            <h5>
              Telvida International Systems is a 
              contemporary telecommunications <br/>
              business that specializes in providing 
              businesses and discerning individuals<br/> 
              with a flexible, affordable, and
              comprehensive suite of communication <br/>
              tools, enabling them to create a seamless 
              engagement experience for their <br/>
              employees and stakeholders, no matter where 
              they are or what devices<br/> they are 
              using.
            </h5>
          </div>
          <div className='overview-img'>
            <img src={overview} alt=""/>
          </div>
        </div>
    </div>
    <div class="our">
        <div class="overview2">
          <div class="ourvi">
            <img src={ourm} alt=""/>
            <h3>OUR MISSION</h3>
            <h5>To connect people and communities by 
              bridging the gap between technology <br/>
              and human needs, ensuring that every 
              customer's communication needs are <br/>
              met with innovation, affordability and 
              accessibility.</h5>
          </div>
            <div class="ourvi">
              <img src={ourv} alt=""/>
              <h3>OUR VISION</h3>
              <h5>To become a world-class 
                telecommunications company, <br/>
                connecting people and businesses across 
                borders and enabling seamless global 
                communication.</h5>
            </div>
            <div class="ourvi">
              <img src={ourcore} alt=""/>
              <h3>OUR CORE VALUE</h3>
              <h5>
                It guides our actions, decisions, and relationships. We are committed to honesty, 
                transparency, and ethical conduct in all that we do. It's not just a value we hold' 
                it's a way of life within our organization, influencing every interaction and decision.</h5>
            </div>
        </div>
      </div>
       {/* <div class="container" id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
      <div class="wrapper">
        <div class="wrapper-holder">
          <div class="wrapper-holder-img" id="slider-img-1"></div>
          <div class="wrapper-holder-img" id="slider-img-2"></div>
          <div class="wrapper-holder-img" id="slider-img-3"></div>
          <div class="wrapper-holder-img" id="slider-img-4"></div>
          <div class="wrapper-holder-img" id="slider-img-5"></div>
          <div class="wrapper-holder-img" id="slider-img-6"></div>
        </div>
      </div>
      <div class="button-holder">
        <a href="#slider-img-1" class="button"></a>
        <a href="#slider-img-2" class="button"></a>
        <a href="#slider-img-3" class="button"></a>
        <a href="#slider-img-4" class="button"></a>
        <a href="#slider-img-5" class="button"></a>
        <a href="#slider-img-6" class="button"></a>
      </div>
    </div>  */}
      <div class="ourcore">
      <h1>See what people are saying about Trustpilot</h1>
      <h5>We aim to continuously improve, and every review helps us provide better experiences for everyone.</h5>
      <div class="section-flex">
        <div class="section-grid">
          <i class="ri-arrow-left-s-line"></i>
          <div class="section-card">
            <h4 class="month"> <i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i> &nbsp;&nbsp; &nbsp;&nbsp;2 month ago &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<img src="image.png" alt=""/></h4><br/>
            <p><span ><i class="ri-double-quotes-l"></i></span>Telvida's ERP system has helped our management 
              system to be faster and easier. 
              </p>
              <div class="h5">
              <img class="round" src={round} alt=""/>
              <h5>Travel Beta <br/><span> Abuja</span> </h5>
              </div>
          </div>
          <div class="section-card">
            <h4 class="month"> <i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i> &nbsp;&nbsp; &nbsp;&nbsp;2 month ago &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<img src="image.png" alt=""/></h4><br/>
            <p><span ><i class="ri-double-quotes-l"></i></span>It saves time and cost. Makes our advertisements
              easy to publish and has increased our 
              sales ever since
              </p>
              <div class="h5">
              <img class="round" src={round} alt=""/>
              <h5>ARM pensions<br/><span> Abuja</span> </h5>
              </div>
          </div>  <div class="section-card">
            <h4 class="month"> <i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i> &nbsp;&nbsp; &nbsp;&nbsp;2 month ago &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<img src="image.png" alt=""/></h4><br/>
            <p><span ><i class="ri-double-quotes-l"></i></span>Despite the number of inputs daily, Telvida's 
              print management solution helps in managing 
              print jobs easily.
              </p>
              <div class="h5">
              <img class="round" src={round} alt=""/>
              <h5>Nigerian Breweries <br/><span> Abuja</span> </h5>
              </div>
          </div>
          <i class="ri-arrow-right-s-line"></i>
        </div>
        
      </div>
    </div>
    
    <div class="customer">
        <h1>Our customers span the globe</h1>
        <h4>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h4>
        <div class="customer-img">
          <img src={facebook} alt=""/>
          <img src={tinder} alt=""/>
          <img src={airbnd} alt=""/>
          <img src={hubspot} alt=""/>
          <img src={google} alt=""/>
          <img src={microsoft} alt=""/>
          <img src={amazon}alt=""/>
          <img src={instagram} alt=""/>
        </div>
    </div>
    </div>

  )
}

export default About