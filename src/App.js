import './App.css';
import Mynav from "./components/Navbar.js";
import Hero from "./components/Section2.js";
import  Myslide from "./components/Slider.js"
import data from "./components/data.js"





function App() {
  const Card =data.map(item=>{
    return(
    
      <Myslide 
      img= {item.coverImg}
      rating={item.stats.rating}
      review={item.stats.reviewCount}
      country={item.location}
      title={item.title}
      price={item.price}
    />

    )
  })
 
  return (
    <div className="App">
    
      
      <Mynav />
      <Hero />
      {Card}
    
      
      
    </div>
  );
}

export default App;
/**/
                /*
Challenge: Pass props to the Card component and display that data

- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)

*/




/* <div className="objects">
                <img src={logo2} alt="logo " className="pics" />
                <div className="details">
                        <i class="fa-solid fa-star"></i>
                        <span>5.0</span>
                        <span>(6) • </span>
                        <span >USA</span>
                    </div>
                <p>Life Lessons with Katie Zaferes</p>
                <p>From $136 / person</p>
        
              
            </div>
            <div className="objects">
                <img src={logo3} alt="logo " className="pics"  />
                <div className="details">
                        <i class="fa-solid fa-star"></i>
                        <span>5.0</span>
                        <span>(6) • </span>
                        <span >USA</span>
                    </div>
                <p>Life Lessons with Katie Zaferes</p>
                <p>From $136 / person</p>
        
              
            </div>*/

          /*  const Card = data.map(item=> {
              return(
                <Myslide 
                  rating="5.0"
                  review="(6)"
                  country="Nigeria"
                  title="Life Lessons with Katie Zaferes"
                  price="$136"
                />
              )
            })*/