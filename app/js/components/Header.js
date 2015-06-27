'use strict';

var React         = require('react/addons');
var Link          = require('react-router').Link;
var Header        = React.createClass({

  render: function() {
    return (
      <header className="header">
        <Link to="Home">
          <img className="header__logo" src="/images/logo.png" srcSet="/images/logo.svg 2x" alt="Kelly & Micah Logo" />
        </Link>
        <p className="header__date">March 19th, 2016</p>
        <nav className="header__nav">
          <ul className="header__nav__links">
            <li className="header__nav__links__li">
              <Link to="Wedding">The Wedding</Link>
            </li>
            <li className="header__nav__links__li">
              <Link to="Accomodations">Accomodations</Link>
            </li>
            <li className="header__nav__links__li">
              <Link to="MillValley">Mill Valley & Recommendations</Link>
            </li>
            <li className="header__nav__links__li">
              <Link to="Schedule">Weekend Schedule</Link>
            </li>
            <li className="header__nav__links__li">
              <Link to="Registry">Registry</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }

});

module.exports = Header;