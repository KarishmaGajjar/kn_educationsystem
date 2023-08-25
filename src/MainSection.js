import logo from './logo.svg';
import './App.css';
import Header from './Header';


function MainSection() {
  return (
    <>
     <div className='row mt-5 ms-4'>
      <div className='col-md-8'>
        <p className='h1'><b> Learn Without Limits </b></p>
        <p className='h5'> Start, switch, or advance your career with more than 5,800 courses,
        ,<br/> Professional Certificates, and degrees from world-class universities and <br/>companies.</p>
      </div>
      <div className='col-md-4'>
        <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/5CFC8u8XiXcbSOlVv6JZQx/4e6f898f57f9d798437b3aa22026e30b/CourseraLearners_C_Composition_Hillary_copy__3_.png?auto=format%2Ccompress&dpr=1&w=459&h=497&q=40" height="270px" width="270px" alt=""></img>
      </div>
    </div>
    </>
  );
}

export default MainSection;
