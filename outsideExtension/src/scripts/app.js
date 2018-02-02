import Promise from 'bluebird';
import $ from "jquery";
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
        this.getAllCustomObjects();
    }

    getAllCustomObjects() {
        showLoading();
        connection.metadata.list([{type: 'CustomObject', folder: null}], apiVersion)
            .then(function(metadata) {
                this.customObjects = metadata.map(function (item) {
                    return item.fullName;
                });
            })
            .catch(showError);
    }
}

app();
