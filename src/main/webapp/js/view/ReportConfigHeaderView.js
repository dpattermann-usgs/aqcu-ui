/**
 */
AQCU.view.ReportConfigHeaderView = AQCU.view.BaseView.extend({
	templateName: 'report-config-header',
	
	/**
	* Used by Backbone Stickit to bind HTML input elements to Backbone models.
	* This will be built up in the initialize function.
	*/
	bindings: {},

	events: {
	},
	
	initialize: function() {
		AQCU.view.BaseView.prototype.initialize.apply(this, arguments);
			
		this.parentModel = this.options.parentModel;
		
		this.parentModel.bind("change:site", this.render, this);
	},
	
	/*override*/
	preRender: function() {
		this.context = {
			site : this.parentModel.get("site")
		};
	},
	
	afterRender: function () {		
	}
});
