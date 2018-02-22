
var Ghana = { lat: 7.9465, lng: -1.0232 };


var styles = {
	default: null,
	silver: [
		{
			elementType: 'geometry',
			stylers: [{ color: '#f5f5f5' }]
		},
		{
			elementType: 'labels.icon',
			stylers: [{ visibility: 'off' }]
		},
		{
			elementType: 'labels.text.fill',
			stylers: [{ color: '#616161' }]
		},
		{
			elementType: 'labels.text.stroke',
			stylers: [{ color: '#f5f5f5' }]
		},
		{
			featureType: 'administrative.land_parcel',
			elementType: 'labels.text.fill',
			stylers: [{ color: '#bdbdbd' }]
		},
		{
			featureType: 'poi',
			elementType: 'geometry',
			stylers: [{ color: '#eeeeee' }]
		},
		{
			featureType: 'poi',
			elementType: 'labels.text.fill',
			stylers: [{ color: '#757575' }]
		},
		{
			featureType: 'poi.park',
			elementType: 'geometry',
			stylers: [{ color: '#e5e5e5' }]
		},
		{
			featureType: 'poi.park',
			elementType: 'labels.text.fill',
			stylers: [{ color: '#9e9e9e' }]
		},
		{
			featureType: 'road',
			elementType: 'geometry',
			stylers: [{ color: '#ffffff' }]
		},
		{
			featureType: 'road.arterial',
			elementType: 'labels.text.fill',
			stylers: [{ color: '#757575' }]
		},
		{
			featureType: 'road.highway',
			elementType: 'geometry',
			stylers: [{ color: '#dadada' }]
		},
		{
			featureType: 'road.highway',
			elementType: 'labels.text.fill',
			stylers: [{ color: '#616161' }]
		},
		{
			featureType: 'road.local',
			elementType: 'labels.text.fill',
			stylers: [{ color: '#9e9e9e' }]
		},
		{
			featureType: 'transit.line',
			elementType: 'geometry',
			stylers: [{ color: '#e5e5e5' }]
		},
		{
			featureType: 'transit.station',
			elementType: 'geometry',
			stylers: [{ color: '#eeeeee' }]
		},
		{
			featureType: 'water',
			elementType: 'geometry',
			stylers: [{ color: '#c9c9c9' }]
		},
		{
			featureType: 'water',
			elementType: 'labels.text.fill',
			stylers: [{ color: '#9e9e9e' }]
		}
	],

	night: [
		{ elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
		{ elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
		{ elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
		{
			featureType: 'administrative.locality',
			elementType: 'labels.text.fill',
			stylers: [{ color: '#d59563' }]
		},
		{
			featureType: 'poi',
			elementType: 'labels.text.fill',
			stylers: [{ color: '#d59563' }]
		},
		{
			featureType: 'poi.park',
			elementType: 'geometry',
			stylers: [{ color: '#263c3f' }]
		},
		{
			featureType: 'road',
			elementType: 'labels.icons',
			stylers: [{ visibility: 'off' }]
		}
		,
		{
			featureType: 'poi.park',
			elementType: 'labels.text.fill',
			stylers: [{ color: '#6b9a76' }]
		},
		{
			featureType: 'road',
			elementType: 'geometry',
			stylers: [{ color: '#38414e' }]
		},
		{
			featureType: 'road',
			elementType: 'geometry.stroke',
			stylers: [{ color: '#212a37' }]
		},
		{
			featureType: 'road',
			elementType: 'labels.text.fill',
			stylers: [{ color: '#9ca5b3' }]
		},
		{
			featureType: 'road.highway',
			elementType: 'geometry',
			stylers: [{ color: '#746855' }]
		},
		{
			featureType: 'road.highway',
			elementType: 'geometry.stroke',
			stylers: [{ color: '#1f2835' }]
		},
		{
			featureType: 'road.highway',
			elementType: 'labels.text.fill',
			stylers: [{ color: '#f3d19c' }]
		},
		{
			featureType: 'transit',
			elementType: 'geometry',
			stylers: [{ color: '#2f3948' }]
		},
		{
			featureType: 'transit.station',
			elementType: 'labels.text.fill',
			stylers: [{ color: '#d59563' }]
		},
		{
			featureType: 'water',
			elementType: 'geometry',
			stylers: [{ color: '#17263c' }]
		},
		{
			featureType: 'water',
			elementType: 'labels.text.fill',
			stylers: [{ color: '#515c6d' }]
		},
		{
			featureType: 'water',
			elementType: 'labels.text.stroke',
			stylers: [{ color: '#17263c' }]
		}
	],

	retro: [
		{ elementType: 'geometry', stylers: [{ color: '#ebe3cd' }] },
		{ elementType: 'labels.text.fill', stylers: [{ color: '#523735' }] },
		{ elementType: 'labels.text.stroke', stylers: [{ color: '#f5f1e6' }] },
		{
			featureType: 'administrative',
			elementType: 'geometry.stroke',
			stylers: [{ color: '#c9b2a6' }]
		},
		{
			featureType: 'administrative.land_parcel',
			elementType: 'geometry.stroke',
			stylers: [{ color: '#dcd2be' }]
		},
		{
			featureType: 'administrative.land_parcel',
			elementType: 'labels.text.fill',
			stylers: [{ color: '#ae9e90' }]
		},
		{
			featureType: 'landscape.natural',
			elementType: 'geometry',
			stylers: [{ color: '#dfd2ae' }]
		},
		{
			featureType: 'poi',
			elementType: 'geometry',
			stylers: [{ color: '#dfd2ae' }]
		},
		{
			featureType: 'poi',
			elementType: 'labels.text.fill',
			stylers: [{ color: '#93817c' }]
		},
		{
			featureType: 'poi.park',
			elementType: 'geometry.fill',
			stylers: [{ color: '#a5b076' }]
		},
		{
			featureType: 'poi.park',
			elementType: 'labels.text.fill',
			stylers: [{ color: '#447530' }]
		},
		{
			featureType: 'road',
			elementType: 'geometry',
			stylers: [{ color: '#f5f1e6' }]
		},
		{
			featureType: 'road.arterial',
			elementType: 'geometry',
			stylers: [{ color: '#fdfcf8' }]
		},
		{
			featureType: 'road.highway',
			elementType: 'geometry',
			stylers: [{ color: '#f8c967' }]
		},
		{
			featureType: 'road.highway',
			elementType: 'geometry.stroke',
			stylers: [{ color: '#e9bc62' }]
		},
		{
			featureType: 'road.highway.controlled_access',
			elementType: 'geometry',
			stylers: [{ color: '#e98d58' }]
		},
		{
			featureType: 'road.highway.controlled_access',
			elementType: 'geometry.stroke',
			stylers: [{ color: '#db8555' }]
		},
		{
			featureType: 'road',
			elementType: 'labels.icons',
			stylers: [{ visibility: 'off' }]
		}
		,
		{
			featureType: 'transit.line',
			elementType: 'geometry',
			stylers: [{ color: '#dfd2ae' }]
		},
		{
			featureType: 'transit.line',
			elementType: 'labels.text.fill',
			stylers: [{ color: '#8f7d77' }]
		},
		{
			featureType: 'transit.line',
			elementType: 'labels.text.stroke',
			stylers: [{ color: '#ebe3cd' }]
		},
		{
			featureType: 'transit.station',
			elementType: 'geometry',
			stylers: [{ color: '#dfd2ae' }]
		},
		{
			featureType: 'water',
			elementType: 'geometry.fill',
			stylers: [{ color: '#b9d3c2' }]
		},
		{
			featureType: 'water',
			elementType: 'labels.text.fill',
			stylers: [{ color: '#92998d' }]
		}
	],

	hiding: [
		{
			featureType: 'poi.business',
			stylers: [{ visibility: 'off' }]
		},
		{
			featureType: 'transit',
			elementType: 'labels.icon',
			stylers: [{ visibility: 'off' }]
		}
	]
};





function CenterControl(controlDiv, map, center) {
	// We set up a variable for this since we're adding event listeners
	// later.
	var control = this;

	// Set the center property upon construction
	control.center_ = center;
	controlDiv.style.clear = 'both';

	// Set CSS for the control border
	var goCenterUI = document.createElement('div');
	goCenterUI.id = 'goCenterUI';
	goCenterUI.title = 'Click to recenter the map';
	controlDiv.appendChild(goCenterUI);

	// Set CSS for the control interior
	var goCenterText = document.createElement('div');
	goCenterText.id = 'goCenterText';
	goCenterText.innerHTML = 'Center Map';
	goCenterUI.appendChild(goCenterText);

	// Set CSS for the setCenter control border
	var setCenterUI = document.createElement('div');
	setCenterUI.id = 'setCenterUI';
	setCenterUI.title = 'Click to change the center of the map';
	controlDiv.appendChild(setCenterUI);

	// Set CSS for the control interior
	var setCenterText = document.createElement('div');
	setCenterText.id = 'setCenterText';
	setCenterText.innerHTML = 'Set Center';
	setCenterUI.appendChild(setCenterText);

	// Set up the click event listener for 'Center Map': Set the center of
	// the map
	// to the current center of the control.
	goCenterUI.addEventListener('click', function () {
		var currentCenter = control.getCenter();
		map.setCenter(currentCenter);
	});

	// Set up the click event listener for 'Set Center': Set the center of
	// the control to the current center of the map.
	setCenterUI.addEventListener('click', function () {
		var newCenter = map.getCenter();
		control.setCenter(newCenter);
	});
}

/**
 * Define a property to hold the center state.
 * @private
 */
CenterControl.prototype.center_ = null;

/**
 * Gets the map center.
 * @return {?google.maps.LatLng}
 */
CenterControl.prototype.getCenter = function () {
	return this.center_;
};

/**
 * Sets the map center.
 * @param {?google.maps.LatLng} center
 */
CenterControl.prototype.setCenter = function (center) {
	this.center_ = center;
};





styleRetro = new google.maps.StyledMapType(styles.retro, { name: 'Retro' })
styleSilver = new google.maps.StyledMapType(styles.silver, { name: 'Silver' })
styleNight = new google.maps.StyledMapType(styles.night, { name: 'Darknight' })


var polyOptions = {
	strokeWeight: 0,
	fillOpacity: 0.45,
	editable: true,
	fillColor: '#FF1493'
};
var mapOptions = {
	center: Ghana,
	zoom: 7,
	maxZoom: 20,
	streetViewControl: false,
	mapTypeControl: true,
	navigationControl: true,
	mapTypeId: google.maps.MapTypeId.TERRAIN,
	mapTypeControlOptions: {
		style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
		position: google.maps.ControlPosition.TOP_RIGHT,
		mapTypeIds: [
			google.maps.MapTypeId.HYBRID,
			google.maps.MapTypeId.ROADMAP,
			google.maps.MapTypeId.SATELLITE,
			google.maps.MapTypeId.TERRAIN,
			'Retro',
			'Silver',
			'Darknight',
			'simpleAtlasStyle',
			'whiteWaterStyle',
		]
	},
	clickable: true,
	backgroundColor: '#FFFFFF',
	disableDefaultUI: false,
	zoomControl: true,
	zoomControlOptions: {
		style: google.maps.ZoomControlStyle.LARGE,
		position: google.maps.ControlPosition.TOP_RIGHT
	},
	panControl: false,
	panControlOptions: {
		position: google.maps.ControlPosition.TOP_RIGHT
	},
};


var map = new google.maps.Map(document.getElementById('map'), mapOptions);





var drawingManager = new google.maps.drawing.DrawingManager({
	drawingMode: google.maps.drawing.OverlayType.POLYGON,
	drawingControl: true,
	drawingControlOptions: {
		position: google.maps.ControlPosition.TOP_LEFT,
		drawingModes: ['polygon']
	},
	circleOptions: {
		strokeWeight: 0,
		fillOpacity: 0.45,
		editable: true,
		fillColor: '#FF1493'
	},
	polygonOptions: polyOptions
	,
	rectangleOptions: {
		strokeWeight: 0,
		fillOpacity: 0.45,
		editable: true,
		fillColor: '#FF1493'
	}
});
drawingManager.setMap(map);
var poly = null;

var rectangle = null;

google.maps.event.addListener(drawingManager, 'rectanglecomplete', function (event) {
	rectangle = event.overlay;
	drawingManager.setOptions({ drawingMode: null });

	document.getElementById("rectangle").innerHTML = getCoordinates(rectangle)
});



getPolygonCoordinates = function () {
	if (this.currentPolygon) {
		var points = this.currentPolygon.getPath().getArray();
		var twoDimensionalArray = points.map(function (point) {
			return [point.lng(), point.lat()];
		});
		return twoDimensionalArray;
	} else {
		return null;
	}
};

var twoDimensionalArray;

var shapepoly;
google.maps.event.addListener(drawingManager, 'polygoncomplete', function (polygon) {
	twoDimensionalArray = null;
	shapepoly = null;
	drawingManager.setDrawingMode(null);
	var arr = [];

	var points = polygon.getPath().getArray();
	shapepoly = polygon;
	twoDimensionalArray = points.map(function (point) {
		return [point.lng(), point.lat()];
	});

	document.getElementById("rectangle").innerHTML = JSON.stringify(twoDimensionalArray);
	poly = twoDimensionalArray;
	getpoly = twoDimensionalArray;

	document.getElementById("poly").innerHTML = points;


});

var shapecircle;


function getCoordinates(rect) {
	var bounds = rect.getBounds();
	return [
		bounds.getSouthWest().lng(),
		bounds.getSouthWest().lat(),
		bounds.getNorthEast().lng(),
		bounds.getNorthEast().lat(),
	].join(',');
}

google.maps.event.addListener(drawingManager, 'circlecomplete', function (circle) {
	twoDimensionalArray = null;
	shapecircle = null;
	drawingManager.setDrawingMode(null);
	var arr = [];
	var points = getCoordinates(circle);
	arr.push(points)
	alert(arr.length);
	twoDimensionalArray = arr.map(function (point) {
		return [point];
	});
	shapecircle = circle;


	alert(twoDimensionalArray);




});


clearPolygon = function (currentPolygon) {
	currentPolygon.setMap(null);
	currentPolygon = null;


};



clearCircle = function (currentCircle) {
	currentCircle.setMap(null);
	currentCircle = null;


};


map.mapTypes.set('Retro', styleRetro);
map.mapTypes.set('Silver', styleSilver);
map.mapTypes.set('Darknight', styleNight);

// Create the DIV to hold the control and call the CenterControl()
// constructor
// passing in this DIV.
var centerControlDiv = document.createElement('div');
var centerControl = new CenterControl(centerControlDiv, map, Ghana);

centerControlDiv.index = 1;
centerControlDiv.style['padding-top'] = '10px';
map.controls[google.maps.ControlPosition.BOTTOM_LEFT].push(centerControlDiv);









//Adding event listener to from element


// Returns a string of the bounds of the given rectangle
// (xMin,yMin,xMax,yMax).
function getCoordinates(rect) {
	var bounds = rect.getBounds();
	return [
		bounds.getSouthWest().lng(),
		bounds.getSouthWest().lat(),
		bounds.getNorthEast().lng(),
		bounds.getNorthEast().lat(),
	].join(',');
}

function buildGetTileUrl(mapid, token) {
	return function (tile, zoom) {
		var baseUrl = 'https://earthengine.googleapis.com/map';
		var url = [baseUrl, mapid, zoom, tile.x, tile.y].join('/');
		url += '?token=' + token;
		return url;
	};
}



function updateMapTileOptions(MAPID, TOKEN) {

	var eeMapOptions = {
		getTileUrl: function (tile, zoom) {
			//cross origin is for putting in to get the save pdf map working
			//var url = ['https://crossorigin.me/https://earthengine.googleapis.com/map',
			var url = ['https://earthengine.googleapis.com/map',
				MAPID, zoom, tile.x, tile.y
			].join("/");
			url += '?token=' + TOKEN;
			return url;
		},
		tileSize: new google.maps.Size(256, 256)
	};
	return eeMapOptions;
};



function getCoordinates(rect) {
	var bounds = rect.getBounds();
	return [
		bounds.getSouthWest().lng(),
		bounds.getSouthWest().lat(),
		bounds.getNorthEast().lng(),
		bounds.getNorthEast().lat(),
	].join(',');
}




/*********************************
*    OPACITY SLIDER BUTTON            *
*********************************/
//set style of tooltip window for opacity slider
var opacity_tooltip = $('<div id="tooltip" />').css({
	position: 'relative',
	top: 0,
	left: -70,
	color: 'white',
	background: 'black',
	display: 'block',
	padding: '10',
	opacity: 1,
	width: '60',
	range: true,
	fontSize: '11px',

}).hide();

//set initial tooltip
opacity_tooltip.text(Math.round($('#opacity').val() * 100) + "% Opacity");

var mapType;

function put_sliderOnMap() {
	//needs to be done after window.mapType is definitely not undefined
	$("#slider").slider({
		orientation: "vertical",
		range: false,
		max: 1.00,
		min: 0.00,
		step: .05,
		animate: true,
		value: $('#opacity').val(),
		slide: function (event, ui) {
			set_opacity(ui.value);
		},
		change: function (event, ui) { }
	}).find(".ui-slider-handle").append(opacity_tooltip).hover(function () {
		opacity_tooltip.show()
	}, function () {
		opacity_tooltip.hide()
	});
	set_opacity(parseFloat($('#opacity').val()));
};

function action_downloadMap(downloadURL) {

	if (downloadURL != null) {

		$("#downloadURL").val(downloadURL);

		$("#downloadURLLink").attr("href", downloadURL);
		$("#downloadURLModal").click();
		$("#downloadURLModal").modal('show');


	} else {
		if (submitType == 'shareLink') {
			$('#generalErrorMessage').html('Your URL is not valid:<br> ' + error_message.form_error);
			$('#generalCauseMessage').html('<li>Your URL address may be out-dated or incorrect.</li>');
			$('#generalResolutionMessage').html('<li>You might generate your URL again from the current version of Climate Engine.</li>');
			$('#generalErrorModal').modal('show');
		} else {
			$('#downloadErrorMessage').html(error_message.form_error);
			$('#downloadErrorModal').modal('show');
		};
	};
};



function set_opacity(opacity) {
	opacity_tooltip.text(Math.round(opacity * 100) + "% Opacity");
	mapType.setOpacity(opacity);
	if (opacity === 1) {
		opacity = 1.0;
		$('#opacity').val("1.0");
	} else if (opacity === 0) {
		opacity = 0.0;
		$('#opacity').val("0.0");
	} else {
		$('#opacity').val(opacity);
	};
};





$(document).on('submit', '#user_download', function (e) {
	e.preventDefault();
	// document.getElementById("overlay").style.display = "block";

	// waitingDialog.show('Processing Request', 'Computing  may take a few minutes.', { dialogSize: 'sm', progressType: 'warning' });
	// waitingDialog.show('Processing Request', 'Computing  may take a few minutes.', { dialogSize: 'sm', progressType: 'warning' }); setTimeout(function () { waitingDialog.hide(); }, 2000);

	waitingDialog.show('Downloading Data', { dialogSize: 'sm', progressType: 'warning' });

	setTimeout(function () {
		waitingDialog.hide();
	}, 5000);
	$.ajax({
		type: 'POST',
		url: '/download_data',
		data: {
			dataset: $('#dataset').val(),
			datasource: $('#datasource').val(),
			start: $('#start').val().replace(/\s+/g, ''),
			end: $('#end').val().trim(),
			cloudscore: $("#cloudscore").val(),
			region: JSON.stringify(twoDimensionalArray),
			scale: document.getElementById('scale').value,
			name: document.getElementById('downloadFilename').value,
			download: document.getElementById("rectangle").innerHTML,
			csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()

		},
		success: function () {

			marker.setMap(null);
			$.ajax({
				method: "GET",
				url: '/download_data',
				dataType: 'json',
				success: function (data) {

					if (shapecircle != null) {

						clearCircle(shapecircle);

					} else if (shapepoly != null) {
						clearPolygon(shapepoly);
					}

					twoDimensionalArray = null;
					//set url
					var url = data.download_data;
					action_downloadMap(url);










					waitingDialog.hide();
				},
				error: function () {
					alert("Not Good");
				}


			})

		},
		error: function (data) {
			console.log(data.startdate)
		}

	});

});






$(document).on('submit', '#user_form', function (e) {
	e.preventDefault();
	// document.getElementById("overlay").style.display = "block";

	// waitingDialog.show('Processing Request', 'Computing  may take a few minutes.', { dialogSize: 'sm', progressType: 'warning' });
	// waitingDialog.show('Processing Request', 'Computing  may take a few minutes.', { dialogSize: 'sm', progressType: 'warning' }); setTimeout(function () { waitingDialog.hide(); }, 2000);

	waitingDialog.show('Processing Request', { dialogSize: 'sm', progressType: 'warning' });

	setTimeout(function () {
		waitingDialog.hide();
	}, 5000);
	$.ajax({
		type: 'POST',
		url: '/calc_data',
		data: {
			dataset: $('#dataset').val(),
			datasource: $('#datasource').val(),
			start: $('#start').val().replace(/\s+/g, ''),
			end: $('#end').val().trim(),
			cloudscore: $("#cloudscore").val(),
			region: JSON.stringify(twoDimensionalArray),
			scale: null,
			name: 'something',
			download: document.getElementById("rectangle").innerHTML,
			csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()

		},
		success: function () {


			marker.setMap(null);
			$.ajax({
				method: "GET",
				url: '/calc_data',
				dataType: 'json',
				success: function (data) {
					map.overlayMapTypes.clear();
					if (shapecircle != null) {

						clearCircle(shapecircle);

					} else if (shapepoly != null) {
						clearPolygon(shapepoly);
					}
					mapType = new google.maps.ImageMapType(updateMapTileOptions(data.mapid, data.token));
					twoDimensionalArray = null;



					// Add the EE layer to the map.

					map.overlayMapTypes.push(mapType);
					document.getElementById("date_info").innerHTML = data.collection_info + "  " + data.date_info
					document.getElementById("notes").innerHTML = data.notes




					//adjust transparency to that set (EE gives 100% back)
					// mapType.setOpacity(parseFloat($('#opacity').val()));

					//replace map layer of layer=0, else they could accumulate
					map.overlayMapTypes.setAt(0, mapType);

					//Add opacity slider on map
					put_sliderOnMap();
					map.controls[google.maps.ControlPosition.RIGHT_TOP].push(opacity_slider);



					// document.getElementById("overlay").style.display = "none";

					//Set colorbar
					if ($('#colorbarLabelOnMap')) {
						$('#colorbarLabelOnMap').html($('#colorbarLabel').val());
					}
					drawMapColorbar();
					$('#colorbarRegion').show();

					waitingDialog.hide();
				},
				error: function () {
					alert("Not Good");
				}


			})

		},
		error: function (data) {
			console.log(data.startdate)
		}

	});

});




$(document).on('submit', '#update_form', function (e) {
	e.preventDefault();
	// document.getElementById("overlay").style.display = "block";

	// waitingDialog.show('Processing Request', 'Computing  may take a few minutes.', { dialogSize: 'sm', progressType: 'warning' });
	// waitingDialog.show('Processing Request', 'Computing  may take a few minutes.', { dialogSize: 'sm', progressType: 'warning' }); setTimeout(function () { waitingDialog.hide(); }, 2000);

	waitingDialog.show('Processing Request', { dialogSize: 'sm', progressType: 'warning' });

	setTimeout(function () {
		waitingDialog.hide();
	}, 5000);
	$.ajax({
		type: 'POST',
		url: '/update_palette',
		data: {
			dataset: $('#dataset').val(),
			datasource: $('#datasource').val(),
			start: $('#start').val().replace(/\s+/g, ''),
			end: $('#end').val().trim(),
			cloudscore: $("#cloudscore").val(),
			region: JSON.stringify(twoDimensionalArray),
			palette: JSON.stringify(document.getElementById('palette').innerHTML),
			csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()

		},
		success: function () {
			marker.setMap(null);
			$.ajax({
				method: "GET",
				url: '/update_palette',
				dataType: 'json',
				success: function (data) {
					map.overlayMapTypes.clear();
					if (shapecircle != null) {

						clearCircle(shapecircle);

					} else if (shapepoly != null) {
						clearPolygon(shapepoly);
					}
					mapType = new google.maps.ImageMapType(updateMapTileOptions(data.mapid, data.token));
					twoDimensionalArray = null;
					// Add the EE layer to the map.

					map.overlayMapTypes.push(mapType);
					document.getElementById("date_info").innerHTML = data.collection_info + "  " + data.date_info
					document.getElementById("notes").innerHTML = data.notes




					//adjust transparency to that set (EE gives 100% back)
					// mapType.setOpacity(parseFloat($('#opacity').val()));

					//replace map layer of layer=0, else they could accumulate
					map.overlayMapTypes.setAt(0, mapType);

					//Add opacity slider on map
					put_sliderOnMap();
					map.controls[google.maps.ControlPosition.RIGHT_TOP].push(opacity_slider);



					// document.getElementById("overlay").style.display = "none";

					//Set colorbar
					if ($('#colorbarLabelOnMap')) {
						$('#colorbarLabelOnMap').html($('#colorbarLabel').val());
					}
					drawMapColorbar();
					$('#colorbarRegion').show();

					waitingDialog.hide();
				},
				error: function () {
					alert("Not Good");
				}


			})

		},
		error: function (data) {
			console.log(data.startdate)
		}

	});

});

var myLatlng = { lat: 6.678162, lng: -1.571227 };



//decide marker when clicked
var marker = new google.maps.Marker({
	position: myLatlng,
	draggable: true,
	animation: google.maps.Animation.DROP,
	title: "Drag Me"
});

var marker_point;
google.maps.event.addListener(marker, 'dragend', function (evt) {

	marker_point = [parseFloat(evt.latLng.lng().toFixed(6)), parseFloat(evt.latLng.lat().toFixed(6))];
	console.log(marker_point);
});


$('#marker_decide').click(function () {


	// To add the marker to the map, call setMap();
	marker.setMap(map);



	$('#chart_submit').prop('disabled', false);


})


//chart

$(document).on('submit', '#chart_form', function (e) {
	e.preventDefault();
	// document.getElementById("overlay").style.display = "block";

	// waitingDialog.show('Processing Request', 'Computing  may take a few minutes.', { dialogSize: 'sm', progressType: 'warning' });
	// waitingDialog.show('Processing Request', 'Computing  may take a few minutes.', { dialogSize: 'sm', progressType: 'warning' }); setTimeout(function () { waitingDialog.hide(); }, 2000);

	waitingDialog.show('Processing Request', { dialogSize: 'sm', progressType: 'warning' });

	setTimeout(function () {
		waitingDialog.hide();
	}, 8000);
	$.ajax({
		type: 'POST',
		url: '/chart_data',
		data: {
			dataset: $('#dataset').val(),
			datasource: $('#datasource').val(),
			start: $('#start').val().replace(/\s+/g, ''),
			end: $('#end').val().trim(),
			cloudscore: $("#cloudscore").val(),
			region: JSON.stringify(twoDimensionalArray),
			palette: JSON.stringify(document.getElementById('palette').innerHTML),
			chart_point: JSON.stringify(marker_point),
			csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()

		},
		success: function () {



			$('#graphDropdown').click();
			$.ajax({
				method: "GET",
				url: '/chart_data',
				dataType: 'json',
				success: function (data) {

					graph = data.timeSeriesData[0]['Data']

					time_d = [];
					data_f = [];
					for (var i = 0; i < graph.length; i++) {

						time_d.push(graph[i][0]);
						data_f.push(graph[i][1])
					}
					// create chart here

					var dataf = [
						{
							x: time_d,
							y: data_f,
							type: 'scatter',
							marker: {
								color: 'rgb(255, 0, 0)'
							}
							,
							name: 'Time Series'

						}
					];
					var layout = {
						title: data.notes_time,
						xaxis: {
							title: 'Date',
							titlefont: {
								family: 'Courier New, monospace',
								size: 18,
								color: '#7f7f7f'
							}
						},
						yaxis: {
							title: data.product_time + ' Values',
							titlefont: {
								family: 'Courier New, monospace',
								size: 18,
								color: '#7f7f7f'
							}
						}
					};
					Plotly.newPlot('myDiv', dataf, layout);




					waitingDialog.hide();
				},
				error: function () {
					alert("Not Good");
				}


			})

		},
		error: function (data) {
			console.log(data.startdate)
		}

	});

});