import Promise from 'bluebird';
window.jQuery = require('jquery');
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import sforce from './sforce';
import { showError, showLoading, hideLoading } from './helper';
const apiVersion = '41.0';
const connection = sforce();

class app {
    constructor() {
        console.log("Ready for API fun!");
        this.customObjects = [];
        this.init();
    }

    init() {
        new Promise((resolve, reject) => {
            jQuery("body").load("https://xenotime-india.github.io/vf-page-builder/outsideExtension/build/template.html", function () {
                resolve();
            });
        })
        .then(() => {
            //showLoading();
            return connection.metadata.list([{type: 'CustomObject', folder: null}], apiVersion);
        })
        .then((metadata) => {
            this.customObjects = metadata.map(function (item) {
                return item.fullName;
            });
            console.log(this.customObjects);
        })
        .catch(showError);
    }
}

jQuery("link[rel='stylesheet']").remove();
jQuery('body').html('');
new app();
