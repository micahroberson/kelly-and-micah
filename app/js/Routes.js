'use strict';

var React         = require('react/addons');
var Router        = require('react-router');
var Route         = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute  = Router.DefaultRoute;

var App           = require('./App');
var HomePage      = require('./pages/HomePage');
var WeddingPage   = require('./pages/WeddingPage');
var BridalPartyPage   = require('./pages/BridalPartyPage');
var AccomodationsPage   = require('./pages/AccomodationsPage');
var RecommendationsPage   = require('./pages/RecommendationsPage');
var RegistryPage   = require('./pages/RegistryPage');
var SchedulePage   = require('./pages/SchedulePage');
var NotFoundPage  = require('./pages/NotFoundPage');

// <Route name='BridalParty' path='/bridal-party' handler={BridalPartyPage} />

module.exports = (
  <Route handler={App} path='/'>

    <DefaultRoute handler={HomePage} />

    <Route name='Home' path='/' handler={HomePage} />
    <Route name='Wedding' path='/wedding' handler={WeddingPage} />
    <Route name='Accomodations' path='/accomodations' handler={AccomodationsPage} />
    <Route name='MillValley' path='/mill-valley-recommendations' handler={RecommendationsPage} />
    <Route name='Schedule' path='/schedule' handler={SchedulePage} />
    <Route name='Registry' path='/registry' handler={RegistryPage} />

    <NotFoundRoute handler={NotFoundPage} />

  </Route>
);