class ScreenArea extends React.Component {
    state = {
        currentPage: 'faqs',
        menuToggleState: false,
    };

    loadCurrentPage = currentPageClicked => {
        this.setState({ currentPage: currentPageClicked });
    };

    menuToggle = () => {
        this.setState({ menuToggleState: !this.state.menuToggleState });
    };

    render() {
        return (
            <React.Fragment>
                {this.state.currentPage === 'contact-us' ? <ContactUs /> : ''}

                {this.state.currentPage === 'faqs' ? <Faqs /> : ''}

                {this.state.currentPage === 'getting-there' ? (
                    <GettingThere />
                ) : (
                    ''
                )}

                {this.state.currentPage === 'home' ? <MainHome /> : ''}

                {this.state.currentPage === 'lodging' ? <Lodging /> : ''}

                {this.state.currentPage === 'our-history' ? <Gallery /> : ''}

                {this.state.currentPage === 'things-to-do' ? (
                    <ThingsToDo />
                ) : (
                    ''
                )}

                {this.state.currentPage === 'wedding-schedule' ? (
                    <WeddingSchedule />
                ) : (
                    ''
                )}

                <MainNav
                    fnLoadCurrentPage={this.loadCurrentPage}
                    fnMenuToggle={this.menuToggle}
                    menuState={this.state.menuToggleState}
                />
            </React.Fragment>
        );
    }
}

const MainNav = props => {
    return (
        <React.Fragment>
            <nav
                className={`main-nav ${
                    props.menuState ? 'main-nav-opened' : 'main-nav-closed'
                }`}
            >
                <button
                    className="menu-toggle"
                    onClick={() => {
                        props.fnMenuToggle();
                    }}
                >
                    {props.menuState ? 'CLOSE' : 'MENU'}
                </button>

                <button
                    onClick={() => {
                        props.fnLoadCurrentPage('contact-us');
                        props.fnMenuToggle();
                    }}
                >
                    Contact Us
                </button>

                <button
                    onClick={() => {
                        props.fnLoadCurrentPage('faqs');
                        props.fnMenuToggle();
                    }}
                >
                    FAQs
                </button>

                <button
                    onClick={() => {
                        props.fnLoadCurrentPage('getting-there');
                        props.fnMenuToggle();
                    }}
                >
                    Getting There
                </button>

                <button
                    onClick={() => {
                        props.fnLoadCurrentPage('lodging');
                        props.fnMenuToggle();
                    }}
                >
                    Lodging
                </button>

                <button
                    onClick={() => {
                        props.fnLoadCurrentPage('our-history');
                        props.fnMenuToggle();
                    }}
                >
                    Our History
                </button>

                <button
                    onClick={() => {
                        props.fnLoadCurrentPage('things-to-do');
                        props.fnMenuToggle();
                    }}
                >
                    Things to Do
                </button>

                <button
                    onClick={() => {
                        props.fnLoadCurrentPage('wedding-schedule');
                        props.fnMenuToggle();
                    }}
                >
                    Schedule
                </button>
            </nav>
        </React.Fragment>
    );
};

const MainHome = () => {
    return (
        <main className="page home">
            <div className="page-header">
                <header>
                    <div>
                        <h1>
                            The Great <span>Outdoors</span>
                        </h1>
                        <h4>Alexis & Ray's Wedding Adventure</h4>
                    </div>
                </header>
            </div>
        </main>
    );
};

const ContactUs = () => {
    return (
        <main className="page contact-us">
            <div className="page-header">
                <header>
                    <h2>Contact Us</h2>
                </header>
            </div>

            <div className="page-body">
                <article>
                    <div className="content-block">
                        <div className="divider">
                            <i className="fas fa-tree" />
                            <hr />
                        </div>

                        <p>
                            Add us on Facebook, and we can add you to our
                            wedding group. Information on low flight rates,
                            photos of your excursions you want to share, etc.
                        </p>

                        <div className="icon-label">
                            <i className="fab fa-facebook" />{' '}
                            <span className="icon-text">
                                <a
                                    href="https://www.facebook.com/events/676760242724171/"
                                    title="Visit the Facebook Event+ for Alexis and Ray's Wedding"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Facebook Event
                                </a>
                            </span>
                        </div>

                        <div className="icon-label">
                            <i className="fab fa-facebook" />{' '}
                            <span className="icon-text">
                                <a
                                    href="https://www.facebook.com/groups/223943268479898/"
                                    title="Visit the Facebook Group for Alexis and Ray's Wedding"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Facebook Group
                                </a>
                            </span>
                        </div>
                    </div>

                    <div className="divider">
                        <i className="fas fa-tree" />
                        <hr />
                    </div>

                    <div className="content-block text-center">
                        <h5>On the wedding day, please contact...</h5>

                        <div>
                            <p>Maid of "Honor"</p>
                            <h3>Carissa Sarreal</h3>
                            <p>
                                <a href="tel:929-316-2323">(929) 316-2323</a>
                            </p>
                        </div>

                        <div className="divider">
                            <i className="fas fa-tree" />
                            <hr />
                        </div>

                        <div>
                            <p>The "Best" Man</p>
                            <h3>Benjamin Tejada</h3>
                            <p>
                                <a href="tel:480-358-5639">(480) 358-5639</a>
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        </main>
    );
};

