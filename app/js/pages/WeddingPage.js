'use strict';

var React         = require('react/addons');
var Link          = require('react-router').Link;
var DocumentTitle = require('react-document-title');

var WeddingPage = React.createClass({

  propTypes: {
  },

  render: function() {
    return (
      <DocumentTitle title="About the Wedding | Kelly & Micah">
        <div>
          <section className="info-section">
            <h3 className="info-section__title">Ceremony - Trojan Point, Mt. Tamalpais</h3>
            <img className="info-section__image" src="/images/DSC00474.jpg" />
            <p className="info-section__body">
              Just north of San Francisco's Golden Gate is Mount Tamalpais.  It has redwood groves and oak woodlands with a spectacular view from the 2,571-foot peak.
              On a clear day, visitors can see the Farallon Islands 25 miles out to sea, the Marin County hills, San Francisco and the bay, hills and cities of the East Bay, and Mount Diablo. On rare occasions, the Sierra Nevada's snow-covered mountains can be seen 150 miles away.
            </p>
          </section>
          <section className="info-section">
            <h3 className="info-section__title">Reception - Sweetwater Music Hall</h3>
            <img className="info-section__image" src="/images/sweetwater.jpg" />
            <p className="info-section__body">
              The much-anticipated Sweetwater Music Hall – a community gathering place and live music venue dedicated to bringing back the Sweetwater’s musical legacy to Mill Valley – opened in late January of 2012. The opening of Sweetwater Music Hall marked a rebirth of the landmark roots music venue and Bay Area treasure originally opened on November 17, 1972.
            </p>
          </section>
          <section className="info-section">
            <h3 className="info-section__title">Dress Code</h3>
            <p className="info-section__body">Formal attire is requested, suits and ties for the gentlemen and dresses of cocktail or floor length for the ladies. The ceremony will be held outdoors. Guests will need to walk approximately 500 feet on a dirt path from the bus drop off to the ceremony site, parts of this path are sloped. Assistance will be ready for those who need it. Ladies are recommended to wear shoes they can walk outdoors in or bring another pair for the ceremony. The weather may be unpredictable, ranging from sunny and hot to windy and chilly, ladies are recommended to bring a shawl or another item for warmth. A complementary coat check will be provided at the reception site to hold any extra items.</p>
          </section>
        </div>
      </DocumentTitle>
    );
  }

});

module.exports = WeddingPage;