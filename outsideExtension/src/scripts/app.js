import React from 'react';
import ReactDOM from 'react-dom';

import Promise from 'bluebird';
import sforce from './sforce';
import { showError, showLoading, hideLoading } from './helper';
const apiVersion = '41.0';
const connection = sforce();

ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('root')
);
/*
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
new app();*/
