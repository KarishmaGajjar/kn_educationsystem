import logo from './logo.svg';
import coursera_logo from './coursera_logo.svg';
import Categories from './Categories';

import './App.css';

function Header() {
  return (
    <>
      <div className='container-fluid mt-4'>
        <div className='row'>
          <div className='col-md-7'>
            <div className='row'>
              <div className='col-md-3'>
                <img src={coursera_logo} height="32px" width="127px" alt=""></img>
              </div>
              <div className='col-md-2'>
                <input type={'button'} value="Explore" name="expore" class="btn text-light" style={{backgroundColor:"#0056d2",borderColor:"black"}}></input>
              </div>
              <div className='col-md-4'>
                <div className='input-group mb-3'>
                <input type={'text'} value="" class="form-control" placeholder='What do you want?'></input>
                <button class="btn text-light fa fa-search" style={{backgroundColor:"#0056d2",borderColor:"black"}}></button>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-5'>
            <div className='row'>
              <div className='col-4'>Online Degrees</div>
              <div className='col-4'>Find your new Career</div>
              <div className='col-2'>Log In</div>
              <div className='col-2'><button class="btn text-light" style={{backgroundColor:"#0056d2",borderColor:"black"}}>Join</button></div>
            </div>
          </div>
          <hr/>
        </div>
      </div>
    </>
  );
}

export default Header;