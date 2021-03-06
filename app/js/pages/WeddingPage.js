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
          <section className="info-section info-section--full-width">
            <div className="info-section__center info-section__center--image">
              <img className="info-section__image" src="/images/DSC00474.jpg" />
            </div>
            <div className="info-section__center info-section__center--text">
              <h3 className="info-section__subtitle">The Ceremony – Trojan Point, Mt. Tamalpais</h3>
              <p className="info-section__body">
                Just north of San Francisco's Golden Gate, in Marin County, is Mount Tamalpais. Perched on the top of this beauty is where we will be married. The location of Trojan Point has a 200 degree view from the Marin County hills, San Francisco, and all the way up the coast.
              </p>
            </div>
          </section>
          <section className="info-section">
            <div className="info-section__left info-section__left--image">
              <img className="info-section__image" src="/images/sweetwater-cropped.png" />
            </div>
            <div className="info-section__right info-section__right--text">
              <h3 className="info-section__subtitle">The Reception – Sweetwater Music Hall</h3>
              <p className="info-section__body">
                The Sweetwater Music Hall is a community gathering place and live music venue in Mill Valley dedicated to bringing back the Sweetwater’s musical legacy to Mill Valley. The opening of this current location marked a rebirth of the landmark roots music venue and Bay Area treasure originally opened on November 17, 1972 only a few blocks away in Mill Valley. Here, we will party the night away!
              </p>
            </div>
          </section>
          <section className="info-section">
            <div className="info-section__right info-section__right--image" style={{width: '40%'}}>
              <img className="info-section__image" src="/images/boods.png" style={{maxHeight: 400, margin: '0 0 0 auto'}} />
            </div>
            <div className="info-section__left info-section__left--text" style={{width: '60%'}}>
              <h3 className="info-section__subtitle">Suggested Attire</h3>
              <p className="info-section__body">Semi-formal attire is requested, suits and ties for the gentlemen and dresses for the ladies. The ceremony will be held outdoors. Guests will need to walk approximately 500 feet on a dirt path from the bus drop off to the ceremony site, parts of this path are sloped. Assistance will be ready for those who need it. Ladies are recommended to wear shoes they can walk outdoors in or bring another pair for the ceremony. The weather may be unpredictable, ranging from sunny and warm to windy and chilly. Ladies are recommended to bring a shawl or jacket for warmth. A complementary coat check will be provided at the reception site to hold any extra items.</p>
            </div>
          </section>
        </div>
      </DocumentTitle>
    );
  }

});

module.exports = WeddingPage;