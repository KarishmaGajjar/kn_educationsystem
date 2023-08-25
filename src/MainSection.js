import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';


function MainSection() {
  return (
    <>
    <Header/>
    <div className='container'>
      <div className='row mt-5'>
        <div className='col-md-7 mt-5'>
          <h1 className='display-1' style={{fontFamily:"Source Sans Pro,Arial,sans-serif;"}}> <b>Learn without limits</b></h1><br/>
          <p className='title2' style={{fontFamily:"Source Sans Pro,Arial,sans-serif;"}}> Start, switch, or advance your career with more than 5,800 courses,<br/> Professional Certificates, and degrees from world-class universities and <br/>companies.</p>
          <button type="button" class="btn text-light" style={{backgroundColor:"#0056d2",borderColor:"black"}}>Join for free</button>&nbsp;&nbsp;&nbsp;
          <button type="button" class="btn" style={{borderWidth:"3px",borderColor:"#0056d2"}} >Try Coursera for Bussiness</button>
        </div>
        <div className='col-md-5'>
          <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/5CFC8u8XiXcbSOlVv6JZQx/4e6f898f57f9d798437b3aa22026e30b/CourseraLearners_C_Composition_Hillary_copy__3_.png?auto=format%2Ccompress&dpr=1&w=459&h=497&q=40" height="497px" width="459px" alt=""></img>
        </div>
      </div>
    </div>
    <hr/>
    <Footer/>
    </>
  );
}

export default MainSection;
