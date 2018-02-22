function setColorbarTicks() {

    colorbarmap = $('#colorbarmap').val();
  var  calculation ='go' ;
    variable = $('#variable').val();

    if ((colorbarmap == 'invUSDM' || colorbarmap == 'USDM') & calculation == 'percentile') {
        var colorbarTicks = colorbarTicks_USDM1_default;
    } else if ((colorbarmap == 'invUSDMwWet' || colorbarmap == 'USDMwWet') & calculation == 'percentile') {
        var colorbarTicks = colorbarTicks_USDM2_default;
    } else if (calculation == 'normprob') {
        var normList = Object.keys(window.variables_normStat);
        if (variable == 'pdsi') {
            var colorbarTicks = colorbarTicks_normPDSI_default;
        } else if (normList.indexOf(variable) != -1) {
            var colorbarTicks = colorbarTicks_normCalc_default;
        };
    } else if (calculation == 'go') {
        var colorbarTicks = colorbarTicks_anompercentof_default;
    } else {
        var colorbarTicks = '';
    };
    $("#colorbarTicks").val(colorbarTicks);
    getColorbarScale();
    redrawSampleColorbar();
}

function getColorbarScale() {

    colorbarsize = parseInt(document.getElementById('colorbarsize').value);
    colorbarmap = document.getElementById('colorbarmap').value;
    colorbarType = document.getElementById('colorbarType').value;
    minColorbar = document.getElementById('minColorbar').value;
    maxColorbar = document.getElementById('maxColorbar').value;
    calculation = document.getElementById('dataset').value;

    colorbarTicks = document.getElementById('colorbarTicks').value;
    colorbarTicksNumbers = [];
    colorbarTicksString = colorbarTicks.split(',');
    for (i = 0; i < colorbarTicksString.length; i++) {
        colorbarTicksNumbers[i] = colorbarTicks.split(',')[i];
    };
    colorbarTicks = colorbarTicksNumbers;

    myPalette = colorbrewer[colorbarmap][colorbarsize];
    //was a consistency check.. this is the palette used by GAE python code
    //var palette=jQuery('#palette').val();
    //palette_list = palette.split(",");
    //var myPalette = new Array();
    //for (var i = 0; i < palette_list.length; i++) {
    //        myPalette[i]="#"+palette_list[i];
    // }

    //make the palette for GAE python call
    var palette = new String();
    palette = myPalette[0].replace(/#/g, '');
    for (var i = 1; i < myPalette.length; i++) {
        palette = palette + ',' + myPalette[i].replace(/#/g, '');
    }
    jQuery('#palette').val(palette);

    if ((colorbarmap == 'invUSDM' || colorbarmap == 'USDM' || colorbarmap == 'invUSDMwWet' || colorbarmap == 'USDMwWet')) {
        myScale = d3.scale.quantile().range(myPalette).domain(colorbarTicks);
        myScale.type = 'QUANTILE';
        $(".colorbarMinMaxChoices").hide();
        $("#colorbarType").val('discrete');
        if (colorbarmap == 'invUSDMwWet' || colorbarmap == 'USDMwWet') {
            $(".colorbarType").show();
        } else {
            $(".colorbarType").hide();
        };
        $(".colorbarTicks").show();
        $(".colorbarsize").hide();
    } else if (calculation == 'NDVI') {
        var variable = $('#variable').val();
        myScale = d3.scale.quantize().range(myPalette).domain(d3.range(0, colorbarsize + 1));
        myScale.type = 'QUANTIZE';
        var normList = Object.keys(window.variables_normStat);
        myScale.ticks = colorbarTicks;
        $("#colorbarType").val('discrete');
        $(".colorbarType").hide();
        $(".colorbarTicks").show();
        $("#colorbarsize").val('11');
        $(".colorbarsize").hide();
        $(".colorbarMinMaxChoices").hide();
    } else if (calculation == 'NDWI') {
        var colorbarType = $('#colorbarType').val();
        if (colorbarType == 'discrete') {
            myScale = d3.scale.quantize().range(myPalette).domain(d3.range(0, colorbarsize + 1));
            myScale.ticks = colorbarTicks;
            myScale.type = 'QUANTIZE';
        } else if (colorbarType === 'continuous') {
            //see http://stackoverflow.com/questions/29385146/changing-ticks-values-to-text-using-d3
            myScale = d3.scale.linear().range(myPalette)
                .domain(d3.range(0, colorbarsize + 1));
            //myScale.tickFormat(function(d,i){ return colorbarTicks[i] });
            myScale.type = 'LINEAR';
        };
        $(".colorbarTicks").show();
        $(".colorbarsize").show();
        $(".colorbarType").hide();
    } else if (colorbarType === 'discrete') {
        myScale = d3.scale.quantile().range(myPalette).domain([minColorbar, maxColorbar]);
        myScale.type = 'QUANTILE';
        $(".colorbarTicks").hide();
        $('.colorbarMinMaxChoices').show();
        $(".colorbarsize").show();
        $(".colorbarType").show();
    } else {
        myScale = d3.scale.linear().range(myPalette)
            .domain(numeric.linspace(minColorbar, maxColorbar, colorbarsize));
        myScale.type = 'LINEAR';
        $(".colorbarsize").show();
        $(".colorbarType").show();
        $(".colorbarTicks").hide();
        $('.colorbarMinMaxChoices').show();
    }
    return myScale;
}
//------------------------
// redrawSampleColorbar
//------------------------
function redrawSampleColorbar() {
    myScale = getColorbarScale();
    
    var height = 30;
    var width = 250;
    if ($('#colorbarType').val() == 'continuous') {
        colorbar1 = Colorbar()
            .thickness(height)
            .barlength(width)
            .orient("vertical")
            .scale(myScale)
    } else {
        colorbar1 = Colorbar()
            .thickness(height)
            .barlength(width)
            .orient("vertical")
            .scale(myScale)
    };
    colorbarObject1 = d3.select("#colorbar1").call(colorbar1);
}
//------------------------
// drawMapColorbar
//------------------------
function drawMapColorbar() {



    colorbarsize = parseInt(document.getElementById('colorbarsize').value);
    colorbarmap = document.getElementById('colorbarmap').value;
    colorbarType = document.getElementById('colorbarType').value;
    minColorbar = document.getElementById('minColorbar').value;
    maxColorbar = document.getElementById('maxColorbar').value;

    colorbarTicks = document.getElementById('colorbarTicks').value;
    colorbarTicksNumbers = [];
    colorbarTicksString = colorbarTicks.split(',');
    for (i = 0; i < colorbarTicksString.length; i++) {
        colorbarTicksNumbers[i] = colorbarTicks.split(',')[i];
    };
    colorbarTicks = colorbarTicksNumbers;

    myPalette = colorbrewer[colorbarmap][colorbarsize];
    //was a consistency check.. this is the palette used by GAE python code
    //var palette=jQuery('#palette').val();
    //palette_list = palette.split(",");
    //var myPalette = new Array();
    //for (var i = 0; i < palette_list.length; i++) {
    //        myPalette[i]="#"+palette_list[i];
    // }

;


   if (colorbarType == 'continuous') {
            //see http://stackoverflow.com/questions/29385146/changing-ticks-values-to-text-using-d3
            myScale = d3.scale.linear().range(myPalette)
                .domain(d3.range(0, colorbarsize + 1));
            //myScale.tickFormat(function(d,i){ return colorbarTicks[i] });

  
    } else if (colorbarType == 'discrete') {
        myScale = d3.scale.quantile().range(myPalette).domain([minColorbar, maxColorbar]);
     

    } else {
        myScale = d3.scale.linear().range(myPalette)
            .domain(numeric.linspace(minColorbar, maxColorbar, colorbarsize));

    }

    colorbar = Colorbar()
        .thickness(30)
        .barlength(400)
        .orient("horizontal")
        .scale(myScale)
    colorbarObject = d3.select("#colorbar").call(colorbar);
}
