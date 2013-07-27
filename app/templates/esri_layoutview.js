/* global define, Backbone, _ */
define([
		'text!./templates/LayoutViewTemplate.html',
		'esri/map'
],

function(viewTemplate, Map) {
	var LayoutView = Backbone.View.extend({

		initialize: function() {
			this.render();
		},

		render: function() {
			var template = _.template(viewTemplate)();
			this.$el.html(template);

			new Map('map', {
				center: [-77.042970, 38.919657],
				zoom: 16,
				basemap: 'topo'
			});

			return this;
		}

	});
	return LayoutView;
});