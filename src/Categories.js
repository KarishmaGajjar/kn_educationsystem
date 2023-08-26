import logo from './logo.svg';
import coursera_logo from './coursera_logo.svg';

import './App.css';

function Categories() {

  const subjectsData = [
    {
      img: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/fc/c1b8dfbac740999b6256aca490de43/Python-Image.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&fit=crop&q=50',
      title: 'Introduction to Python Programming',
      description: 'Learn the fundamentals of Python programming language, including syntax, variables, and basic data structures.',
    },
    {
      img: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/83/e258e0532611e5a5072321239ff4d4/jhep-coursera-course4.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&q=50&fit=crop',
      title: 'Web Development with HTML and CSS',
      description: 'Dive into web development by mastering HTML for content structure and CSS for styling and layout.',
    },
    {
      img: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/cb/3df454f38147ee8e45bfd6b91795f0/c-622435_1280.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&q=50&fit=crop',
      title: 'C ++',
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
    <div className='container'>
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
        {subjectsData.map((subject, index) => (
          <div key={index} className='col-md-3'>
            <div className="card" style={{ width: '17rem', height:'28rem'}}>
              <img src={subject.img} className="card-img-top" alt={subject.title} />
              <div className="card-body">
                <h5 className="card-title">{subject.title}</h5>
                <p className="card-text">{subject.description}</p>
                <a href="Categories.js" className="btn btn-primary">Click to start learning</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Categories;