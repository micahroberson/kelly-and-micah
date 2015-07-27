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
            <p className="info-section__body">
              We recommend staying in Mill Valley, the town where the reception will be held. If booking at the Mill Valley Inn or the Acqua Hotel, please call to reserve and say your with the Roberson wedding for a 10% discount.
            </p>
          </section>
          <section className="info-section">
            <div className="info-section__right info-section__right--image">
              <img className="info-section__image" src="/images/millvalleyinn-cropped.png" />
            </div>
            <div className="info-section__left info-section__left--text">
              <h3 className="info-section__subtitle">Mill Valley Inn</h3>
              <p className="info-section__body">
                This intimate hotel is tucked away sweetly in a little redwood grove at the foot of the majestic Mount Tamalpais. Located a few steps from the bustling downtown of Mill Valley, visitors are always just moments away from enjoying the many delights our town has to offer, including numerous galleries, fine restaurants, boutiques, and theaters.
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
                Inspired by elements of sky and water, the Acqua Hotel in scenic Mill Valley, California, melds stylish city sophistication with the natural beauty which surrounds it. Our location on the edge of Richardson Bay offers dazzling water views against the backdrop of Mt. Tamalpais. Guest rooms are smart and simple with a Zen-like tranquility, inspiring views and all the amenities you need to make your stay perfect.
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
                The Holiday Inn Express offers a picturesque location near the base of Mount Tamalpais, overlooking majestic mountains, peaceful wetlands and bike paths, yet minutes from the vibrant city of San Francisco and all the city has to offer.
              </p>
            </div>
          </section>
        </div>
      </DocumentTitle>
    );
  }

});

module.exports = AccomodationsPage;