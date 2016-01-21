'use strict';

var React         = require('react/addons');
var Link          = require('react-router').Link;
var DocumentTitle = require('react-document-title');

var RegistryPage = React.createClass({

  propTypes: {
  },

  render: function() {
    return (
      <DocumentTitle title="Registry | Kelly & Micah">
        <div>
          <section className="info-section">
            <div className="info-section__center info-section__center--text">
              <p className="info-section__body" style={{minHeight: 0, marginBottom: 60}}>
                <a href="https://www.zola.com/registry/kellyandmicah" target="_blank">
                  <img src="/images/zola-logo.png" style={{maxWidth: 100, marginBottom: 20}} />
                </a>
                <br/>
                We've registered on Zola to allow our guests to easily donate to our future experiences and adventures.
              </p>
              <p className="info-section__body" style={{minHeight: 0, marginBottom: 60}}>
                <a href="https://secure.williams-sonoma.com/registry/r7gtwglkj6/registry-list.html" target="_blank">
                  <img src="/images/williams-sonoma-logo.jpg" style={{maxWidth: 400, marginBottom: 20}} />
                </a>
                <br/>
                At Williams-Sonoma, you can gift us household items to help us build a home.
              </p>
            </div>
          </section>
        </div>
      </DocumentTitle>
    );
  }

});

module.exports = RegistryPage;