import sforce from './sforce';

const apiVersion = '41.0';

export function fetchCustomObjects() {
    const connection = sforce();
    return connection.metadata.list([{type: 'CustomObject', folder: null}], apiVersion);
}

export function fetchPageLayout(Object) {
    const connection = sforce();
    return connection.metadata.read('CustomObject', [ Object ]);
}