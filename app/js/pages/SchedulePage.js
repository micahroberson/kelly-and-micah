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
              <h3 className="info-section__subtitle">Shuttles to the Ceremony</h3>
              <p className="info-section__body">
                Buses to the marriage ceremony site will pick up guests in front of the Mill Valley Inn at 3 o'clock in the afternoon. Buses will depart at 3:30 sharp. Please do not miss the shuttle!
                <br/>
                <br/>
                Guests are also welcome to make the beautiful drive themselves. It is approximately a 30 minute drive from downtown Mill Valley. There is some parking available at Trojan Point, parking along the road and an additional parking lot farther down the road past the site.
                <br/>
                <br/>
                Please note that there are no restrooms at the ceremony site.
                <br/>
                <br/>
                After the ceremony, buses will drop guests off to continue the night at the Sweetwater, a block and a half from the Mill Valley Inn.
                <br/>
                <br/>
                If you are parking in Mill Valley, please note that most spots are metered with a 2 hour maximum. To avoid these meters, try parking in the residential side streets just off the main downtown area.
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