const Faqs = () => {
    return (
        <main className="page faqs">
            <div className="page-header">
                <header>
                    <h2>Frequently Asked Questions</h2>
                </header>
            </div>

            <div className="page-body">
                <article>
                    <div className="content-block">
                        <div className="divider">
                            <i className="fas fa-tree" />
                            <hr />
                        </div>

                        <h6>What are our wedding colors?</h6>
                        <div className="color-palette-section">
                            <div className="color-palette-container">
                                <div className="color-palette-shade primary" />
                                <p>Light Blush</p>
                            </div>

                            <div className="color-palette-container">
                                <div className="color-palette-shade secondary" />
                                <p>Rose</p>
                            </div>

                            <div className="color-palette-container">
                                <div className="color-palette-shade tertiary" />
                                <p>Forest Green</p>
                            </div>

                            <div className="color-palette-container">
                                <div className="color-palette-shade quaternary" />
                                <p>Wood</p>
                            </div>
                        </div>

                        <div className="divider">
                            <i className="fas fa-tree" />
                            <hr />
                        </div>

                        <h6>Please. No phones out during the ceremony.</h6>
                        <p>
                            This is more of a PSA than an FAQ but we request
                            that you be present in the moment and share the
                            experience with us. We have hired professional
                            photographers for the job of capturing the whole
                            event.
                        </p>

                        <div className="divider">
                            <i className="fas fa-tree" />
                            <hr />
                        </div>

                        <h6>Where is the registry?</h6>
                        <p>
                            We couldn't ask for a better gift than for our
                            friends and family to join us on our wedding day and
                            the excursions afterwards.
                        </p>

                        <div className="divider">
                            <i className="fas fa-tree" />
                            <hr />
                        </div>

                        <h6>What should I wear?</h6>
                        <p>
                            Check the weather often in preparation for the trip.
                            Rain is a possibility. Dress comfortable for the
                            excursions and formal wear for the wedding.
                        </p>
                    </div>
                </article>
            </div>
        </main>
    );
};

