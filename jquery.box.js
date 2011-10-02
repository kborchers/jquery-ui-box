(function($) {
var widgets = [];
	
		$.each( $.ui, function( name, widget ) {
			if ( widget.prototype && widget.prototype._create ) {
				widgets.push( name );
			}
		});

	$.fn.box = function() {
		
		return this.each( function() {
			var widget = widgets[ Math.floor( Math.random() * widgets.length ) ];
			console.log( "created", widget );
			$( this )[ widget ]();
		});
	};

})(jQuery);