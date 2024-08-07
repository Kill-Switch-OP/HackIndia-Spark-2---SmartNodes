import Link from "next/dist/client/link";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";

const Contact = () => {
  return (
    <Layout>
      <PageBanner pageName="Contact Us" />
      <section className="contact-section section-gap-extra-bottom">
        <div className="container">
          {/* Contact Info Start */}
          <div className="row align-items-center justify-content-center">
            <div className="col-lx-4 col-lg-5 col-sm-10">
              <div className="contact-info-text mb-md-70">
                <div className="common-heading mb-30">
                  <span className="tagline">
                    <i className="fas fa-plus" /> Donate Now
                    <span className="heading-shadow-text">Donate</span>
                  </span>
                  <h2 className="title">For More Information</h2>
                </div>
                <p>
                  Discover how we're making a difference in communities across the globe.
                  Learn about our initiatives and how you can join us in creating positive change.
                </p>
                <Link href="/events">
                  <a className="main-btn mt-35">
                    Discover <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7 offset-xl-1">
              <div className="contact-info-boxes">
                <div className="row justify-content-center align-items-center">
                  <div className="col-md-6 col-sm-10">
                    <div
                      className="info-box text-center wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      <div className="icon">
                        <i className="flaticon-place" />
                      </div>
                      <div className="info-content">
                        <h5>Our Location</h5>
                        <p>SRM University - Delhi NCR</p>
                      </div>
                    </div>
                    <div
                      className="info-box text-center mt-30 mb-sm-30 wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      <div className="icon">
                        <i className="flaticon-envelope" />
                      </div>
                      <div className="info-content">
                        <h5>Email Address</h5>
                        <p>
                          hackindia@gmail.com <br />
                          www.hackindia.xyz
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-10">
                    <div
                      className="info-box text-center wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      <div className="icon">
                        <i className="flaticon-phone-call-1" />
                      </div>
                      <div className="info-content">
                        <h5>Support 24/7</h5>
                        <p>
                          +91 9398311300
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Info End */}
          <div className="contact-from-area">
            <div className="row no-gutters">
              {/* <div className="col-lg-5"> */}
                {/* <div className="contact-maps"> */}
                  {/* <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d48372.81123152747!2d-73.96448279177292!3d40.733408396164116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1627206548218!5m2!1sen!2sbd"
                    loading="lazy"
                  /> */}
                {/* </div> */}
              {/* </div> */}
              <div className="col-lg-12">
                <div className="contact-form">
                  <form onSubmit={(e) => e.preventDefault()} action="#">
                    <h3 className="form-title text-center">Send Us Message</h3>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-field mb-25">
                          <label htmlFor="name">Your Name</label>
                          <input
                            type="text"
                            placeholder="Hackindia"
                            id="name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-field mb-25">
                          <label htmlFor="phone-number">Phone Number</label>
                          <input
                            type="text"
                            placeholder="+91 9398311300"
                            id="phone-number"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-field mb-25">
                          <label htmlFor="email">Email Address</label>
                          <input
                            type="text"
                            placeholder="hackindia@gmail.com"
                            id="email"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-field mb-25">
                          <label htmlFor="subject">Subject</label>
                          <input
                            type="text"
                            placeholder="would like to know about"
                            id="subject"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-field mb-30">
                          <label htmlFor="message">Write Message</label>
                          <textarea
                            id="message"
                            placeholder="Write Your message here....."
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-field">
                          <button className="main-btn">
                            Send Us Message <i className="far fa-arrow-right" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
