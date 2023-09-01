import logo from './logo.svg';
import coursera_logo from './coursera_logo.svg';
import Categories from './Categories';

import './App.css';

function Footer() {
  return (
    <>
      <div className='container-fluid mt-4' style={{backgroundColor:"#f5f5f5"}}>
        <div className='row ms-5'>
          <div className='col-md-4'>Coursera
          <div className='row-md-4'>About</div>
            <div className='row-md-4'>Categories</div>
            <div className='row-md-4'>Categories Details</div>
          </div>
          <div className='col-md-4'>Community</div>
          <div className='col-md-4'>More</div>
        </div>
      </div>
    </>
  );
}

export default Footer;