Woah there!
---
This is a work in progress and probably is not ready for primetime production applications.
What is it?
---
An Esri JSAPI App generator for Yeoman. It will scaffold a barebones Application with Esri's [ArcGIS API for JavaScript](https://developers.arcgis.com/en/javascript/jsapi).
Once installed, you'll have the power of 
[Yeoman](http://yeoman.io/) / 
[Grunt](http://gruntjs.com/) / 
[Bower](http://bower.io/) and all their developer-loving benefits.
In addition to the Esri API, other client-side goodies you get are:
* [Dojo](http://dojotoolkit.org/) /
[Dijit](http://dojotoolkit.org/reference-guide/1.8/dijit/) / 
[Dojox](http://dojotoolkit.org/reference-guide/1.8/dojox/) /
[dgrid](http://github.com/SitePen/dgrid)
(all dependencies of the Esri API)
* [Twitter Bootstrap](http://twitter.github.com/bootstrap) (and its dependency [jquery](http://jquery.com/))
* [Backbonejs](https://github.com/jashkenas/backbone) (along with [Underscorejs](https://github.com/jashkenas/underscore))
* [Requirejs](http://requirejs.org/)
   
For a complete list, see [bower.json](https://github.com/jpeterson/generator-esri/blob/master/app/templates/_bower.json)
## Getting started
- Make sure you have [yo](https://github.com/yeoman/yo) installed:
    `npm install -g yo`
- Until this generator is published to npm, you'll have to install it locally by running the following command from the root of the generator: `npm link`
- Make a new directory for your app, then run: `yo esri`
