import logo from './logo.svg';
import coursera_logo from './coursera_logo.svg';
import Categories from './Categories';

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
                <div className='col-5'><input type={'text'} value="" class="form-control" placeholder='What do you want?'></input></div>
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
        <hr/>
      </div>
    </>
  );
}

export default Header;