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
            <h3 className="info-section__title">Coming Soon!</h3>
            <p className="info-section__body">
            </p>
          </section>
        </div>
      </DocumentTitle>
    );
  }

});

module.exports = SchedulePage;