export function blobToBase64(blob, cb) {
    const reader = new FileReader();
    reader.onload = () => {
        const dataUrl = reader.result;
        const base64 = dataUrl.split(',')[1];
        cb(base64);
    };
    reader.readAsDataURL(blob);
}

export function showLoading() {
    if(!jQuery('#status').hasClass('show')) {
        jQuery('#status').addClass('show');
        jQuery('#status').show(); // will first fade out the sfdcConsoleloading animation
        jQuery('#preloader').show(); // will fade out the white DIV that covers the website.
    }
}

export function hideLoading() {
    jQuery('#status').removeClass('show');
    jQuery('#status').hide(); // will first fade out the sfdcConsoleloading animation
    jQuery('#preloader').hide(); // will fade out the white DIV that covers the website.
}

export function isDate(val) {
    const d = new Date(val);
    return !isNaN(d.valueOf());
}

export function getServerURL() {
    const url = window.location.href;
    const arr = url.split("/");
    return `${arr[0]}//${arr[2]}`;
}

export function getCookie(c_name){
    let i;
    let x;
    let y;
    const ARRcookies=document.cookie.split(";");
    for (i=0;i<ARRcookies.length;i++){
        x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
        y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
        x=x.replace(/^\s+|\s+$/g,"");
        if (x==c_name){
            return unescape(y);
        }
    }
}

export function showError(e) {
    if (sfdcPage.dialogs['SFDCDialog'] == null) { // checking if SFDCDialog modal popup already created on page.

        sfdcPage.dialogs['SFDCDialog'] = new SimpleDialog('SFDCDialog', false); // creating modal popup with name ‘SFDCDialog’

        sfdcPage.dialogs['SFDCDialog'].title = "Salesforce Deployment Helper - Xenotime"; // setting title of popup

        sfdcPage.dialogs['SFDCDialog'].isMovable = false; //set true if want movable

        sfdcPage.dialogs['SFDCDialog'].displayX = true; // set true if want close button on header

        sfdcPage.dialogs['SFDCDialog'].extraClass = "" // use to set any extra style class if wanted

        sfdcPage.dialogs['SFDCDialog'].width = 346; // set size of popup default = 400

        sfdcPage.dialogs['SFDCDialog'].isModal = true; // set true if want block background.

        sfdcPage.dialogs['SFDCDialog'].createDialog(); // finally call this method to create modal pop up  and append to current page.

    }
    const message = '<table border="0"><tbody><tr><td style="vertical-align: top"><img src="/s.gif" class="warningLarge" alt="Warning"></td><td style="padding-left: 8px; vertical-align: top; line-height: 16px"><p>This extension can\'t execute in this page.</p><p>Navigate to <a href="/home/home.jsp">home page</a> and try again.</p></td></tr></tbody></table>';
    sfdcPage.dialogs['SFDCDialog'].setContentInnerHTML(`<div>${message}</div>`);

    sfdcPage.dialogs['SFDCDialog'].show();// show modal popup
}

/*
$(document).ready(function(){
    $("#btnAlert").on("click", function(){
        var prom = ezBSAlert({
            messageText: "hello world",
            alertType: "danger"
        }).done(function (e) {
            $("body").append('<div>Callback from alert</div>');
        });
    });

    $("#btnConfirm").on("click", function(){
        ezBSAlert({
            type: "confirm",
            messageText: "hello world",
            alertType: "info"
        }).done(function (e) {
            $("body").append('<div>Callback from confirm ' + e + '</div>');
        });
    });

    $("#btnPrompt").on("click", function(){
        ezBSAlert({
            type: "prompt",
            messageText: "Enter Something",
            alertType: "primary"
        }).done(function (e) {
            ezBSAlert({
                messageText: "You entered: " + e,
                alertType: "success"
            });
        });
    });

});
*/