const Gallery = () => {
    return (
        <main className="page gallery">
            <div className="page-header">
                <header>
                    <h2>Gallery</h2>
                </header>
            </div>

            <div className="page-body">
                <article>
                    <div className="content-block timeline">
                        <div className="divider">
                            <i className="fas fa-tree" />
                            <hr />
                        </div>

                        <p>
                            <strong>Early January 2009</strong>
                            <br />
                            Met on our first big snowboarding trip in Telluride,
                            CO.
                        </p>

                        <div className="divider thin">
                            <i className="fas fa-tree" />
                            <hr />
                        </div>

                        <p>
                            <strong>February 14th, 2009</strong>
                            <br />
                            Landed the first kiss on a flight out to Florida.
                            YUSS! Disney World was the third highlight of the
                            trip.
                        </p>

                        <div className="divider thin">
                            <i className="fas fa-tree" />
                            <hr />
                        </div>

                        <p>
                            <strong>August to November 2009</strong>
                            <br />
                            Repeated visits to Europe where Alexis was studying
                            abroad. Adventures in Spain, Switzerland, Amsterdam,
                            Germany, Belgium and France.
                        </p>

                        <div className="divider thin">
                            <i className="fas fa-tree" />
                            <hr />
                        </div>

                        <p>
                            <strong>Late August 2011</strong>
                            <br />
                            Burning Man happened. This event changed our lives.
                        </p>

                        <div className="divider thin">
                            <i className="fas fa-tree" />
                            <hr />
                        </div>

                        <p>
                            <strong>2012 and 2014</strong>
                            <br />
                            Went home to the Philippines to meet all the
                            relatives.
                        </p>

                        <div className="divider thin">
                            <i className="fas fa-tree" />
                            <hr />
                        </div>

                        <p>
                            <strong>November 2016</strong>
                            <br />
                            We got engaged in New Zealand and had our Engagement
                            Honeymoon in Cairns, Australia.
                        </p>

                        <div className="divider thin">
                            <i className="fas fa-tree" />
                            <hr />
                        </div>

                        <p>
                            <strong>
                                And tons of travels and festivals, domestic or
                                international and everything in between.
                            </strong>
                            <br />
                            The wedding will be another marker in lives
                            well-lived.
                        </p>
                    </div>

                    <div className="gallery-container">
                        <div className="image-container">
                            <img
                                src="images/2011_snowboarding-0216.jpg"
                                alt=""
                            />
                        </div>
                        <div className="image-container">
                            <img
                                src="images/44115758_2339524059396833_6621455469976223744_n.jpg"
                                alt=""
                            />
                        </div>
                        <div className="image-container">
                            <img
                                src="images/44209172_1167903516682184_6816624882760024064_n.jpg"
                                alt=""
                            />
                        </div>
                        <div className="image-container">
                            <img
                                src="images/44294541_1845369368873599_7451640925664575488_n.jpg"
                                alt=""
                            />
                        </div>
                        <div className="image-container">
                            <img
                                src="images/44339347_532732903865041_4168189310350131200_n.jpg"
                                alt=""
                            />
                        </div>
                        <div className="image-container">
                            <img src="images/90440018.jpg" alt="" />
                        </div>
                        <div className="image-container">
                            <img src="images/90440020.jpg" alt="" />
                        </div>
                        <div className="image-container tall-3">
                            <img
                                src="images/44388996_2137601006501589_1206982584379113472_n.jpg"
                                alt=""
                            />
                        </div>
                        <div className="image-container">
                            <img
                                src="images/australia-new-zealand-8.jpg"
                                alt=""
                            />
                        </div>
                        <div className="image-container">
                            <img
                                src="images/australia-new-zealand-26.jpg"
                                alt=""
                            />
                        </div>
                        <div className="image-container">
                            <img
                                src="images/australia-new-zealand-33.jpg"
                                alt=""
                            />
                        </div>
                        <div className="image-container">
                            <img
                                src="images/australia-new-zealand-55.jpg"
                                alt=""
                            />
                        </div>
                        <div className="image-container">
                            <img
                                src="images/australia-new-zealand-57.jpg"
                                alt=""
                            />
                        </div>
                        <div className="image-container">
                            <img
                                src="images/australia-new-zealand-86.jpg"
                                alt=""
                            />
                        </div>
                        <div className="image-container">
                            <img
                                src="images/australia-new-zealand-230.jpg"
                                alt=""
                            />
                        </div>
                        <div className="image-container">
                            <img
                                src="images/australia-new-zealand-347.jpg"
                                alt=""
                            />
                        </div>
                        <div className="image-container">
                            <img
                                src="images/australia-new-zealand-283.jpg"
                                alt=""
                            />
                        </div>
                        <div className="image-container">
                            <img
                                src="images/bear-mountain-dec-15-16-2012-6724-18.jpg"
                                alt=""
                            />
                        </div>
                        <div className="image-container">
                            <img
                                src="images/boracay-snorkeling-6461-53.jpg"
                                alt=""
                            />
                        </div>
                        <div className="image-container">
                            <img
                                src="images/boracay-parasailing-780is-0086-131.jpg"
                                alt=""
                            />
                        </div>
                        <div className="image-container">
                            <img
                                src="images/burning-man-2011-2647.jpg"
                                alt=""
                            />
                        </div>
                        <div className="image-container">
                            <img
                                src="images/burning-man-2011-2815.jpg"
                                alt=""
                            />
                        </div>
                        <div className="image-container">
                            <img
                                src="images/burning-man-2013-4918-159.jpg"
                                alt=""
                            />
                        </div>
                        <div className="image-container">
                            <img
                                src="images/burning-man-2013-4919-160.jpg"
                                alt=""
                            />
                        </div>
                        <div className="image-container">
                            <img
                                src="images/burning-man-2013-4958-191.jpg"
                                alt=""
                            />
                        </div>
                        <div className="image-container">
                            <img
                                src="images/coron-hot-springs-2014-9521-8.jpg"
                                alt=""
                            />
                        </div>
                        <div className="image-container">
                            <img
                                src="images/coron-hot-springs-9521-20.jpg"
                                alt=""
                            />
                        </div>
                        <div className="image-container">
                            <img
                                src="images/coron-hot-springs-9529-28.jpg"
                                alt=""
                            />
                        </div>
                        <div className="image-container">
                            <img
                                src="images/coron-island-tours-9257-22.jpg"
                                alt=""
                            />
                        </div>
                        <div className="image-container">
                            <img
                                src="images/first-trip-together-2013-9059-1.jpg"
                                alt=""
                            />
                        </div>
                        <div className="image-container tall-2">
                            <img
                                src="images/halloween-2013-bone-clan-9185-14.jpg"
                                alt=""
                            />
                        </div>
                        <div className="image-container">
                            <img
                                src="images/hard-haunted-mansion-2012-3493-13.jpg"
                                alt=""
                            />
                        </div>
                        <div className="image-container">
                            <img src="images/IMG_0191.jpg" alt="" />
                        </div>
                        <div className="image-container">
                            <img src="images/IMG_0363.jpg" alt="" />
                        </div>
                        <div className="image-container">
                            <img src="images/IMG_0408.jpg" alt="" />
                        </div>
                        <div className="image-container">
                            <img src="images/IMG_0548.jpg" alt="" />
                        </div>
                        <div className="image-container">
                            <img src="images/IMG_0481.jpg" alt="" />
                        </div>
                        <div className="image-container">
                            <img src="images/IMG_0984.jpg" alt="" />
                        </div>
                        <div className="image-container">
                            <img src="images/IMG_1046.jpg" alt="" />
                        </div>
                        <div className="image-container tall-3">
                            <img src="images/IMG_6031.jpg" alt="" />
                        </div>
                        <div className="image-container">
                            <img src="images/IMG_3324.jpg" alt="" />
                        </div>
                        <div className="image-container">
                            <img src="images/IMG_6062.jpg" alt="" />
                        </div>
                        <div className="image-container">
                            <img
                                src="images/IMG_9974Kalliope-Halloween.jpg"
                                alt=""
                            />
                        </div>
                        <div className="image-container tall-4">
                            <img
                                src="images/lotb-paw-edition-1164-26.jpg"
                                alt=""
                            />
                        </div>
                        <div className="image-container">
                            <img
                                src="images/our-new-bed-2011-5264-13.jpg"
                                alt=""
                            />
                        </div>
                        <div className="image-container">
                            <img
                                src="images/our-new-bed-photo-combined.jpg"
                                alt=""
                            />
                        </div>
                        <div className="image-container">
                            <img
                                src="images/voodoo-new-orleans-2011-2291.jpg"
                                alt=""
                            />
                        </div>
                        <div className="image-container">
                            <img
                                src="images/symbiosis-oregon-eclipse-2017-7083.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                </article>

                <header>
                    <h2>Engagement Photos</h2>
                </header>

                <article>
                    <div className="content-block text-center">
                        <p>
                            <strong>Lighthouse Park in West Vancouver</strong>
                            <br />
                            4902 Beacon Ln, West Vancouver
                            <br />
                            BC V7W 1k5, Canada
                        </p>

                        <p>
                            <strong>Photographers</strong>
                            <br />
                            Jeff and Cat Change
                            <br />
                            <a href="http://www.theapartmentphotography.com/">
                                The Apartment Photography
                            </a>
                        </p>

                        <div className="divider">
                            <i className="fas fa-tree" />
                            <hr />
                        </div>
                    </div>

                    <div className="gallery-container">
                        <div className="image-container">
                            <img src="images/x.jpg" alt="" />
                        </div>
                        <div className="image-container">
                            <img src="images/x.jpg" alt="" />
                        </div>
                        <div className="image-container">
                            <img src="images/x.jpg" alt="" />
                        </div>
                        <div className="image-container">
                            <img src="images/x.jpg" alt="" />
                        </div>
                        <div className="image-container">
                            <img src="images/x.jpg" alt="" />
                        </div>
                        <div className="image-container">
                            <img src="images/x.jpg" alt="" />
                        </div>
                        <div className="image-container">
                            <img src="images/x.jpg" alt="" />
                        </div>
                        <div className="image-container">
                            <img src="images/x.jpg" alt="" />
                        </div>
                        <div className="image-container">
                            <img src="images/x.jpg" alt="" />
                        </div>
                        <div className="image-container">
                            <img src="images/x.jpg" alt="" />
                        </div>
                        <div className="image-container">
                            <img src="images/x.jpg" alt="" />
                        </div>
                        <div className="image-container">
                            <img src="images/x.jpg" alt="" />
                        </div>
                        <div className="image-container">
                            <img src="images/x.jpg" alt="" />
                        </div>
                        <div className="image-container">
                            <img src="images/x.jpg" alt="" />
                        </div>
                        <div className="image-container">
                            <img src="images/x.jpg" alt="" />
                        </div>
                        <div className="image-container">
                            <img src="images/x.jpg" alt="" />
                        </div>
                        <div className="image-container">
                            <img src="images/x.jpg" alt="" />
                        </div>
                        <div className="image-container">
                            <img src="images/x.jpg" alt="" />
                        </div>
                        <div className="image-container">
                            <img src="images/x.jpg" alt="" />
                        </div>
                        <div className="image-container">
                            <img src="images/x.jpg" alt="" />
                        </div>
                        <div className="image-container">
                            <img src="images/x.jpg" alt="" />
                        </div>
                        <div className="image-container">
                            <img src="images/x.jpg" alt="" />
                        </div>
                        <div className="image-container">
                            <img src="images/x.jpg" alt="" />
                        </div>
                        <div className="image-container">
                            <img src="images/x.jpg" alt="" />
                        </div>
                        <div className="image-container">
                            <img src="images/x.jpg" alt="" />
                        </div>
                        <div className="image-container">
                            <img src="images/x.jpg" alt="" />
                        </div>
                        <div className="image-container">
                            <img src="images/x.jpg" alt="" />
                        </div>
                        <div className="image-container">
                            <img src="images/x.jpg" alt="" />
                        </div>
                        <div className="image-container">
                            <img src="images/x.jpg" alt="" />
                        </div>
                        <div className="image-container">
                            <img src="images/x.jpg" alt="" />
                        </div>
                        <div className="image-container">
                            <img src="images/x.jpg" alt="" />
                        </div>
                        <div className="image-container">
                            <img src="images/x.jpg" alt="" />
                        </div>
                        <div className="image-container">
                            <img src="images/x.jpg" alt="" />
                        </div>
                        <div className="image-container">
                            <img src="images/x.jpg" alt="" />
                        </div>
                        <div className="image-container">
                            <img src="images/x.jpg" alt="" />
                        </div>
                        <div className="image-container">
                            <img src="images/x.jpg" alt="" />
                        </div>
                        <div className="image-container">
                            <img src="images/x.jpg" alt="" />
                        </div>
                        <div className="image-container">
                            <img src="images/x.jpg" alt="" />
                        </div>
                        <div className="image-container">
                            <img src="images/x.jpg" alt="" />
                        </div>
                        <div className="image-container">
                            <img src="images/x.jpg" alt="" />
                        </div>
                        <div className="image-container">
                            <img src="images/x.jpg" alt="" />
                        </div>
                        <div className="image-container">
                            <img src="images/x.jpg" alt="" />
                        </div>
                        <div className="image-container">
                            <img src="images/x.jpg" alt="" />
                        </div>
                    </div>
                </article>
            </div>
        </main>
    );
};

