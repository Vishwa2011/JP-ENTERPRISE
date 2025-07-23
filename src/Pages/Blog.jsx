import React from 'react'
import Navbar from './Navbar'
import Facility from '../Components/Facility'
import Instragram from '../Components/Instragram'
import Footer from './Footer'
import { Link } from 'react-router-dom';
export default function Blog() {
   const blogPosts = [
    {
      id: 1,
      title: 'Top 5 Signs You May Have a Rat Problem',
      date: 'June 20, 2025',
      category: 'Awareness',
      image: '/assets/pics/Rat-in-Car.png',
      link: '/BlogDetails'
    },
    {
      id: 2,
      title: 'Why Every Office Needs a Rat Repellent Device',
      date: 'June 20, 2025',
      category: 'Tips',
      image: '/assets/pics/blog2.jpg',
      link: '/BlogDetails'
    },
    {
      id: 3,
      title: 'How Ultrasonic Rat Repellent Technology Works',
      date: 'June 20, 2025',
      category: 'Technology',
      image: '/assets/pics/Rat-gnawing.png',
      link: '/BlogDetails'
    }
  ];
  return (
    <div>
      <Navbar />
        {/* <!-- Start Page Title --> */}
        <div className="page-title-area">
            <div className="container">
                <div className="page-title-content">
                    <h2>Blog </h2>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li>Blog</li>
                    </ul>
                </div>
            </div>
        </div>
        {/* <!-- End Page Title --> */}

        {/* <!-- Start Blog Area --> */}
      
         <section className="blog-area ptb-100">
      <div className="container">
        <div className="row justify-content-center">
          {blogPosts.map((post) => (
            <div className="col-lg-4 col-md-6" key={post.id}>
              <div className="single-blog-post">
                <div className="post-image">
                  <Link to={post.link}>
                    <img src={post.image} alt={post.title} />
                  </Link>
                  <div className="date">
                    <span>{post.date}</span>
                  </div>
                </div>
                <div className="post-content">
                  <span className="category">{post.category}</span>
                  <h3>
                    <Link to={post.link}>{post.title}</Link>
                  </h3>
                  <Link to={post.link} className="details-btn">Read Story</Link>
                </div>
              </div>
            </div>
          ))}

          {/* Pagination */}
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="pagination-area text-center">
              <a href="#" className="prev page-numbers"><i className='bx bx-chevron-left'></i></a>
              <span className="page-numbers current" aria-current="page">1</span>
              <a href="#" className="page-numbers">2</a>
              <a href="#" className="page-numbers">3</a>
              <a href="#" className="page-numbers">4</a>
              <a href="#" className="page-numbers">5</a>
              <a href="#" className="next page-numbers"><i className='bx bx-chevron-right'></i></a>
            </div>
          </div>

        </div>
      </div>
    </section>
        {/* <!-- End Blog Area --> */}
      <Facility />
      <Instragram />
      <Footer />
    </div>
  )
}
