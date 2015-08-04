'use strict';

var React         = require('react/addons');
var Link          = require('react-router').Link;
var DocumentTitle = require('react-document-title');

var RecommendationsPage = React.createClass({

  propTypes: {
  },

  render: function() {
    return (
      <DocumentTitle title="Mill Valley Recommendations | Kelly & Micah">
        <div>
          <section className="info-section">
          <div className="info-section__right info-section__right--image">
            <img className="info-section__image" src="/images/map-cropped.png" />
          </div>
            <div className="info-section__left info-section__left--text">
              <h3 className="info-section__subtitle">Transportation</h3>
              <p className="info-section__body">
                We recommended flying into San Francisco(SFO) or Oakland(OAK) international airports. The following transportation services may be helpful during your visit:<br/><br/>
                - <strong>Marin Airporter</strong> Charter busses pick up at SFO approximately every 30 minutes. No reservations are required. <a href="http://www.marinairporter.com/index.php/sfo-airporter-services" target="_blank">MarinAirporter.com</a><br/>
                - <strong>Uber</strong> (<a href="https://get.uber.com/invite/uber-fo-free" target="_blank">Click here for $20 off</a>)<br/>
                - <strong>Mill Valley Taxi Service</strong> (415) 307-1336<br/>
              </p>
            </div>
          </section>
          <section className="info-section">
            <div className="info-section__left info-section__left--image">
              <img className="info-section__image" src="/images/solfood-cropped.png" />
            </div>
            <div className="info-section__right info-section__right--text">
              <h3 className="info-section__subtitle">Restaurants</h3>
              <p className="info-section__body">
                You'll find a few of our Mill Valley favorites below, but a more complete list of the top bars and restaurants in Marin County can be found here.
                - <strong>Sol Food</strong>. Amazing Puerto Rican food. (<a href="http://www.solfoodrestaurant.com/daily-menu.pdf" target="_blank">Menu</a>)<br/>
                - <strong>El Paseo</strong>. A high-end, killer steakhouse from Marin locals Tyler Florence and Sammy Hagar. (<a href="http://elpaseomillvalley.com/menu_dinner.pdf" target="_blank">Menu</a>)<br/>
                - <strong>Vascos</strong>. Italian classics and great wine! (<a href="http://www.vascomillvalley.com/menu--wine-pdfs.html" target="_blank">Menu</a>)
                - <strong>The Cantina</strong>. Family friendly Mexican food (<a href="http://thecantina.com/dinner-menu.html" target="_blank">Menu</a>)
              </p>
            </div>
          </section>
          <section className="info-section">
            <div className="info-section__left info-section__left--text">
              <h3 className="info-section__subtitle">Brunch Spots</h3>
              <p className="info-section__body">
                - <strong>The Sweetwater Music Hall</strong>. Yep, they do brunch too, and if you're lucky there will be some live music. (<a href="http://sweetwatermusichall.ticketfly.com/files/2015/04/BRUNCH-MENU_updated04082015.pdf" target="_blank">Menu</a>)<br/>
                - <strong>Kitchen Sunnyside</strong>. (<a href="http://www.kitchensunnyside.com/Kitchen_Sunnyside___Breakfast___Brunch___Lunch______31_Sunnyside_Ave_Mill_Valley,_CA_94941/Home_files/Kitchen%20Sunnyside%20Menu.pdf" target="_blank">Menu</a>)<br/>
                - <strong>Mama’s Royal Café</strong>. A quirky breakfast spot that’s been open for decades.
                - <strong>The Dipsea</strong>. An extensive menu of breakfast classics that never disappoint. (<a href="http://www.dipseacafe.com/Menu.html" target="_blank">Menu</a>)
              </p>
            </div>
          </section>
          <section className="info-section">
            <div className="info-section__right info-section__right--image">
              <img className="info-section__image" src="/images/beerworks-cropped.png" />
            </div>
            <div className="info-section__left info-section__left--text">
              <h3 className="info-section__subtitle">Bars</h3>
              <p className="info-section__body">
                Mill Valley doesn't have many too many watering holes, but nearly all of the resturants provide a nice place to grab a drink.<br/>
                - <strong>Beerworks</strong>. The beers on tap are always changing, but they often have both local and international brews available. They have food too!<br/>
                - <strong>El Paseo</strong>. We mentioned the steak before, but the wine list is probably the best in Mill Valley, so if you're looking for a glass or a bottle, head here.<br/>
                - <strong>2am Club</strong>. The local watering hole, be careful what you might find!<br/>
              </p>
            </div>
          </section>
        </div>
      </DocumentTitle>
    );
  }

});

module.exports = RecommendationsPage;