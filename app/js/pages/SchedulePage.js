'use strict';

var React         = require('react/addons');
var Link          = require('react-router').Link;
var DocumentTitle = require('react-document-title');

var SchedulePage = React.createClass({

  propTypes: {
  },

  render: function() {
    return (
      <DocumentTitle title="Weekend Schedule | Kelly & Micah">
        <div>
          <section className="info-section">
            <div className="info-section__left info-section__left--text">
              <h3 className="info-section__subtitle">Ceremony Transportation</h3>
              <p className="info-section__body">
                Buses to the marriage ceremony site will pick up guests in front of the Sweetwater at a to be determined time.
                <br/>
                <br/>
                Guests are also welcome to make the beautiful drive themselves. It is approximately a 30 minute drive from downtown Mill Valley and there is plenty of parking at Trojan Point.
                <br/>
                <br/>
                Please check back here for more details as the wedding day approaches.
              </p>
            </div>
          </section>
        </div>
      </DocumentTitle>
    );
  }

});

module.exports = SchedulePage;