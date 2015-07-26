'use strict';

var React         = require('react');
var Link          = require('react-router').Link;
var DocumentTitle = require('react-document-title');
var ReactSwipe    = require('react-swipe');

var HomePage = React.createClass({

  propTypes: {
  },

  componentDidMount: function() {
    this.setImgHeight();
    window.addEventListener('resize', this.setImgHeight);
  },

  componentWillMount: function() {
    window.removeEventListener('resize', this.setImgHeight);
  },

  getInitialState: function() {
    return {img_height: 'auto'};
  },

  setImgHeight: function() {
    if(window.innerWidth < 600) {
      this.setState({img_height: window.innerHeight - 189});
    }
  },

  render: function() {
    return (
      <DocumentTitle title="Kelly & Micah">
        <section className="home-page" style={{height: this.state.img_height}}>
          <ReactSwipe auto={5000} continuous={true} speed={600}>
            <div className="image image--1" />
            <div className="image image--2" />
            <div className="image image--3" />
            <div className="image image--4" />
          </ReactSwipe>
        </section>
      </DocumentTitle>
    );
  }

});

module.exports = HomePage;