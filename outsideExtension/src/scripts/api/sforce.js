import jsforce from 'jsforce';
import { getCookie, getServerURL } from '../util/helper';

export default () => {
    return new jsforce.Connection({
        serverUrl: getServerURL(),
        sessionId: getCookie('sid')
    });
};