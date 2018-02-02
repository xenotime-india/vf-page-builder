import jsforce from 'jsforce';
import { getCookie, getServerURL } from './helper';

export default () => {
    return new jsforce.Connection({
        serverUrl : getServerURL(),
        sessionId : getCookie('sid')
    });
};