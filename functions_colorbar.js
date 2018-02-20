function changeColorbarTicks() {
    var colorbarTicks = $('#colorbarTicks').val();
    colorbarTicksNumbers = [];
    colorbarTicksString = colorbarTicks.split(',');
    for (i = 0; i < colorbarTicksString.length; i++) {
        colorbarTicksNumbers[i] = colorbarTicks.split(',')[i];
    };
    colorbarTicks = colorbarTicksNumbers;
    $('#minColorbar').val(colorbarTicksNumbers[0]);
    $('#maxColorbar').val(colorbarTicksNumbers[colorbarTicksString.length - 1]);
    $('#colorbarsize').val(colorbarTicksString.length - 1);
};

function changeInColorbarType(variable, calculation) {
    if (variable == 'pdsi') {
        colorbarType = 'discrete';
    } else {
        colorbarType = 'continuous';
    }

    if (calculation == 'percentile' || calculation == 'anompercentof' || calculation == 'normprob') {
        colorbarType = 'discrete';
    }
    $('#colorbarType').val(colorbarType);
}
/*--------------------------------------------*/
/*    COLORBARMAP LISTENER        */
/*--------------------------------------------*/

function changeColorbarMapSize() {
    calculation = $('#calculation').val();

    colorbarmap = $('#colorbarmap').val();
    if (colorbarmap == 'USDM' || colorbarmap == 'invUSDM') {
        // Remove all options
        //jQuery('#colorbarsize > option').remove();

        // Add only one option
        // jQuery('#colorbarsize').append('<option value="6">6</option>');

        // jQuery('#colorbarsize').val('6');
    } else if (colorbarmap == 'USDMwWet' || colorbarmap == 'invUSDMwWet') {
        // Remove all options
        //jQuery('#colorbarsize > option').remove();

        // Add only one option
        //jQuery('#colorbarsize').append('<option value="11">11</option>');
        //jQuery('#colorbarsize').val('11');
    } else if (calculation == 'anompercentof' || calculation == 'normprob') {
        //jQuery('#colorbarsize > option').remove();
        //jQuery('#colorbarsize').append('<option value="11">11</option>');
        //jQuery('#colorbarsize').val('11');
    } else {
        temp = $('#colorbarsize').val();
        // Remove all options
        jQuery('#colorbarsize > option').remove();

        //for (istring=3; istring<10; istring++) {
        for (istring = 3; istring < 12; istring++) { //allow 11 options here
            jQuery('#colorbarsize').append('<option value=' + istring + '>' + istring + '</option>');
        }
        //jQuery('#colorbarsize').val(colorbarsize);
        jQuery('#colorbarsize').val(temp);
    }
}

/*--------------------------------------------*/
/*    COLORBAR TICKS LISTENER         */
/*--------------------------------------------*/
function onchange_colorbarTicks() {
    //Check colorbarTicks for anomalies
    var variable = $('#variable').val();
    if ($('#calculation').val() == 'anompercentof' || variable == 'spi' || variable == 'pdsi') {
        form_error = check_colorbarTicks();
        if (form_error.error) {
            $('#form_error_colorbarTicks').css('display', 'inline');
            $('#form_error_colorbarTicks').html(form_error.error);
        } else {
            //calculate the number of colors
            changeColorbarTicks();
            redrawSampleColorbar();
            $('#form_error_colorbarTicks').css('display', 'none');
            $('#form_error_colorbarTicks').html('');
        };
    };
};

/*--------------------------------------------*/
/*   COLORBAR TYPE LISTENER               */
/*--------------------------------------------*/
function onchange_colorbarType() {
    var colorbarType = $('#colorbarType').val();
    if (colorbarType == 'discrete') {
       
        $('.colorbarTicks').show();
        $('#colorbarTicks').show();
    } else {
        $('.colorbarTicks').hide();
    };
};
/*--------------------------------------------*/
/*   REDRAW COLORBAR          */
/*--------------------------------------------*/
function setColorbarLabel(variable, calculation, varUnits) {
    /*-----------------*/
    /*  VAR SHORTNAME AND COLORBAR LABEL  */
    /*-----------------*/
    setVariableShortName(variable);
    colorbarLabel = variableShortName;
    if (calculation == 'anom') {
        colorbarLabel = colorbarLabel + ' Difference from Average'
    } else if (calculation == 'anompercentof') {
        colorbarLabel = colorbarLabel + ' Percent of Average'
    } else if (calculation == 'anompercentchange') {
        colorbarLabel = colorbarLabel + ' Percent Difference from Average'
    }

    if (varUnits != '') {
        colorbarLabel = colorbarLabel + ' (' + varUnits + ')';
    }
    if (variable == 'TrueColor' || variable == 'FalseColor') {
        colorbarLabel = ''
    }
    $('#colorbarLabel').val(colorbarLabel);

    //this shouldn't be done on the fly.. as it will affect shown maps
    if ($('#colorbarLabelOnMap')) {
        //          $('#colorbarLabelOnMap').html(colorbarLabel);
    }
}

