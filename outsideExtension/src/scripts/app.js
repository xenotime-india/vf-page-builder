var apiVersion = '41.0';

var sforce = new jsforce.Connection({
    serverUrl : getServerURL(),
    sessionId : __getCookie('sid')
});
function changefilterMode(newmode,newmode1) {
    filterBy = newmode;
    filterByMetadata = newmode1;
}

function getServerURL() {
    var url = window.location.href;
    var arr = url.split("/");
    return arr[0] + "//" + arr[2];
}

jQuery(function() {
    showLoading();
    jQuery('#dateField').val(moment().add(-1, 'M').format('YYYY-MM-DD'));
    console.log("Ready for API fun!");
    var types = [{type: 'CustomObject', folder: null}];
    conn.metadata.list(types, apiVersion)
        .then(function(metadata) {
            console.log(metadata);
        })
        .catch(showError);
});

function showLoading() {
    if(!jQuery('#status').hasClass('show')) {
        jQuery('#status').addClass('show');
        jQuery('#status').show(); // will first fade out the sfdcConsoleloading animation
        jQuery('#preloader').show(); // will fade out the white DIV that covers the website.
    }
}
function hideLoading() {
    jQuery('#status').removeClass('show');
    jQuery('#status').hide(); // will first fade out the sfdcConsoleloading animation
    jQuery('#preloader').hide(); // will fade out the white DIV that covers the website.
}