const GettingThere = () => {
    return (
        <main className="page getting-there">
            <div className="page-header">
                <header>
                    <h2>Getting There</h2>
                </header>
            </div>

            <div className="page-body">
                <article>
                    <div className="content-block">
                        <div className="divider">
                            <i className="fas fa-tree" />
                            <hr />
                        </div>

                        <header>
                            <h4>Flights and Car Rentals</h4>
                        </header>

                        <p>
                            Book flights that arrive in Vancouver YVR Airport.
                            There are tons of options for car rentals.
                        </p>

                        <h6>Airport</h6>
                        <p>
                            Arrive at{' '}
                            <a
                                href="http://www.yvr.ca/en/passengers"
                                title="YVR Vancouver International Airport"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                YVR Vancouver International Airport
                            </a>
                        </p>

                        <h6>Cost</h6>
                        <p>
                            Costs for flights and car rentals vary. Join the{' '}
                            <a
                                href="https://www.facebook.com/groups/223943268479898/"
                                title="Visit the Facebook Group for Alexis and Ray's Wedding"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Facebook Group
                            </a>{' '}
                            for information travel discounts.
                        </p>

                        <div className="icon-label">
                            <i className="fas fa-exclamation-triangle" />{' '}
                            <span className="icon-text small">
                                Please allow enough time for transportation and
                                do your best to get to the venue to check-in at
                                4:00pm.
                            </span>
                        </div>
                    </div>

                    <div className="content-block">
                        <div className="divider">
                            <i className="fas fa-tree" />
                            <hr />
                        </div>

                        <header>
                            <h4>The Venue</h4>
                        </header>

                        <p>
                            The wedding ceremony will be held at Sunwolf.
                            Sunwolf is an hour and thirty minutes away from the
                            airport. The venue itself and the surrounding area
                            have lodging available.
                        </p>

                        <h6>Address</h6>
                        <p>
                            <a href="https://g.page/sunwolfbc?share">
                                70002 Squamish Valley Rd, Brackendale, BC V0N
                                1H0, Canada
                            </a>
                        </p>
                    </div>
                </article>
            </div>
        </main>
    );
};

