import logo from './logo.svg';
import coursera_logo from './coursera_logo.svg';

import './App.css';

function Categories() {
  return (
    <>
    
    <div className='row'>
      <div className='col-md-12'>
        <p className='h1 ms-3'> Start learning with free courses </p>
      </div>
      <div className='row'>
        <div className='col-md-12'>
          <p className='fs-3 ms-3'> Explore free online courses from the world's top universities and companies.</p>
        </div>
      </div>
    </div>
    <div className='row ms-5'>
      <div className='col-md-3'>
          <div className="card" style={{ width: '17rem' }}>
          <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/ddp/branding/bcs-uol/thumbnail.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=204&fit=crop&q=50" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Python</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Click to start learning</a>
          </div>
      </div>
      </div>
      <div className='col-md-3'>
          <div className="card" style={{ width: '17rem' }}>
          <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/ddp/branding/bcs-uol/thumbnail.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=204&fit=crop&q=50" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">React</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Click to start learning</a>
            </div>
          </div>
      </div>
      <div className='col-md-3'>
          <div className="card" style={{ width: '17rem' }}>
          <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/ddp/branding/bcs-uol/thumbnail.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=204&fit=crop&q=50" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">MVC ASP.NET</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Click to start learning</a>
            </div>
          </div>
      </div>
      <div className='col-md-3'>
          <div className="card" style={{ width: '17rem' }}>
          <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/ddp/branding/bcs-uol/thumbnail.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=204&fit=crop&q=50" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">C++</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Click to start learning</a>
            </div>
          </div>
      </div>
    </div>
    </>
  );
}

export default Categories;