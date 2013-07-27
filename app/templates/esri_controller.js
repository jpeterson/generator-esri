/* global define */
define([
		'app/config',
		'app/views/LayoutView',
		'esri/config',
		'esri/map',
		'esri/tasks/GeometryService',
		'jquery'
],

function(config, LayoutView, esriConfig, Map, GeometryService, $) {
	return {
		startup: function() {
			this.initConfig();
			this.initLayout();

			console.log('startup completed.');
		},

		initConfig: function() {
			esriConfig.defaults.io.proxyUrl = config.proxy.url;
			esriConfig.defaults.io.alwaysUseProxy = config.proxy.alwaysUseProxy;
			esriConfig.defaults.geometryService = new GeometryService(config.geometryService.url);
		},

		initLayout: function() {
			new LayoutView({
				el: $('body')
			});
		}
	};
});