const Lodging = () => {
    return (
        <main className="page lodging">
            <div className="page-header">
                <header>
                    <h2>Sunwolf Lodging</h2>
                </header>
            </div>

            <div className="page-body">
                <article>
                    <div className="content-block">
                        <div className="divider">
                            <i className="fas fa-tree" />
                            <hr />
                        </div>

                        <h6>Address</h6>
                        <p>
                            70002 Squamish Valley Rd, Brackendale, BC V0N 1H0,
                            Canada
                        </p>

                        <h6>Check-In</h6>
                        <p>4:00pm on Friday, September 20th</p>

                        <h6>Brunch Available</h6>
                        <p>Fergie's Cafe located inside Sunwolf Property</p>

                        <h6>Check-Out</h6>
                        <p>11:00am on Monday, September 24th</p>
                    </div>

                    <div className="gallery-container">
                        <div className="image-container">
                            <img
                                src="images/squamish-b-shots-1383.jpg"
                                alt=""
                            />
                        </div>
                        <div className="image-container">
                            <img
                                src="images/squamish-b-shots-1371.jpg"
                                alt=""
                            />
                        </div>
                        <div className="image-container">
                            <img
                                src="images/squamish-b-shots-1379.jpg"
                                alt=""
                            />
                        </div>
                        <div className="image-container">
                            <img
                                src="images/squamish-b-shots-1393.jpg"
                                alt=""
                            />
                        </div>
                        <div className="image-container">
                            <img
                                src="images/squamish-b-shots-1399.jpg"
                                alt=""
                            />
                        </div>
                        <div className="image-container">
                            <img
                                src="images/squamish-b-shots-1389.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                </article>

                <article>
                    <div className="content-block">
                        <header>
                            <h4>Camping Area</h4>
                        </header>

                        <p>
                            The camping area is in between the lodges and the
                            river. You may bring your camping tents and gear.
                            You can also park an RV or camper van in the area!
                            RV Rentals are available in Vancouver.
                        </p>

                        <p className="small">
                            Restrooms and showers for campers are available.
                        </p>

                        <p>
                            You may post in the{' '}
                            <a
                                href="https://www.facebook.com/groups/223943268479898/"
                                title="Visit the Facebook Group for Alexis and Ray's Wedding"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Facebook Group
                            </a>{' '}
                            to plan your accommodation options with friends and
                            family.
                        </p>
                    </div>

                    <div className="gallery-container">
                        <div className="image-container">
                            <img
                                src="images/squamish-b-shots-1421.jpg"
                                alt=""
                            />
                        </div>
                        <div className="image-container">
                            <img
                                src="images/squamish-b-shots-1431.jpg"
                                alt=""
                            />
                        </div>
                        <div className="image-container">
                            <img
                                src="images/squamish-b-shots-1372.jpg"
                                alt=""
                            />
                        </div>
                        <div className="image-container">
                            <img
                                src="images/squamish-b-shots-1405.jpg"
                                alt=""
                            />
                        </div>
                        <div className="image-container">
                            <img
                                src="images/squamish-b-shots-1546.jpg"
                                alt=""
                            />
                        </div>
                        <div className="image-container">
                            <img
                                src="images/squamish-b-shots-1424.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                </article>
            </div>
        </main>
    );
};

