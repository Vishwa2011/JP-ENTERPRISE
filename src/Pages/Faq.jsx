import React from 'react'
import Navbar from './Navbar'
import Facility from '../Components/Facility'
import Instragram from '../Components/Instragram'
import Footer from './Footer'

export default function Faq() {
  return (
    <div>
      <Navbar />
          {/* <!-- Start Page Title --> */}
        <div className="page-title-area">
            <div className="container">
                <div className="page-title-content">
                    <h2>Frequently Asked Question</h2>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li>FAQ</li>
                    </ul>
                </div>
            </div>
        </div>
        {/* <!-- End Page Title --> */}

        {/* <!-- Start FAQ Area --> */}
        <section className="faq-area ptb-100">
            <div className="container">
                <div className="tab faq-accordion-tab">
                    <ul className="tabs d-flex flex-wrap justify-content-center">
                        <li><a href="#"><i class='bx bx-flag'></i> <span>Getting Started</span></a></li>
                        
                        <li><a href="#"><i class='bx bxs-badge-dollar'></i> <span>Pricing & Plans</span></a></li>

                        <li><a href="#"><i class='bx bx-shopping-bag'></i> <span>Sales Question</span></a></li>

                        <li><a href="#"><i class='bx bx-book-open'></i> <span>Usage Guides</span></a></li>

                        <li><a href="#"><i class='bx bx-info-circle'></i> <span>General Guide</span></a></li>
                    </ul>

                    <div className="tab-content">
                        <div className="tabs-item">
                            <div className="faq-accordion">
                                <ul className="accordion">
                                    <li className="accordion-item">
                                        <a className="accordion-title active"  onClick={(e) => e.preventDefault()}>
                                            <i class='bx bx-chevron-down'></i>
                                            What shipping methods are available?
                                        </a>
        
                                        <div className="accordion-content show">
                                            <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                                        </div>
                                    </li>

                                    <li className="accordion-item">
                                        <a className="accordion-title"  onClick={(e) => e.preventDefault()}>
                                            <i class='bx bx-chevron-down'></i>
                                            What are shipping times and costs?
                                        </a>
        
                                        <div className="accordion-content">
                                            <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                                        </div>
                                    </li>

                                    <li className="accordion-item">
                                        <a className="accordion-title"  onClick={(e) => e.preventDefault()}>
                                            <i class='bx bx-chevron-down'></i>
                                            What payment methods can I use?
                                        </a>
        
                                        <div className="accordion-content">
                                            <ul>
                                                <li>Credit Card: Visa, MasterCard, Discover, American Express, JCB, Visa Electron. The total will be charged to your card when the order is shipped.</li>
                                                <li>Comero features a Fast Checkout option, allowing you to securely save your credit card details so that you don't have to re-enter them for future purchases.</li>
                                                <li>PayPal: Shop easily online without having to enter your credit card details on the website. Your account will be charged once the order is completed. To register for a PayPal account, visit the website paypal.com.</li>
                                                <li>Credit Card: Visa, MasterCard, Discover, American Express, JCB, Visa Electron. The total will be charged to your card when the order is shipped.</li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li className="accordion-item">
                                        <a className="accordion-title"  onClick={(e) => e.preventDefault()}>
                                            <i class='bx bx-chevron-down'></i>
                                            Can I use my own domain name?
                                        </a>
        
                                        <div className="accordion-content">
                                            <p>Absolutely! Simply point your domain directly to your new Xton. You do not need to use a subdomain or any other temporary domain name placeholder.</p>
                                        </div>
                                    </li>

                                    <li className="accordion-item">
                                        <a className="accordion-title"  onClick={(e) => e.preventDefault()}>
                                            <i class='bx bx-chevron-down'></i>
                                            What kind of customer service do you offer?
                                        </a>
        
                                        <div className="accordion-content">
                                            <p>Our ecommerce consultants are here to answer your questions. In addition to FREE phone support, you can contact our consultants via email or live chat.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="tabs-item">
                            <div className="faq-accordion">
                                <ul className="accordion">
                                    <li className="accordion-item">
                                        <a className="accordion-title active"  onClick={(e) => e.preventDefault()}>
                                            <i class='bx bx-chevron-down'></i>
                                            What shipping methods are available?
                                        </a>
        
                                        <div className="accordion-content show">
                                            <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                                        </div>
                                    </li>

                                    <li className="accordion-item">
                                        <a className="accordion-title"  onClick={(e) => e.preventDefault()}>
                                            <i class='bx bx-chevron-down'></i>
                                            What are shipping times and costs?
                                        </a>
        
                                        <div className="accordion-content">
                                            <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                                        </div>
                                    </li>

                                    <li className="accordion-item">
                                        <a className="accordion-title"  onClick={(e) => e.preventDefault()}>
                                            <i class='bx bx-chevron-down'></i>
                                            What payment methods can I use?
                                        </a>
        
                                        <div className="accordion-content">
                                            <ul>
                                                <li>Credit Card: Visa, MasterCard, Discover, American Express, JCB, Visa Electron. The total will be charged to your card when the order is shipped.</li>
                                                <li>Comero features a Fast Checkout option, allowing you to securely save your credit card details so that you don't have to re-enter them for future purchases.</li>
                                                <li>PayPal: Shop easily online without having to enter your credit card details on the website. Your account will be charged once the order is completed. To register for a PayPal account, visit the website paypal.com.</li>
                                                <li>Credit Card: Visa, MasterCard, Discover, American Express, JCB, Visa Electron. The total will be charged to your card when the order is shipped.</li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li className="accordion-item">
                                        <a className="accordion-title"  onClick={(e) => e.preventDefault()}>
                                            <i class='bx bx-chevron-down'></i>
                                            Can I use my own domain name?
                                        </a>
        
                                        <div className="accordion-content">
                                            <p>Absolutely! Simply point your domain directly to your new Xton. You do not need to use a subdomain or any other temporary domain name placeholder.</p>
                                        </div>
                                    </li>

                                    <li className="accordion-item">
                                        <a className="accordion-title"  onClick={(e) => e.preventDefault()}>
                                            <i class='bx bx-chevron-down'></i>
                                            What kind of customer service do you offer?
                                        </a>
        
                                        <div className="accordion-content">
                                            <p>Our ecommerce consultants are here to answer your questions. In addition to FREE phone support, you can contact our consultants via email or live chat.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="tabs-item">
                            <div className="faq-accordion">
                                <ul className="accordion">
                                    <li className="accordion-item">
                                        <a className="accordion-title active"  onClick={(e) => e.preventDefault()}>
                                            <i class='bx bx-chevron-down'></i>
                                            What shipping methods are available?
                                        </a>
        
                                        <div className="accordion-content show">
                                            <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                                        </div>
                                    </li>

                                    <li className="accordion-item">
                                        <a className="accordion-title"  onClick={(e) => e.preventDefault()}>
                                            <i class='bx bx-chevron-down'></i>
                                            What are shipping times and costs?
                                        </a>
        
                                        <div className="accordion-content">
                                            <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                                        </div>
                                    </li>

                                    <li className="accordion-item">
                                        <a className="accordion-title"  onClick={(e) => e.preventDefault()}>
                                            <i class='bx bx-chevron-down'></i>
                                            What payment methods can I use?
                                        </a>
        
                                        <div className="accordion-content">
                                            <ul>
                                                <li>Credit Card: Visa, MasterCard, Discover, American Express, JCB, Visa Electron. The total will be charged to your card when the order is shipped.</li>
                                                <li>Comero features a Fast Checkout option, allowing you to securely save your credit card details so that you don't have to re-enter them for future purchases.</li>
                                                <li>PayPal: Shop easily online without having to enter your credit card details on the website. Your account will be charged once the order is completed. To register for a PayPal account, visit the website paypal.com.</li>
                                                <li>Credit Card: Visa, MasterCard, Discover, American Express, JCB, Visa Electron. The total will be charged to your card when the order is shipped.</li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li className="accordion-item">
                                        <a className="accordion-title"  onClick={(e) => e.preventDefault()}>
                                            <i class='bx bx-chevron-down'></i>
                                            Can I use my own domain name?
                                        </a>
        
                                        <div className="accordion-content">
                                            <p>Absolutely! Simply point your domain directly to your new Xton. You do not need to use a subdomain or any other temporary domain name placeholder.</p>
                                        </div>
                                    </li>

                                    <li className="accordion-item">
                                        <a className="accordion-title"  onClick={(e) => e.preventDefault()}>
                                            <i class='bx bx-chevron-down'></i>
                                            What kind of customer service do you offer?
                                        </a>
        
                                        <div className="accordion-content">
                                            <p>Our ecommerce consultants are here to answer your questions. In addition to FREE phone support, you can contact our consultants via email or live chat.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="tabs-item">
                            <div className="faq-accordion">
                                <ul className="accordion">
                                    <li className="accordion-item">
                                        <a className="accordion-title active"  onClick={(e) => e.preventDefault()}>
                                            <i class='bx bx-chevron-down'></i>
                                            What shipping methods are available?
                                        </a>
        
                                        <div className="accordion-content show">
                                            <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                                        </div>
                                    </li>

                                    <li className="accordion-item">
                                        <a className="accordion-title"  onClick={(e) => e.preventDefault()}>
                                            <i class='bx bx-chevron-down'></i>
                                            What are shipping times and costs?
                                        </a>
        
                                        <div className="accordion-content">
                                            <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                                        </div>
                                    </li>

                                    <li className="accordion-item">
                                        <a className="accordion-title"  onClick={(e) => e.preventDefault()}>
                                            <i class='bx bx-chevron-down'></i>
                                            What payment methods can I use?
                                        </a>
        
                                        <div className="accordion-content">
                                            <ul>
                                                <li>Credit Card: Visa, MasterCard, Discover, American Express, JCB, Visa Electron. The total will be charged to your card when the order is shipped.</li>
                                                <li>Comero features a Fast Checkout option, allowing you to securely save your credit card details so that you don't have to re-enter them for future purchases.</li>
                                                <li>PayPal: Shop easily online without having to enter your credit card details on the website. Your account will be charged once the order is completed. To register for a PayPal account, visit the website paypal.com.</li>
                                                <li>Credit Card: Visa, MasterCard, Discover, American Express, JCB, Visa Electron. The total will be charged to your card when the order is shipped.</li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li className="accordion-item">
                                        <a className="accordion-title"  onClick={(e) => e.preventDefault()}>
                                            <i class='bx bx-chevron-down'></i>
                                            Can I use my own domain name?
                                        </a>
        
                                        <div className="accordion-content">
                                            <p>Absolutely! Simply point your domain directly to your new Xton. You do not need to use a subdomain or any other temporary domain name placeholder.</p>
                                        </div>
                                    </li>

                                    <li className="accordion-item">
                                        <a className="accordion-title"  onClick={(e) => e.preventDefault()}>
                                            <i class='bx bx-chevron-down'></i>
                                            What kind of customer service do you offer?
                                        </a>
        
                                        <div className="accordion-content">
                                            <p>Our ecommerce consultants are here to answer your questions. In addition to FREE phone support, you can contact our consultants via email or live chat.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="tabs-item">
                            <div className="faq-accordion">
                                <ul className="accordion">
                                    <li className="accordion-item">
                                        <a className="accordion-title active"  onClick={(e) => e.preventDefault()}>
                                            <i class='bx bx-chevron-down'></i>
                                            What shipping methods are available?
                                        </a>
        
                                        <div className="accordion-content show">
                                            <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                                        </div>
                                    </li>

                                    <li className="accordion-item">
                                        <a className="accordion-title"  onClick={(e) => e.preventDefault()}>
                                            <i class='bx bx-chevron-down'></i>
                                            What are shipping times and costs?
                                        </a>
        
                                        <div className="accordion-content">
                                            <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                                        </div>
                                    </li>

                                    <li className="accordion-item">
                                        <a className="accordion-title"  onClick={(e) => e.preventDefault()}>
                                            <i class='bx bx-chevron-down'></i>
                                            What payment methods can I use?
                                        </a>
        
                                        <div className="accordion-content">
                                            <ul>
                                                <li>Credit Card: Visa, MasterCard, Discover, American Express, JCB, Visa Electron. The total will be charged to your card when the order is shipped.</li>
                                                <li>Comero features a Fast Checkout option, allowing you to securely save your credit card details so that you don't have to re-enter them for future purchases.</li>
                                                <li>PayPal: Shop easily online without having to enter your credit card details on the website. Your account will be charged once the order is completed. To register for a PayPal account, visit the website paypal.com.</li>
                                                <li>Credit Card: Visa, MasterCard, Discover, American Express, JCB, Visa Electron. The total will be charged to your card when the order is shipped.</li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li className="accordion-item">
                                        <a className="accordion-title"  onClick={(e) => e.preventDefault()}>
                                            <i class='bx bx-chevron-down'></i>
                                            Can I use my own domain name?
                                        </a>
        
                                        <div className="accordion-content">
                                            <p>Absolutely! Simply point your domain directly to your new Xton. You do not need to use a subdomain or any other temporary domain name placeholder.</p>
                                        </div>
                                    </li>

                                    <li className="accordion-item">
                                        <a className="accordion-title"  onClick={(e) => e.preventDefault()}>
                                            <i class='bx bx-chevron-down'></i>
                                            What kind of customer service do you offer?
                                        </a>
        
                                        <div className="accordion-content">
                                            <p>Our ecommerce consultants are here to answer your questions. In addition to FREE phone support, you can contact our consultants via email or live chat.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- End FAQ Area --> */}
      <Facility />
      <Instragram />
      <Footer />
    </div>
  )
}
