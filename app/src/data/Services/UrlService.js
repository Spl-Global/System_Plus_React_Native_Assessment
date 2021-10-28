import Config from './Config';
import axios from 'axios';

class UrlService {
  constructor() {}
  static buildUrl(useUrl) {
    const url = Config.baseUrl + useUrl;
    return url;
  }
  static builderHeaderHttpClient(jsonContent = true) {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    return headers;
  }
  static get(url = true, options) {
    const callUrl = UrlService.buildUrl(url);
    const headers = UrlService.builderHeaderHttpClient();
    options = options || {};
    options.headers = headers;
    return axios.get(callUrl, options);
  }
}
export default UrlService;