const ThingsToDo = () => {
    return (
        <main className="page things-to-do">
            <div className="page-header">
                <header>
                    <h2>Things to Do</h2>
                </header>
            </div>

            <div className="page-body">
                <article>
                    <div className="content-block">
                        <div className="divider">
                            <i className="fas fa-tree" />
                            <hr />
                        </div>

                        <header>
                            <h4>Sea-to-Sky Gondola</h4>
                            <h5>Brunch with Scenic Views</h5>
                        </header>

                        <div className="divider">
                            <i className="fas fa-tree" />
                            <hr />
                        </div>

                        <p>
                            We will take the gondola up and enjoy brunch and
                            scenic views of beautiful British Columbia.
                        </p>

                        <h6>Location</h6>
                        <p>36800 BC-99, Squamish, BC V0n 3G0, Canada</p>

                        <h6>Website</h6>
                        <p>
                            <a
                                href="https://www.seatoskygondola.com/"
                                title="Sea-to-Sky Gondola"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Sea-to-Sky Gondola
                            </a>
                        </p>

                        <h6>Cost</h6>
                        <p>$30 USD</p>

                        <div className="icon-label">
                            <i className="fas fa-exclamation-triangle" />
                            <span className="icon-text small">
                                Advanced trails available requiring appropriate
                                hiking gear.
                            </span>
                        </div>
                    </div>

                    <div className="content-block">
                        <header>
                            <h4>Picnic on Alice Lake</h4>
                            <h5>Kayaks and Longboards Available</h5>
                        </header>

                        <div className="divider">
                            <i className="fas fa-tree" />
                            <hr />
                        </div>

                        <p>
                            Slather on some sunblock and swim, paddle or kayak
                            on Alice Lake. Bring food and snacks!
                        </p>

                        <h6>Location</h6>
                        <p>BC-99, Squamish, BC V0N 1H0, Canada</p>

                        <h6>Website</h6>
                        <p>
                            <a
                                href="http://www.env.gov.bc.ca/bcparks/explore/parkpgs/alice_lk/"
                                title="Explore Alice Lake"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Explore Alice Lake
                            </a>
                        </p>

                        <h6>Cost</h6>
                        <p>FREE</p>
                    </div>

                    <div className="content-block">
                        <header>
                            <h4>Whistler Blackcomb</h4>
                            <h5>Tree Walks and Ziplines</h5>
                        </header>

                        <div className="divider">
                            <i className="fas fa-tree" />
                            <hr />
                        </div>

                        <p>
                            Walking on tree canopies for sightseeing or beginner
                            to advanced ziplining for touring, choose your own
                            adventure!
                        </p>

                        <h6>Location</h6>
                        <p>4545 Blackcomb Way, Whistler, BC V0N 1B4, Canada</p>

                        <h6>Website</h6>
                        <p>
                            <a
                                href="https://squamishadventure.com/portfolio/ziptreck-zipline-tours-squamish-whistler/"
                                title="Squamish/Whistler, Ziptrek and Zipline Tours"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Squamish/Whistler, Ziptrek and Zipline Tours
                            </a>
                        </p>

                        <h6>Cost</h6>
                        <p>Depends on Tour Package</p>
                    </div>

                    <div className="content-block">
                        <header>
                            <h4>Other Things to Do</h4>
                        </header>

                        <div className="divider">
                            <i className="fas fa-tree" />
                            <hr />
                        </div>

                        <p>
                            Whale watching, rock climbing, waterfalls, hikes,
                            mountain-biking, white-water rafting, rope courses,
                            canyoneering, kite-boarding and windsurfing.
                        </p>
                    </div>
                </article>
            </div>
        </main>
    );
};