/*--------------------------------------------*/
/*       GET SET DEFAULT COLORBAR         */
/*--------------------------------------------*/
function getsetDefaultColorbar(product, variable, calculation, units) {
    /*-----------------*/
    /*   STATISTIC     */
    /*-----------------*/
    //does this really need to be here?
    //changeInStatistic(product,variable)
    /*-----------------*/
    /*  COLORBAR TYPE  */
    /*-----------------*/
    changeInColorbarType(variable, calculation);

    /*-----------------*/
    /*  UNITS  */
    /*-----------------*/
    varUnits = set_varUnits_display(variable, calculation, units);

    /*-----------------*/
    /*  VAR SHORTNAME AND COLORBAR LABEL  */
    /*-----------------*/
    setColorbarLabel(variable, calculation, varUnits);
    /*-----------------*/
    /* ATTEMPT AT DYNAMIC COLORBAR... DIDN"T WORK
    /*-----------------*/
    //Approx number of months in selection
    //var dateStart = new Date($('#dateStart').val());
    //var dateEnd = new Date($('#dateEnd').val());

    //can't make this dynamic because dynamic is really not working well
    //numMonths = Math.ceil(Math.abs(dateEnd.getTime() - dateStart.getTime())/(1000*3600*24*30));
    // numMonths = 3;


    /*-----------------*/
    /* COLORBAR LOOKUPS: MIN/MAX, SIZE/MAP
    /*-----------------*/
    minColorbar = get_default_minColorbar(variable, calculation, units);
    maxColorbar = get_default_maxColorbar(variable, calculation, units);
    $('#minColorbar').val(minColorbar);
    $('#maxColorbar').val(maxColorbar);

    colorbarsize = get_default_colorbarsize(variable, calculation);
    colorbarmap = get_default_colorbarmap(variable, calculation);


    $('#colorbarmap').val(colorbarmap);
    changeColorbarMapSize();
    $('#colorbarsize').val(colorbarsize);

    /*-----------------*/
    /*    MASK VALUES
    /*-----------------*/
    $('#maskMin').val(minColorbar);
    $('#maskMax').val(maxColorbar);
    //if reset colorbar, reset mask too
    $("input[name=mask][value='none']").prop("checked", true);
    /*-----------------*/
    /* REDRAW
    /*-----------------*/
    redrawSampleColorbar();
};


function get_default_minColorbar(variable, calculation, units) {
    if (calculation == 'percentile' || calculation == 'anompercentof') {
        minColorbar = '0';
    } else {
        minColorbar = colorbarMinMax_list1[variable][calculation][units]['min'];
    }
    return minColorbar;
}

function get_default_maxColorbar(variable, calculation, units) {
    if (calculation == 'percentile') {
        maxColorbar = '100';
    } else if (calculation == 'anompercentof') {
        maxColorbar = '800';
    } else {
        maxColorbar = colorbarMinMax_list1[variable][calculation][units]['max'];
    }
    return maxColorbar;
}


function get_default_colorbarsize(variable, calculation) {
    if (calculation == 'percentile' || calculation == 'anompercentof') {
        colorbarsize = '11';
    } else {
        colorbarsize = colorbarSize_list1[variable][calculation];
    }
    return colorbarsize;
}

function get_default_colorbarmap(variable, calculation) {
    if (calculation == 'percentile') {
        var tempList = Object.keys(window.variables_multStat);
        if (tempList.indexOf(variable) != -1) {
            colorbarmap = 'invUSDMwWet';
        } else {
            colorbarmap = 'USDMwWet';
        }
    } else if (calculation == 'anompercentof') {
        var tempList = Object.keys(window.variables_multCalc);
        if (tempList.indexOf(variable) != -1) {
            colorbarmap = 'invUSDMwWet';
        } else {
            colorbarmap = 'USDMwWet';
        }
    } else {
        colorbarmap = colorbarMap_list1[variable][calculation];
    }
    return colorbarmap;
}


function set_varUnits_display(variable, calculation, units) {
    var varUnits, varUnitsTS;
    if (units == 'metric') {
        varUnits = units_metric[variable];
        varUnitsTS = units_metric[variable];
    } else {
        varUnits = units_english[variable];
        varUnitTS = units_english[variable];
    }

    if (calculation == 'anompercentchange' || calculation == 'anompercentof' || calculation == 'percentile') {
        varUnits = '%';

    } else if (calculation == 'zscore' || calculation == 'normprob') {
        varUnits = '';
    }

    $('.showUnits').val(varUnits);
    $('#varUnits').val(varUnits);
    $('#varUnits2').val(varUnitsTS);
    $('#varUnitsTS').val(varUnitsTS);
    $('.varUnits').html(varUnits); //this changes units on colorbar sample for example
    return varUnits;
}
