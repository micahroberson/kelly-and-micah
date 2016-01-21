'use strict';

var React         = require('react/addons');
var Link          = require('react-router').Link;
var DocumentTitle = require('react-document-title');

var BridalPartyPage = React.createClass({

  propTypes: {
  },

  render: function() {
    return (
      <DocumentTitle title="Meet The Bridal Party | Kelly & Micah">
        <div className="column-layout">
          <section className="column column--left">
            <h2 className="column__title">The Girls</h2>
            <div className="photo">
              <img src="https://placem.at/people?w=150&h=150&random=1" />
              <div className="photo__details">
                <span className="photo__details__name">Ryan Jacobs</span>
                <span className="photo__details__title">Best Man</span>
              </div>
            </div>
            <div className="photo">
              <img src="https://placem.at/people?w=150&h=150&random=1" />
              <div className="photo__details">
                <span className="photo__details__name">Ryan Jacobs</span>
                <span className="photo__details__title">Best Man</span>
              </div>
            </div>
            <br/>
            <div className="photo">
              <img src="https://placem.at/people?w=150&h=150&random=1" />
              <div className="photo__details">
                <span className="photo__details__name">Ryan Jacobs</span>
                <span className="photo__details__title">Best Man</span>
              </div>
            </div>
            <div className="photo">
              <img src="https://placem.at/people?w=150&h=150&random=1" />
              <div className="photo__details">
                <span className="photo__details__name">Ryan Jacobs</span>
                <span className="photo__details__title">Best Man</span>
              </div>
            </div>
            <div className="photo">
              <img src="https://placem.at/people?w=150&h=150&random=1" />
              <div className="photo__details">
                <span className="photo__details__name">Ryan Jacobs</span>
                <span className="photo__details__title">Best Man</span>
              </div>
            </div>
          </section>
          <section className="column column--right">
            <h2 className="column__title">The Guys</h2>
            <div className="photo">
              <img src="https://placem.at/people?w=150&h=150&random=1" />
              <div className="photo__details">
                <span className="photo__details__name">Ryan Jacobs</span>
                <span className="photo__details__title">Best Man</span>
              </div>
            </div>
            <div className="photo">
              <img src="https://placem.at/people?w=150&h=150&random=1" />
              <div className="photo__details">
                <span className="photo__details__name">Ryan Jacobs</span>
                <span className="photo__details__title">Best Man</span>
              </div>
            </div>
            <br/>
            <div className="photo">
              <img src="https://placem.at/people?w=150&h=150&random=1" />
              <div className="photo__details">
                <span className="photo__details__name">Ryan Jacobs</span>
                <span className="photo__details__title">Best Man</span>
              </div>
            </div>
            <div className="photo">
              <img src="https://placem.at/people?w=150&h=150&random=1" />
              <div className="photo__details">
                <span className="photo__details__name">Ryan Jacobs</span>
                <span className="photo__details__title">Best Man</span>
              </div>
            </div>
          </section>
        </div>
      </DocumentTitle>
    );
  }

});

module.exports = BridalPartyPage;