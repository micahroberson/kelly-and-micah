'use strict';

var React         = require('react/addons');
var Link          = require('react-router').Link;
var DocumentTitle = require('react-document-title');

var SchedulePage = React.createClass({

  propTypes: {
  },

  render: function() {
    return (
      <DocumentTitle title="Weekend Schedule">
        <div>
          <section className="info-section">
            <div className="info-section__left info-section__left--text">
              <h3 className="info-section__subtitle">Coming Soon!</h3>
              <p className="info-section__body">
                Please check back as the big day approaches or subscribe to our mailing list for email notifications of when key information is added to this site!
              </p>
            </div>
          </section>
        </div>
      </DocumentTitle>
    );
  }

});

module.exports = SchedulePage;