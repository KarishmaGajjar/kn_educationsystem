import logo from './logo.svg';
import './App.css';
import Header from './Header';

function CategoriesDetail() {
    const subjectDetails = [
    {
      img: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/fc/c1b8dfbac740999b6256aca490de43/Python-Image.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&fit=crop&q=50',
      title: 'Introduction to Python Programming',
      description: 'Learn the fundamentals of Python programming language, including syntax, variables, and basic data structures.',
    },
    {
      img: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/8d/3ca695dfef49af845eed5047990e64/g4.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&fit=crop&q=50',
      title: 'Variables and Data Types',
      description: 'Dive into web development by mastering HTML for content structure and CSS for styling and layout.',
    },
    {
      img: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/11/f0f0b03c7647d9aa9af0c70ea2c699/7_CYBER_AUTOMATECYBER.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&q=50&fit=crop',
      title: 'Functions and Modules',
      description: 'Explore the core concepts of C++, including functions, loops, and OOPs.',
    },
    {
      img: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/b6/2019201a9e11e5ace08b26adce8cb5/Java.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&fit=crop&q=50',
      title: 'Java',
      description: 'Discover how to use Python for data analysis, visualization, and machine learning.',
    },
  ];
  return (
    <>
      <Header/>
      <div className='row'>
        <div className='col-md-12'>
            <p className='h2 ms-4'>Pyhton</p>

        </div>
      </div>
        <div className="container mt-4">
            <div className='row me-2'>
              {subjectDetails.map((subject, index) => (
                <div key={index} className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-4">
                        <img src={subject.img} className="card-img-top" alt="..." />
                      </div>
                      <div className="col-md-8">
                        <p className='fs-1'>{subject.title}</p>
                        <p>{subject.description}</p>
                        <div className='row'>
                          <div className='col-md-3'>
                            <p className="fa fa-file-pdf-o"><b> Notes</b></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

        </div>
    </>
  );
}

export default CategoriesDetail;
