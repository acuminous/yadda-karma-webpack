'use strict';

describe('YaddaKarmaWebpackApp', function () {
  var React = require('react/addons');
  var YaddaKarmaWebpackApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    YaddaKarmaWebpackApp = require('components/YaddaKarmaWebpackApp.js');
    component = React.createElement(YaddaKarmaWebpackApp);
  });

  it('should create a new instance of YaddaKarmaWebpackApp', function () {
    expect(component).toBeDefined();
  });
});
