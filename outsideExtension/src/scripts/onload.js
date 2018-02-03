//create namespace and shared variables

const load = ((() => {
    // Function which returns a function: https://davidwalsh.name/javascript-functions
    function _load(tag) {
        return url => // This promise will be used by Promise.all to determine success or failure
            new Promise((resolve, reject) => {
                const element = document.createElement(tag);
                let parent = 'body';
                let attr = 'src';

                // Important success and error for the promise
                element.onload = () => {
                    resolve(url);
                };
                element.onerror = () => {
                    reject(url);
                };

                // Need to set different attributes depending on tag type
                switch(tag) {
                    case 'script':
                        element.async = true;
                        break;
                    case 'link':
                        element.type = 'text/css';
                        element.rel = 'stylesheet';
                        attr = 'href';
                        parent = 'head';
                }

                // Inject into document to kick off loading
                element[attr] = url;
                document[parent].appendChild(element);
            });
    }

    return {
        css: _load('link'),
        js: _load('script'),
        img: _load('img')
    };
}))();

const filesToLoad = [
    {
        url: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
        type: 'css',
    },{
        url:"https://xenotime-india.github.io/vf-page-builder/outsideExtension/build/styles/material-bootstrap-wizard.min.css",
        type:'css',
    },{
        url:"https://xenotime-india.github.io/vf-page-builder/outsideExtension/build/styles/demo.min.css",
        type:'css',
    },{
        url:"https://cdnjs.cloudflare.com/ajax/libs/jsforce/1.7.0/jsforce.min.js",
        type:'js',
    },{
        url:"https://cdn.jsdelivr.net/bluebird/3.5.0/bluebird.min.js",
        type:'js',
    },{
        url:"https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.20.1/moment.min.js",
        type:'js',
    },{
        url:"https://xenotime-india.github.io/vf-page-builder/outsideExtension/build/scripts/vendors/jquery.bootstrap.js",
        type:'js',
    },{
        url:"https://xenotime-india.github.io/vf-page-builder/outsideExtension/build/scripts/vendors/material-bootstrap-wizard.js",
        type:'js',
    },{
        url:"https://xenotime-india.github.io/vf-page-builder/outsideExtension/build/scripts/vendors/jquery.validate.min.js",
        type:'js',
    },{
        url:"https://xenotime-india.github.io/vf-page-builder/outsideExtension/build/scripts/helper.min.js",
        type:'js',
    }];

if(window.location.href.includes('.visual.force.com/')) {

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
    sfdcPage.dialogs['SFDCDialog'].setContentInnerHTML(`<div>${message}</div>`); // sent content on modal pop up (use any text or html code.)
    sfdcPage.dialogs['SFDCDialog'].show();// show modal popup
} else {
    document.querySelectorAll('link[rel=stylesheet]').forEach(element => {
        element.parentNode.removeChild(element);
    });
    document.getElementsByTagName('body')[0].innerHTML = '<div id="root"></div>';
    load.js('https://xenotime-india.github.io/vf-page-builder/outsideExtension/dist/app.bundle.js')
        .catch(err => {
            console.error('Error', err);
        });
}