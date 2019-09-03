class ScreenArea extends React.Component {
    state = {
        currentPage: 'home',
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

                {this.state.currentPage === 'schedule' ? (
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
                    {props.menuState ? 'HIDE MENU' : 'MENU'}
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
                        props.fnLoadCurrentPage('schedule');
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

                <div class="page-header">
                    <header>
                        <h2>Engagement Photos</h2>
                    </header>
                </div>

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
                            Jeff and Cat Chang
                            <br />
                            <a
                                href="http://www.theapartmentphotography.com/"
                                target="_blank"
                            >
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
                            <img
                                src="images/alexis-ray-engagement-24.jpg"
                                alt=""
                            />
                        </div>
                        <div className="image-container">
                            <img
                                src="images/alexis-ray-engagement-29.jpg"
                                alt=""
                            />
                        </div>
                        <div className="image-container">
                            <img
                                src="images/alexis-ray-engagement-32.jpg"
                                alt=""
                            />
                        </div>
                        <div className="image-container">
                            <img
                                src="images/alexis-ray-engagement-33.jpg"
                                alt=""
                            />
                        </div>
                        <div className="image-container">
                            <img
                                src="images/alexis-ray-engagement-37.jpg"
                                alt=""
                            />
                        </div>
                        <div className="image-container">
                            <img
                                src="images/alexis-ray-engagement-49.jpg"
                                alt=""
                            />
                        </div>
                        <div className="image-container">
                            <img
                                src="images/alexis-ray-engagement-66.jpg"
                                alt=""
                            />
                        </div>
                        <div className="image-container">
                            <img
                                src="images/alexis-ray-engagement-83.jpg"
                                alt=""
                            />
                        </div>
                        <div className="image-container">
                            <img
                                src="images/alexis-ray-engagement-85.jpg"
                                alt=""
                            />
                        </div>
                        <div className="image-container">
                            <img
                                src="images/alexis-ray-engagement-102.jpg"
                                alt=""
                            />
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
                            The wedding ceremony will be held at{' '}
                            <a
                                href="https://g.page/sunwolfbc?share"
                                title="Directions to Sunwolf"
                                target="_blank"
                            >
                                Sunwolf
                            </a>
                            . Sunwolf is an hour and thirty minutes away from
                            the airport. The venue itself and the surrounding
                            area have lodging available.
                        </p>

                        <h6>Address</h6>
                        <p>
                            <a
                                href="https://g.page/sunwolfbc?share"
                                title="Directions to Sunwolf"
                                target="_blank"
                            >
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
                            <a
                                href="https://g.page/sunwolfbc?share"
                                title="Directions to Sunwolf"
                                target="_blank"
                            >
                                70002 Squamish Valley Rd, Brackendale, BC V0N
                                1H0, Canada
                            </a>
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

const WeddingSchedule = () => {
    return (
        <main className="page wedding-schedule">
            <div className="page-header">
                <header>
                    <h2>Wedding Schedule</h2>
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
                            Join us on scheduled activities for all the days!
                            You may do your own excursions for the rest of the
                            time, or you are welcome to join us on ours! This is
                            what we have planned...
                        </p>

                        <header>
                            <h3>Day One</h3>
                            <h4>Friday, September 20th</h4>
                        </header>

                        <div className="divider">
                            <i className="fas fa-tree" />
                            <hr />
                        </div>

                        <p>
                            Arrive at YVR International Airport and drive to{' '}
                            <a
                                href="https://g.page/sunwolfbc?share"
                                title="Directions to Sunwolf"
                                target="_blank"
                            >
                                Sunwolf
                            </a>
                        </p>

                        <h6>4:00pm</h6>
                        <p>Check-in to Sunwolf</p>

                        <h6>BBQ Cook Out!</h6>
                        <p>BBQ provided by Cecilia Mopera and Robert Tejada</p>

                        <p className="small">
                            If you would like to cook your own bbq, the nearest
                            grocery store is{' '}
                            <a
                                href="https://goo.gl/maps/PyPes1isMnJAWPTb9"
                                title="Directions to Kitchen Quickies"
                                target="_blank"
                            >
                                Kitchen Quickies
                            </a>
                            ,{' '}
                            <a
                                href="https://goo.gl/maps/Wpo7moB6DTJR9vhg8"
                                title="Directions to Save on Foods"
                                target="_blank"
                            >
                                Save on Foods
                            </a>
                            ,{' '}
                            <a
                                href="https://goo.gl/maps/oKuJmHEFPzWhGnoa8"
                                title="Directions to Craig's Your Independent Grocer"
                                target="_blank"
                            >
                                Craig's Your Independent Grocer
                            </a>{' '}
                            and{' '}
                            <a
                                href="https://goo.gl/maps/RhrKwBC7aL6zZq666"
                                title="Directions to Brackendale General Store"
                                target="_blank"
                            >
                                Brackendale General Store
                            </a>
                            .
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
                            <h3>Day Two</h3>
                            <h4>Saturday, September 21st</h4>
                        </header>

                        <div className="divider">
                            <i className="fas fa-tree" />
                            <hr />
                        </div>

                        <h6>4:00pm</h6>
                        <p>Wedding Ceremony</p>

                        <h6>4:30pm</h6>
                        <p>Cocktail and Hors D'oeuvres</p>

                        <h6>5:50pm</h6>
                        <p>Guests Seated for Dinner</p>

                        <h6>6:00</h6>
                        <p>Dinner and Dance</p>

                        <h6>Afterparty</h6>
                        <p>
                            Get comfortable! The bar service and the band end at
                            around 10:00pm but we'll hanging out well after
                            that.
                        </p>

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
                            <h3>Day Three</h3>
                            <h4>Sunday, September 22nd</h4>
                        </header>

                        <div className="divider">
                            <i className="fas fa-tree" />
                            <hr />
                        </div>

                        <h6>Morning</h6>
                        <p>
                            Let's check out{' '}
                            <a
                                href="https://goo.gl/maps/zVT5Dsm3GEcarQkU9"
                                title="Directions to Capilano Suspension Bridge"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Capilano Suspension Bridge
                            </a>{' '}
                            for brunch and nature walk
                        </p>

                        <h6>Afternoon</h6>
                        <p>
                            And then let's get to the top of{' '}
                            <a
                                href="https://goo.gl/maps/9SMDZkFsPpDaZVjm6"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Grouse Mountain
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
                            <h3>Day Four</h3>
                            <h4>Monday, September 23rd</h4>
                        </header>

                        <div className="divider">
                            <i className="fas fa-tree" />
                            <hr />
                        </div>

                        <h6>11:00am</h6>
                        <p>Check Out from Sunwolf Lodging</p>
                    </div>
                </article>
            </div>
        </main>
    );
};

ReactDOM.render(<ScreenArea />, document.getElementById('root'));