const WeddingSchedule = () => {
    return (
        <main className="page wedding-schedule">
            <div className="page-header">
                <header>
                    <h2>Wedding Schedule</h2>
                </header>
            </div>

            <div className="page-body">
                <header>
                    <h2>Weekend Schedule</h2>

                    <p>
                        Join us on scheduled activities for Friday, Saturday,
                        and Sunday! You may do your own excursions for the rest
                        of the time, or you are welcome to join us on ours! This
                        is what we have planned...
                    </p>
                </header>

                <article>
                    <div className="content-block">
                        <div className="divider">
                            <i className="fas fa-tree" />
                            <hr />
                        </div>

                        <header>
                            <h4>Day One</h4>
                            <h5>Friday, September 20th, 2019</h5>
                        </header>

                        <div className="divider">
                            <i className="fas fa-tree" />
                            <hr />
                        </div>

                        <p>
                            Arrive at YVR International Airport and drive to{' '}
                            <a
                                href="http://www.sunwolf.net/weddingsevents/"
                                title="Visit the Sunwolf Website"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Sunwolf
                            </a>
                        </p>

                        <h6>4:00pm</h6>
                        <p>
                            <a href="#accommodations" title="Check In">
                                Check In
                            </a>{' '}
                            to Sunwolf
                        </p>

                        <h6>BBQ and Rehearsals</h6>
                        <p>BBQ provided by Cecilia Mopera and Robert Tejada</p>

                        <p className="small">
                            If you would like to cook your own bbq, the nearest
                            grocery store is Kitchen Quickies, Save on Foods,
                            Craig's Your Independent Grocer and Brackendale
                            General Store.
                        </p>
                    </div>
                    <div className="gallery-container">
                        <div className="image-container">
                            <img
                                src="images/squamish-b-shots-1421.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                </article>

                <article>
                    <div className="content-block">
                        <header>
                            <h4>Day Two</h4>
                            <h5>Saturday, September 21st, 2019</h5>
                        </header>

                        <div className="divider">
                            <i className="fas fa-tree" />
                            <hr />
                        </div>

                        <h6>10:30am</h6>
                        <p>
                            Brunch at Fergie's Cafe located inside the Sunwolf
                            property
                        </p>

                        <h6>4:00pm</h6>
                        <p>Wedding Ceremony</p>

                        <h6>6:00pm</h6>
                        <p>Dinner and Reception</p>

                        <p className="small">
                            NOTE: The entire property is ours for the weekend so
                            please stay and for as long as you want!
                        </p>
                    </div>
                    <div className="gallery-container">
                        <div className="image-container">
                            <img
                                src="images/alexis-ray-engagement-83.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                </article>

                <article>
                    <div className="content-block">
                        <header>
                            <h4>Day Three</h4>
                            <h5>Sunday, September 22nd, 2019</h5>
                        </header>

                        <div className="divider">
                            <i className="fas fa-tree" />
                            <hr />
                        </div>

                        <h6>Morning</h6>
                        <p>
                            <a
                                href="https://www.seatoskygondola.com/"
                                title="Visit the Sea-to-Sky Gondola Website"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Sea-to-Sky Gondola
                            </a>{' '}
                            for brunch and nature walk
                        </p>

                        <h6>Afternoon</h6>
                        <p>
                            Paddleboarding and kayaking on{' '}
                            <a
                                href="http://seatoskyparks.com/parks/alice-lake/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Alice Lake
                            </a>
                        </p>
                    </div>
                    <div className="gallery-container">
                        <img src="images/squamish-b-shots-1516.jpg" alt="" />
                    </div>
                </article>

                <article>
                    <div className="content-block">
                        <header>
                            <h4>Day Four</h4>
                            <h5>Monday, September 23rd, 2019</h5>
                        </header>

                        <div className="divider">
                            <i className="fas fa-tree" />
                            <hr />
                        </div>

                        <h6>TBD</h6>
                        <p>
                            <a
                                href="https://squamishadventure.com/portfolio/ziptreck-zipline-tours-squamish-whistler/"
                                title="Visit the Sea-to-Sky Gondola Website"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Ziptrack and Zipline Tours, Squamish Adventures
                            </a>
                        </p>
                    </div>
                    <div className="gallery-container">
                        <div className="image-container">
                            <img
                                src="images/squamish-b-shots-1613.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                </article>

                <article>
                    <div className="content-block">
                        <header>
                            <h4>Day Five</h4>
                            <h5>Tuesday, September 24th, 2019</h5>
                        </header>

                        <div className="divider">
                            <i className="fas fa-tree" />
                            <hr />
                        </div>

                        <h6>9:00am</h6>
                        <p>Whale Watch</p>

                        <h6>11:00am</h6>
                        <p>Check Out from Sunwolf Lodging</p>

                        <p className="small">
                            You may stay longer for more adventures!{' '}
                            <a href="" title="">
                                Click here
                            </a>{' '}
                            for other adventure and lodging options!
                        </p>
                    </div>
                    <div className="gallery-container">
                        <div className="image-container">
                            <img
                                src="images/alexis-ray-engagement-85.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                </article>
            </div>
        </main>
    );
};

ReactDOM.render(<ScreenArea />, document.getElementById('root'));
