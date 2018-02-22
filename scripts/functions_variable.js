/*--------------------------------------------*/
/*     UNITS CHANGE                     */
/*--------------------------------------------*/
function changeInUnits(variable) {
    var calculation = $('#calculation').val()
    var units = $('#units').val()

    var product = $('#product').val()

    //have to hard code % for these..
    varUnits = set_varUnits_display(variable, calculation, units);

    getsetDefaultColorbar(product, variable, calculation, units);
};
