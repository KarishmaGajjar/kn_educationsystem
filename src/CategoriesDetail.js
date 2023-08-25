import logo from './logo.svg';
import './App.css';

function CategoriesDetail() {
  return (
    <div className="container mt-4">
        <div className='row m-4'>
            <div className="card" style={{height : "200px"}}>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={logo} className="App-logo" alt="logo" height={'70px'} width={'70px'}/>
                        </div>
                        <div className="col-md-8">
                            <p className='fs-1'>Topic 1</p>
                            <p className='fs-5'> This is introduction video for Pyhton</p>        
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <div className='row m-4'>
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={logo} className="App-logo" alt="logo" />
                        </div>
                        <div className="col-md-8">
                            <p className='fs-1'>Topic 1</p>
                            <p className='fs-5'> This is introduction video for Pyhton</p>        
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
    </div>
  );
}

export default CategoriesDetail;
