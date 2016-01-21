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
                Buses will pickup from the Sweetwater at a to be determined time.
                <br/>
                <br/>
                There is plenty of parking at the ceremony site if you choose to make the beautiful drive yourself.
                <br/>
                <br/>
                Please check back for more details as the wedding day approaches.
              </p>
            </div>
          </section>
        </div>
      </DocumentTitle>
    );
  }

});

module.exports = SchedulePage;