$(function(){

	 jQuery('#colorbarmap').on('change', function(){colorbarmap = document.getElementById('colorbarmap').value;
		if(colorbarmap === 'USDM' || colorbarmap === 'invUSDM'){

						// Remove all options
						jQuery('#colorbarsize > option').remove();
 
						// Add only one option
						jQuery('#colorbarsize').append('<option value="6">6</option>');

					//jQuery('#colorbarsize').val('6');
		} else {

						// Remove all options
						jQuery('#colorbarsize > option').remove();

						for (istring=3; istring<10; istring++) {
						  jQuery('#colorbarsize').append('<option value=' + istring + '>' + istring + '</option>');
						}
				}
	});


	jQuery('#minColorbar,#maxColorbar').keyup( function(){
				colorbarsize = parseInt(document.getElementById('colorbarsize').value);
				colorbarmap = document.getElementById('colorbarmap').value;

				minColorbar = document.getElementById('minColorbar').value
				maxColorbar = document.getElementById('maxColorbar').value

				myPalette = colorbrewer[colorbarmap][colorbarsize];
				palette_update=myPalette;
				document.getElementById('palette').innerHTML = palette_update;
				colorbarType = document.getElementById('colorbarType').value;

				if (colorbarType == 'discrete') {
					myScale = d3.scale.quantile().range(myPalette).domain([minColorbar, maxColorbar]);

				} else {
					myScale = d3.scale.linear().range(myPalette).domain([minColorbar, maxColorbar]);


								   }
				colorbar1 = Colorbar()
				   .thickness(30)
					.barlength(300)
					.orient("vertical")
					.scale(myScale)
				colorbarObject1 = d3.select("#colorbar1").call(colorbar1)
			  
		});
	   jQuery('#colorbarmap, #colorbarsize').on('change', function(){
				colorbarsize = parseInt(document.getElementById('colorbarsize').value);
				colorbarmap = document.getElementById('colorbarmap').value;

				minColorbar = document.getElementById('minColorbar').value;
				maxColorbar = document.getElementById('maxColorbar').value;

				myPalette=colorbrewer[colorbarmap][colorbarsize];
				colorbarType = document.getElementById('colorbarType').value;
				palette_update=myPalette;
				document.getElementById('palette').innerHTML = palette_update;
				if (colorbarType == 'discrete') {
					myScale = d3.scale.quantile().range(myPalette).domain([minColorbar, maxColorbar]);

				} else {
					myScale = d3.scale.linear().range(myPalette).domain([minColorbar, maxColorbar]);



				}
				colorbar1 = Colorbar()
				   .thickness(30)
					.barlength(300)
					.orient("vertical")
					.scale(myScale)
				colorbarObject1 = d3.select("#colorbar1").call(colorbar1)

		var palette = new String();
				palette=myPalette[0].replace(/#/g, '');
				for (var i=1;i<myPalette.length;i++){
						palette = palette+','+myPalette[i].replace(/#/g, '');
				}
	
				jQuery('#palette').val(palette);
		});


	   jQuery('#colorbarType').on('change', function () {
		   colorbarsize = parseInt(document.getElementById('colorbarsize').value);
		   colorbarmap = document.getElementById('colorbarmap').value;

		   minColorbar = document.getElementById('minColorbar').value;
		   maxColorbar = document.getElementById('maxColorbar').value;

		   myPalette = colorbrewer[colorbarmap][colorbarsize];
		   colorbarType = document.getElementById('colorbarType').value;
		   palette_update = myPalette;
		   document.getElementById('palette').innerHTML = palette_update;
  
		   if (colorbarType=='discrete') {
			   myScale = d3.scale.quantile().range(myPalette).domain([minColorbar, maxColorbar]);

		   } else {
			   myScale = d3.scale.linear().range(myPalette).domain([minColorbar, maxColorbar]);
			  
		   

		   }
			   colorbar1 = Colorbar()
			   .thickness(30)
			   .barlength(300)
			   .orient("vertical")
			   .scale(myScale)
			   
		   colorbarObject1 = d3.select("#colorbar1").call(colorbar1)

		   var palette = new String();
		   palette = myPalette[0].replace(/#/g, '');
		   for (var i = 1; i < myPalette.length; i++) {
			   palette = palette + ',' + myPalette[i].replace(/#/g, '');
		   }
 
		   jQuery('#palette').val(palette);
	   });



	/*--------------------------------------------*/
	/*       COLORBAR OPTIONS      		      */
	/*--------------------------------------------*/
	   jQuery('#datasource,#dataset,._start-picker,._end-picker').on('change', function(){
	   //strip product character off of variable
			var variable = jQuery('#dataset').val();
	  
	   var units = jQuery('.units').val();
	   var varUnits = ''; 
	   if (variable === 'NDVI' || variable === 'EVI') {

		   minColorbar = .0;
		   maxColorbar = 1;
		   colorbarmap = 'RdYlGn'
		   colorbarsize = 8
		   varUnits = 'mm'; 

	   } else if (variable == 'NDWI') {

		   minColorbar = .0;
		   maxColorbar = 1;
		   colorbarmap = 'RdYlBu'
		   colorbarsize = 8
		   varUnits = 'mm'; 
	   }
	   var colorbarLabel;
	   if (variable == 'NDVI') {
			colorbarLabel = 'NDVI';
			colorbarLabel = colorbarLabel;
		}else if(variable='EVI'){
			colorbarLabel = 'EVI';


		 }else {
			colorbarLabel = 'NDWI';
		}


		 if(varUnits!=''){
		colorbarLabel=colorbarLabel+' ('+varUnits+')';
			 }
		 document.getElementById('colorbarLabel').value =colorbarLabel;

		 document.getElementById('minColorbar').value =minColorbar;
		 document.getElementById('maxColorbar').value = maxColorbar;
		 document.getElementById('colorbarmap').value =colorbarmap;
		 document.getElementById('colorbarsize').value =colorbarsize;
		 document.getElementById('varUnits').value =varUnits;


			 colorbarsize = parseInt(document.getElementById('colorbarsize').value);
			 colorbarmap = document.getElementById('colorbarmap').value;

			 minColorbar = document.getElementById('minColorbar').value
			 maxColorbar = document.getElementById('maxColorbar').value

			 myPalette=colorbrewer[colorbarmap][colorbarsize];
			 palette_update = myPalette;
			 document.getElementById('palette').innerHTML = palette_update;
			 myScale = d3.scale.quantile().range(myPalette).domain([minColorbar,maxColorbar]);
			 colorbar1 = Colorbar()
				   .thickness(30)
					.barlength(300)
					.orient("vertical")
					.scale(myScale)
			 colorbarObject1 = d3.select("#colorbar1").call(colorbar1)

		 var palette = new String();
			 palette=myPalette[0].replace(/#/g, '');
			 for (var i=1;i<myPalette.length;i++){
					palette = palette+','+myPalette[i].replace(/#/g, '');
			}
			jQuery('#palette').val(palette);

	});
});
