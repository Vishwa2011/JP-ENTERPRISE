import { useEffect } from 'react';
import $ from 'jquery';
import Navbar from './Navbar'
import Facility from '../Components/Facility'
import Instragram from '../Components/Instragram'
import Footer from './Footer'

export default function Faq() {
     useEffect(() => {
    // Tabs
    $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
    $('.tab ul.tabs li a').off('click').on('click', function (e) {
      e.preventDefault();
      const $tab = $(this).closest('.tab');
      const index = $(this).closest('li').index();

      $tab.find('ul.tabs > li').removeClass('current');
      $(this).closest('li').addClass('current');

      $tab.find('.tab-content .tabs-item').slideUp(0);
      $tab.find('.tab-content .tabs-item').eq(index).slideDown(0);
    });

    // Accordion
    $('.accordion').each(function () {
      const $accordion = $(this);
      $accordion.find('.accordion-title').off('click').on('click', function (e) {
        e.preventDefault();

        const $this = $(this);
        $this.toggleClass('active');
        $this.next('.accordion-content').slideToggle('fast');

        $accordion
          .find('.accordion-content')
          .not($this.next())
          .slideUp('fast');

        $accordion
          .find('.accordion-title')
          .not($this)
          .removeClass('active');
      });
    });
  }, []);

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
                        <li><a href=""><i class='bx bx-flag'></i> <span>Getting Started</span></a></li>
                        
                        <li><a href=""><i class='bx bxs-badge-dollar'></i> <span>Pricing & Plans</span></a></li>

                        <li><a href=""><i class='bx bx-shopping-bag'></i> <span>Sales Question</span></a></li>

                        <li><a href=""><i class='bx bx-book-open'></i> <span>Usage Guides</span></a></li>

                        <li><a href=""><i class='bx bx-info-circle'></i> <span>General Guide</span></a></li>
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
                                            <p>We offer standard, express, and same-day shipping depending on your location and product availability.</p>
                                        </div>
                                    </li>

                                    <li className="accordion-item">
                                        <a className="accordion-title"  onClick={(e) => e.preventDefault()}>
                                            <i class='bx bx-chevron-down'></i>
                                            What are shipping times and costs?
                                        </a>
        
                                        <div className="accordion-content">
                                            <p> Shipping times typically range from 3–7 business days for standard delivery
      and 1–2 business days for express delivery. Costs vary depending on your
      location and selected shipping method at checkout.</p>
                                        </div>
                                    </li>

                                    <li className="accordion-item">
                                        <a className="accordion-title"  onClick={(e) => e.preventDefault()}>
                                            <i class='bx bx-chevron-down'></i>
                                            What payment methods can I use?
                                        </a>
        
                                        <div className="accordion-content">
                                           <ul>
      <li>
        <strong>Credit Card:</strong> Visa, MasterCard, Discover, American Express, JCB, Visa Electron.
        The total will be charged to your card when the order is shipped.
      </li>
      <li>
        <strong>Fast Checkout:</strong> Our site features a secure Fast Checkout option,
        allowing you to save your credit card details for quicker future purchases.
      </li>
      <li>
        <strong>PayPal:</strong> Shop easily without entering card details. Your account will be charged
        after the order is completed. To sign up, visit <a href="https://www.paypal.com" target="_blank" rel="noopener noreferrer">paypal.com</a>.
      </li>
    </ul>
                                        </div>
                                    </li>

                                    <li className="accordion-item">
                                        <a className="accordion-title"  onClick={(e) => e.preventDefault()}>
                                            <i class='bx bx-chevron-down'></i>
                                            Can I use my own domain name?
                                        </a>
        
                                        <div className="accordion-content">
                                            <p>Absolutely! Simply point your domain directly to your new jp . You do not need to use a subdomain or any other temporary domain name placeholder.</p>
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
                                            <p>We offer standard, express, and same-day shipping depending on your location and product availability.</p>
                                        </div>
                                    </li>

                                    <li className="accordion-item">
                                        <a className="accordion-title"  onClick={(e) => e.preventDefault()}>
                                            <i class='bx bx-chevron-down'></i>
                                            What are shipping times and costs?
                                        </a>
        
                                        <div className="accordion-content">
                                            <p> Shipping times typically range from 3–7 business days for standard delivery
      and 1–2 business days for express delivery. Costs vary depending on your
      location and selected shipping method at checkout.</p>
                                        </div>
                                    </li>

                                    <li className="accordion-item">
                                        <a className="accordion-title"  onClick={(e) => e.preventDefault()}>
                                            <i class='bx bx-chevron-down'></i>
                                            What payment methods can I use?
                                        </a>
        
                                        <div className="accordion-content">
                                           <ul>
      <li>
        <strong>Credit Card:</strong> Visa, MasterCard, Discover, American Express, JCB, Visa Electron.
        The total will be charged to your card when the order is shipped.
      </li>
      <li>
        <strong>Fast Checkout:</strong> Our site features a secure Fast Checkout option,
        allowing you to save your credit card details for quicker future purchases.
      </li>
      <li>
        <strong>PayPal:</strong> Shop easily without entering card details. Your account will be charged
        after the order is completed. To sign up, visit <a href="https://www.paypal.com" target="_blank" rel="noopener noreferrer">paypal.com</a>.
      </li>
    </ul>
                                        </div>
                                    </li>

                                    <li className="accordion-item">
                                        <a className="accordion-title"  onClick={(e) => e.preventDefault()}>
                                            <i class='bx bx-chevron-down'></i>
                                            Can I use my own domain name?
                                        </a>
        
                                        <div className="accordion-content">
                                            <p>Absolutely! Simply point your domain directly to your new JP Enterprise. You do not need to use a subdomain or any other temporary domain name placeholder.</p>
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
                                            <p>We offer standard, express, and same-day shipping depending on your location and product availability.</p>
                                        </div>
                                    </li>

                                    <li className="accordion-item">
                                        <a className="accordion-title"  onClick={(e) => e.preventDefault()}>
                                            <i class='bx bx-chevron-down'></i>
                                            What are shipping times and costs?
                                        </a>
        
                                        <div className="accordion-content">
                                            <p> Shipping times typically range from 3–7 business days for standard delivery
      and 1–2 business days for express delivery. Costs vary depending on your
      location and selected shipping method at checkout.</p>
                                        </div>
                                    </li>

                                    <li className="accordion-item">
                                        <a className="accordion-title"  onClick={(e) => e.preventDefault()}>
                                            <i class='bx bx-chevron-down'></i>
                                            What payment methods can I use?
                                        </a>
        
                                        <div className="accordion-content">
                                           <ul>
      <li>
        <strong>Credit Card:</strong> Visa, MasterCard, Discover, American Express, JCB, Visa Electron.
        The total will be charged to your card when the order is shipped.
      </li>
      <li>
        <strong>Fast Checkout:</strong> Our site features a secure Fast Checkout option,
        allowing you to save your credit card details for quicker future purchases.
      </li>
      <li>
        <strong>PayPal:</strong> Shop easily without entering card details. Your account will be charged
        after the order is completed. To sign up, visit <a href="https://www.paypal.com" target="_blank" rel="noopener noreferrer">paypal.com</a>.
      </li>
    </ul>
                                        </div>
                                    </li>

                                    <li className="accordion-item">
                                        <a className="accordion-title"  onClick={(e) => e.preventDefault()}>
                                            <i class='bx bx-chevron-down'></i>
                                            Can I use my own domain name?
                                        </a>
        
                                        <div className="accordion-content">
                                            <p>Absolutely! Simply point your domain directly to your new JP Enterprise. You do not need to use a subdomain or any other temporary domain name placeholder.</p>
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
                                            <p>We offer standard, express, and same-day shipping depending on your location and product availability.</p>
                                        </div>
                                    </li>

                                    <li className="accordion-item">
                                        <a className="accordion-title"  onClick={(e) => e.preventDefault()}>
                                            <i class='bx bx-chevron-down'></i>
                                            What are shipping times and costs?
                                        </a>
        
                                        <div className="accordion-content">
                                            <p> Shipping times typically range from 3–7 business days for standard delivery
      and 1–2 business days for express delivery. Costs vary depending on your
      location and selected shipping method at checkout.</p>
                                        </div>
                                    </li>

                                    <li className="accordion-item">
                                        <a className="accordion-title"  onClick={(e) => e.preventDefault()}>
                                            <i class='bx bx-chevron-down'></i>
                                            What payment methods can I use?
                                        </a>
        
                                        <div className="accordion-content">
                                           <ul>
      <li>
        <strong>Credit Card:</strong> Visa, MasterCard, Discover, American Express, JCB, Visa Electron.
        The total will be charged to your card when the order is shipped.
      </li>
      <li>
        <strong>Fast Checkout:</strong> Our site features a secure Fast Checkout option,
        allowing you to save your credit card details for quicker future purchases.
      </li>
      <li>
        <strong>PayPal:</strong> Shop easily without entering card details. Your account will be charged
        after the order is completed. To sign up, visit <a href="https://www.paypal.com" target="_blank" rel="noopener noreferrer">paypal.com</a>.
      </li>
    </ul>
                                        </div>
                                    </li>

                                    <li className="accordion-item">
                                        <a className="accordion-title"  onClick={(e) => e.preventDefault()}>
                                            <i class='bx bx-chevron-down'></i>
                                            Can I use my own domain name?
                                        </a>
        
                                        <div className="accordion-content">
                                            <p>Absolutely! Simply point your domain directly to your new JP Enterprise. You do not need to use a subdomain or any other temporary domain name placeholder.</p>
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
                                            <p>We offer standard, express, and same-day shipping depending on your location and product availability.</p>
                                        </div>
                                    </li>

                                    <li className="accordion-item">
                                        <a className="accordion-title"  onClick={(e) => e.preventDefault()}>
                                            <i class='bx bx-chevron-down'></i>
                                            What are shipping times and costs?
                                        </a>
        
                                        <div className="accordion-content">
                                            <p> Shipping times typically range from 3–7 business days for standard delivery
      and 1–2 business days for express delivery. Costs vary depending on your
      location and selected shipping method at checkout.</p>
                                        </div>
                                    </li>

                                    <li className="accordion-item">
                                        <a className="accordion-title"  onClick={(e) => e.preventDefault()}>
                                            <i class='bx bx-chevron-down'></i>
                                            What payment methods can I use?
                                        </a>
        
                                        <div className="accordion-content">
                                           <ul>
      <li>
        <strong>Credit Card:</strong> Visa, MasterCard, Discover, American Express, JCB, Visa Electron.
        The total will be charged to your card when the order is shipped.
      </li>
      <li>
        <strong>Fast Checkout:</strong> Our site features a secure Fast Checkout option,
        allowing you to save your credit card details for quicker future purchases.
      </li>
      <li>
        <strong>PayPal:</strong> Shop easily without entering card details. Your account will be charged
        after the order is completed. To sign up, visit <a href="https://www.paypal.com" target="_blank" rel="noopener noreferrer">paypal.com</a>.
      </li>
    </ul>
                                        </div>
                                    </li>

                                    <li className="accordion-item">
                                        <a className="accordion-title"  onClick={(e) => e.preventDefault()}>
                                            <i class='bx bx-chevron-down'></i>
                                            Can I use my own domain name?
                                        </a>
        
                                        <div className="accordion-content">
                                            <p>Absolutely! Simply point your domain directly to your new JP Enterprise. You do not need to use a subdomain or any other temporary domain name placeholder.</p>
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
