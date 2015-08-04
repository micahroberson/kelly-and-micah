'use strict';

var React         = require('react/addons');
var Link          = require('react-router').Link;
var DocumentTitle = require('react-document-title');

var AccomodationsPage = React.createClass({

  propTypes: {
  },

  render: function() {
    return (
      <DocumentTitle title="Accomodations | Kelly & Micah">
        <div>
          <section className="info-section">
            <p className="info-section__body" style={{fontSize: 18, textAlign: 'center'}}>
              We recommend staying in Mill Valley, the town where the reception will be held.
            </p>
          </section>
          <section className="info-section">
            <div className="info-section__right info-section__right--image">
              <img className="info-section__image" src="/images/millvalleyinn-cropped.png" />
            </div>
            <div className="info-section__left info-section__left--text">
              <h3 className="info-section__subtitle">Mill Valley Inn</h3>
              <p className="info-section__body">
                This intimate hotel is tucked away sweetly in a little redwood grove at the foot of the majestic Mount Tamalpais. Located a few steps from downtown of Mill Valley and three blocks from the Sweetwater. When booking here, please call the hotel and tell them you are with the “Godfrey Roberson Wedding” and a 10% discount will be applied. Book quickly if you wish to stay here!
              </p>
            </div>
          </section>
          <section className="info-section">
            <div className="info-section__left info-section__left--image">
              <img className="info-section__image" src="/images/acquahotel-cropped.png" />
            </div>
            <div className="info-section__right info-section__right--text">
              <h3 className="info-section__subtitle">Acqua Hotel</h3>
              <p className="info-section__body">
                The Aqua Hotel in scenic Mill Valley melds stylish city sophistication with the natural beauty which surrounds it. It is located on the edge of Richardson Bay offers dazzling water views against the backdrop of Mt. Tamalpais. This hotel is 2.5 miles and 10 minutes away from the reception venue by car.  When booking here, also call the hotel and tell them you are with the “Godfrey Roberson Wedding” and a 10% discount will be applied to your stay.
              </p>
            </div>
          </section>
          <section className="info-section">
            <div className="info-section__right info-section__right--image">
              <img className="info-section__image" src="/images/holidayinnexpress-cropped.png" />
            </div>
            <div className="info-section__left info-section__left--text">
              <h3 className="info-section__subtitle">Holiday Inn Express</h3>
              <p className="info-section__body">
                The Holiday Inn Express Mill Valley offers a picturesque location near the base of Mount Tamalpais, overlooking majestic mountains, peaceful wetlands and bike paths. This hotel, at 2.8 miles away from the Sweetwater, is also 10 minutes by car. When calling to book, please tell them that you are with the Godfrey/Roberson Wedding to receive the prearranged group rate.
              </p>
            </div>
          </section>
        </div>
      </DocumentTitle>
    );
  }

});

module.exports = AccomodationsPage;