import Link from "next/dist/client/link";
const Footer = ({ footerSolidBg }) => {
  return (
    <footer
      className={`site-footer ${footerSolidBg ? "" : "with-footer-cta with-footer-bg"
        }`}
    >
      <div className="footer-content-area">
        <div className="container">
          <div className="footer-widgets">
            <div className="row justify-content-between">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="widget about-widget">
                  <div className="footer-logo bg-white">
                    <img src="https://hackindia.xyz/wp-content/uploads/2024/04/Hackindia-400x98-edited-1.png" alt="Funden" />
                  </div>
                  <p>
                  Subscribe to our newsletter for weekly updates.
                  </p>
                  <div className="newsletter-form">
                    <h5 className="form-title">Join Newsletters</h5>
                    <form onSubmit={(e) => e.preventDefault()} action="#">
                      <input type="text" placeholder="Email Address" />
                      <button type="submit">
                        <i className="far fa-arrow-right" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-5 col-sm-6">
                <div className="widget nav-widget">
                  <h4 className="widget-title">Our Projects</h4>
                  <ul>
                    <li>
                      <Link href="/project-1">Clean Water Initiative</Link>
                    </li>
                    <li>
                      <Link href="/project-2">Education for All</Link>
                    </li>
                    <li>
                      <Link href="/project-1">Youth Empowerment Program</Link>
                    </li>
                    <li>
                      <Link href="/project-3">Environmental Conservation</Link>
                    </li>
                    <li>
                      <Link href="/project-2">Disaster Relief Fund</Link>
                    </li>
                    <li>
                      <Link href="/project-1">Women's Empowerment Initiative</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="widget nav-widget">
                  <h4 className="widget-title">Support us</h4>
                  <ul>
                    <li>
                      <Link href="/about">Make a Donation</Link>
                    </li>
                    <li>
                      <Link href="/contact">Volunteer with Us</Link>
                    </li>
                    <li>
                      <Link href="/company-overview">Start a Fundraiser</Link>
                    </li>
                    <li>
                      <Link href="/faq">Corporate Partnerships</Link>
                    </li>
                    <li>
                      <Link href="/contact">Advocate for Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-auto col-md-5 col-sm-8">
                <div className="widget contact-widget">
                  <h4 className="widget-title">Contact Us</h4>
                  <ul className="info-list">
                    <li>
                      <span className="icon">
                        <i className="far fa-phone" />
                      </span>
                      <span className="info">
                        <span className="info-title">Phone Number</span>
                        <a href="#">+91 9398311300</a>
                      </span>
                    </li>
                    <li>
                      <span className="icon">
                        <i className="far fa-envelope-open" />
                      </span>
                      <span className="info">
                        <span className="info-title">Email Address</span>
                        <a href="#">hackindia@gmail.com</a>
                      </span>
                    </li>
                    <li>
                      <span className="icon">
                        <i className="far fa-map-marker-alt" />
                      </span>
                      <span className="info">
                        <span className="info-title">Locations</span>
                        <a href="#">SRM University, Delhi-NCR</a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-area">
            <div className="row flex-md-row-reverse">
              <div className="col-md-6">
                <ul className="social-icons">
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <p className="copyright-text">
                  © {new Date().getFullYear()} <a href="#">HACKINDIA</a>. Copyright @ 2024 Hackindia. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
