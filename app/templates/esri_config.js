/*global define*/
define([
		'esri/InfoTemplate'
], function(InfoTemplate) {
	'use strict';
	return {
		// Url to your proxy page, must be on same machine hosting you app
		proxy: {
			url: 'proxy/proxy.php',
			alwaysUseProxy: false
		},
		// Url to your geometry server
		geometryService: {
			url: 'http://tasks.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer'
		}
	};
});