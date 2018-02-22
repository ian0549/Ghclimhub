


/*--------------------------------------------*/
/*--   UNITS                        --*/
/*--------------------------------------------*/
jQuery('#unitsTS').on('change', function () {
    var units = $(this).val();
    $('#units').val(units);
    var variable = $('#variableTS').val();
    changeInUnits(variable); //changes colorbar units
});
jQuery('#units').on('change', function () {
    var units = $(this).val();
    $('#unitsTS').val(units);
    var variable = $('#variable').val();
    changeInUnits(variable); //changes colorbar units
});
jQuery('#varUnitsTS').on('change', function () {
    var varUnits = $(this).val();
    $('#varUnits').val(varUnits);
    $('.varUnits').html(varUnits);

    $('.showUnits').html(varUnits);
});
jQuery('#varUnits').on('change', function () {
    var varUnits = $(this).val();
    $('.varUnits').html(varUnits);
    $('#varUnitsTS').val(varUnits);
    $('.showUnits').html(varUnits);
});

/*--------------------------------------------*/
/*     COLORBAR LISTENERS            */
/*--------------------------------------------*/
jQuery('#minColorbar,#maxColorbar').keyup(function () {
    redrawSampleColorbar();
});
jQuery('#colorbarmap,  #colorbarsize, #colorbarType').on('change', function () {
    changeColorbarMapSize();
    redrawSampleColorbar();
});
jQuery('#colorbarTicks').on('change paste keyup autocompletefocus', function () {
    onchange_colorbarTicks();
});
jQuery('.colorbarType').on('change', function () {
    onchange_colorbarType();
});


/*--------------------------------------------*/
/*     INITIALIZE VARIABLE DISPLAY                */
/*--------------------------------------------*/
/*want to split this into pieces using default_calculation, default_statistic in collections */
function initializeVariableDisplay(product, variable, numvar) {
    //calculation change
    calculation = setCalculationForms(product, variable, numvar);

    //statistic change
    statistic = setStatisticForms(product, variable, numvar);

    //set new units and new colorbar
    if (numvar == 1) {
        units = $('#units').val();
        varUnits = set_varUnits_display(variable, calculation, units);
        varUnits = $('#varUnits').val();
    };
    if (numvar == 1) {
        setColorbarLabel(variable, calculation, varUnits);
    };
};
