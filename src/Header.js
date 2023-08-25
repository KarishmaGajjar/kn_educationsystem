import logo from './logo.svg';
import coursera_logo from './coursera_logo.svg';

import './App.css';

function Header() {
  return (
    <>
      <div className='container-fluid mt-4'>
        <div className='row'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='col-md-2'>
                <img src={coursera_logo} height="32px" width="127px" alt=""></img>
              </div>
              <div className='col-md-2'>
                <input type={'button'} value="Explore" name="expore" class="btn text-light" style={{backgroundColor:"#0056d2"}}></input>
              </div>
              <div className='col-md-6'>
                <div className='row'>
                <div className='col-4'><input type={'text'} value="" class="form-control" placeholder='What do you want?'></input></div>
                <div className='col-1'><button class="btn text-light fa fa-search" style={{backgroundColor:"#0056d2"}}></button></div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-4'>Home</div>
              <div className='col-4'>About</div>
              <div className='col-4'>Categories</div>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className='row mt-5 ms-4'>
          <div className='col-md-8'>
            <p className='h1'> Learn Without Limits</p>
            <p className='h5'> Start, switch, or advance your career with more than 5,800 courses,
            ,<br/> Professional Certificates, and degrees from world-class universities and <br/>companies.</p>
          </div>
          <div className='col-md-4'>
            <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/5CFC8u8XiXcbSOlVv6JZQx/4e6f898f57f9d798437b3aa22026e30b/CourseraLearners_C_Composition_Hillary_copy__3_.png?auto=format%2Ccompress&dpr=1&w=459&h=497&q=40" height="270px" width="270px" alt=""></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;