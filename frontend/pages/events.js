import Link from "next/dist/client/link";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";

const CharityEvents = () => {
  return (
    <Layout>
      <PageBanner pageName="Charity Events" />
      <section className="event-area section-gap-extra-bottom">
        <div className="container">
          <div className="event-items">
            <div className="single-event-item mb-30 wow fadeInUp" data-wow-delay="0s">
              <div className="event-content">
                <ul className="meta">
                  <li>
                    <Link href="/charity-project-1">
                      <a className="category">Upcoming Event</a>
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="date">
                      Join Us for the Annual Fundraiser Gala
                    </a>
                  </li>
                </ul>
                <h4 className="event-title">
                  <Link href="/charity-project-details">
                    Annual Fundraiser Gala
                  </Link>
                </h4>
                <p>
                  Participate in our annual gala to support underprivileged children. Enjoy an evening of entertainment and philanthropy.
                </p>
              </div>
              <div className="event-button">
                <Link href="/charity-project-details">
                  <a className="main-btn bordered-btn">
                    Details <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="single-event-item mb-30 wow fadeInUp" data-wow-delay="0s">
              <div className="event-content">
                <ul className="meta">
                  <li>
                    <Link href="/charity-project-2">
                      <a className="category">Volunteer Opportunity</a>
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="date">
                      Help Us at the Community Clean-Up Day
                    </a>
                  </li>
                </ul>
                <h4 className="event-title">
                  <Link href="/charity-project-details">
                    Community Clean-Up Day
                  </Link>
                </h4>
                <p>
                  Join our community clean-up event to make a difference in our local environment. Your support helps keep our city beautiful.
                </p>
              </div>
              <div className="event-button">
                <Link href="/charity-project-details">
                  <a className="main-btn bordered-btn">
                    Details <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="single-event-item mb-30 wow fadeInUp" data-wow-delay="0s">
              <div className="event-content">
                <ul className="meta">
                  <li>
                    <Link href="/charity-project-3">
                      <a className="category">Donation Drive</a>
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="date">
                      Donate Clothes and Essentials
                    </a>
                  </li>
                </ul>
                <h4 className="event-title">
                  <Link href="/charity-project-details">
                    Clothing and Essentials Drive
                  </Link>
                </h4>
                <p>
                  Contribute to our donation drive by providing clothes and essentials for families in need. Every donation makes a difference.
                </p>
              </div>
              <div className="event-button">
                <Link href="/charity-project-details">
                  <a className="main-btn bordered-btn">
                    Details <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="single-event-item mb-30 wow fadeInUp" data-wow-delay="0s">
              <div className="event-content">
                <ul className="meta">
                  <li>
                    <Link href="/charity-project-4">
                      <a className="category">Charity Run</a>
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="date">
                      Run for a Cause - Charity Marathon
                    </a>
                  </li>
                </ul>
                <h4 className="event-title">
                  <Link href="/charity-project-details">
                    Charity Marathon
                  </Link>
                </h4>
                <p>
                  Participate in our charity marathon to support research for rare diseases. Run, walk, or cheer – every bit helps.
                </p>
              </div>
              <div className="event-button">
                <Link href="/charity-project-details">
                  <a className="main-btn bordered-btn">
                    Details <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CharityEvents;

