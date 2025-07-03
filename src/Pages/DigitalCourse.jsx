import { useState } from "react";
import Facility from '../Components/Facility'
import Footer from './Footer'
import Navbar from './Navbar'


const lookbookItems = [
  {
    id: 1,
    img: "/assets/pics/book1.png",
    label: "Vikas Patel",
    title: "Rat Guard User Guide",
    price: "₹200",
  },
  {
    id: 2,
    img: "/assets/pics/book2.png",
    label: "Mahesh Shah",
    title: "Ultrasonic Repeller Handbook",
    price: "₹200",
  },
  {
    id: 3,
    img: "/assets/pics/book3.png",
    label: "Hari Mehta",
    title: "Home Safety Manual",
    price: "₹200",
  },
  {
    id: 4,
    img: "/assets/pics/book4.png",
    label: "Prit Vora",
    title: "Technical Attribute Guide",
    price: "₹200",
  },
];

    
export default function DigitalCourse() {
    const options = [
    "Sort by Price: Low to High",
    "Default Sorting",
    "Sort by Popularity",
    "Sort by Average Rating",
    "Sort by Latest",
    "Sort by Price: High to Low",
  ];
   const [selectedOption, setSelectedOption] = useState(options[0]);
    const [isOpen, setIsOpen] = useState(false);
  
    const handleOptionClick = (option) => {
      setSelectedOption(option);
      setIsOpen(false);
    };
  return (
    <div>
      <Navbar />
 {/* <!-- Start Page Title --> */}
        <div className="page-title-area">
            <div className="container">
                <div className="page-title-content">
                    <h2>Digital Course</h2>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li>Digital Course</li>
                    </ul>
                </div>
            </div>
        </div>
        {/* <!-- End Page Title --> */}

        {/* <!-- Start Lookbook Area --> */}
          <section className="products-area pt-100 ">
          <div className="container">
            <div className="products-filter-options">
              <div className="row align-items-center justify-content-end">
                {/* <div className="col-lg-4 col-md-4">
                  <div className="d-lg-flex d-md-flex align-items-center">
                    <span className="sub-title">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#productsFilterModal"
                      >
                        <i className="bx bx-filter-alt"></i> Filter
                      </a>
                    </span>

                    <span className="sub-title d-none d-lg-block d-md-block">
                      View:
                    </span>

                    <div className="view-list-row d-none d-lg-block d-md-block">
                      <div className="view-column">
                        {viewButtons.map(({ class: viewClass, label }) => (
                          <a
                            key={label}
                            href="#"
                            className={`${label} ${
                              view === viewClass ? "active" : ""
                            }`}
                            onClick={(e) => {
                              e.preventDefault();
                              handleViewChange(viewClass);
                            }}
                          >
                            <span></span>
                            <span></span>
                            {label.includes("three") && <span></span>}
                            {label.includes("four") && <span></span>}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-4">
                  <p>Showing 1 – 18 of 100</p>
                </div> */}

               <div className="col-lg-4 col-md-4">
      <div className="products-ordering-list">
        <div
          className={`nice-select ${isOpen ? "open" : ""}`}
          tabIndex={0}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="current">{selectedOption}</span>
          <ul className="list">
            {options.map((option) => (
              <li
                key={option}
                data-value={option}
                className={`option ${
                  selectedOption === option ? "selected focus" : ""
                }`}
                onClick={(e) => {
                  e.stopPropagation(); // prevent dropdown from closing before selection
                  handleOptionClick(option);
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
              </div>
            </div>

          </div>
        </section>
        <section className="lookbook-area pb-70">
      <div className="container-fluid">
        <div className="row justify-content-center">
          {lookbookItems.map((item) => (
            <div className="col-lg-3 col-md-6" key={item.id}>
              <div className="single-lookbook-box">
                <a href="/DigitalCourseDetails">
                  <img src={item.img} alt="image" />
                </a>
                <div className="content" style={{ textAlign: "center" }}>
                  <p>{item.label}</p>
                  <h5>
                    <a href="/DigitalCourseDetails">{item.title}</a>
                  </h5>
                  <p>{item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
        {/* <!-- End Lookbook Area --> */}
      <Facility />
      <Footer />
    </div>
  )
}
