import logo from './logo.svg';
import './App.css';
import Header from './Header';

function CategoriesDetail() {
  return (
    <>
      <Header/>
      <div className='row'>
        <div className='col-md-12'>
            <p className='h2 ms-4'>Pyhton</p>

        </div>
      </div>
        <div className="container mt-4">
            <div className='row m-4'>
                <div className="card" style={{height : "270px"}}>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4">
                                <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/ddp/branding/bcs-uol/thumbnail.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=204&fit=crop&q=50" className="card-img-top" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <p className='fs-1'>Topic 1</p>
                                <p className> In this programming tutorial, you will embark on a journey to unravel the essence of Python and understand why mastering this language is a rewarding pursuit. We'll delve into the intricacies of Python programming, exploring how its syntax and features empower developers to create a wide array of applications. Just as Dr. Santos delves into the pursuit of happiness, we will dissect Python's capabilities, debunk misconceptions, and reveal how this language can be harnessed for your coding aspirations.</p>        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default CategoriesDetail;
