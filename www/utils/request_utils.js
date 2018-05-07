import request from 'request';
import download from 'download-in-browser';
import isUrl from 'is-url';
import {promisify} from 'es6-promisify';


class RequestUtils {
  static getUrl (route) {
    return isUrl(route) ? route : window.location.origin + route;
  };

  static getRequest (route, payload) {
    let url = this.getUrl(route);
    return promisify(request)({url, qs: payload}).then((httpResponse) => {
      return JSON.parse(httpResponse.body);
    });
  };

  static postRequest (route, payload) {
    let url = this.getUrl(route);
    return promisify(request.post)({url, json: payload}).then((httpResponse) => {
      return httpResponse.body;
    });
  };

  static downloadFile (route) {
    let url = this.getUrl(route);
    return download(url);
  };
};

export default RequestUtils;