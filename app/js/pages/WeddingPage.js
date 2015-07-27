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
            <div className="info-section__right info-section__right--image">
              <img className="info-section__image" src="/images/mttam-cropped.png" />
            </div>
            <div className="info-section__left info-section__left--text">
              <h3 className="info-section__subtitle">Trojan Point, Mt. Tamalpais</h3>
              <p className="info-section__body">
                Just north of San Francisco's Golden Gate is Mount Tamalpais.  It has redwood groves and oak woodlands with a spectacular view from the 2,571-foot peak.
                On a clear day, visitors can see the Farallon Islands 25 miles out to sea, the Marin County hills, San Francisco and the bay, hills and cities of the East Bay, and Mount Diablo. On rare occasions, the Sierra Nevada's snow-covered mountains can be seen 150 miles away.
              </p>
            </div>
          </section>
          <section className="info-section">
            <div className="info-section__left info-section__left--image">
              <img className="info-section__image" src="/images/sweetwater-cropped.png" />
            </div>
            <div className="info-section__right info-section__right--text">
              <h3 className="info-section__subtitle">Sweetwater Music Hall</h3>
              <p className="info-section__body">
                The much-anticipated Sweetwater Music Hall – a community gathering place and live music venue dedicated to bringing back the Sweetwater’s musical legacy to Mill Valley – opened in late January of 2012. The opening of Sweetwater Music Hall marked a rebirth of the landmark roots music venue and Bay Area treasure originally opened on November 17, 1972.
              </p>
            </div>
          </section>
          <section className="info-section">
            <div className="info-section__left info-section__left--text">
              <h3 className="info-section__subtitle">Dress Code</h3>
              <p className="info-section__body">Formal attire is requested, suits and ties for the gentlemen and dresses of cocktail or floor length for the ladies. The ceremony will be held outdoors. Guests will need to walk approximately 500 feet on a dirt path from the bus drop off to the ceremony site, parts of this path are sloped. Assistance will be ready for those who need it. Ladies are recommended to wear shoes they can walk outdoors in or bring another pair for the ceremony. The weather may be unpredictable, ranging from sunny and hot to windy and chilly, ladies are recommended to bring a shawl or another item for warmth. A complementary coat check will be provided at the reception site to hold any extra items.</p>
            </div>
          </section>
        </div>
      </DocumentTitle>
    );
  }

});

module.exports = WeddingPage;