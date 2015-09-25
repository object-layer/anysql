'use strict';

export class AnySQL {
  constructor(url) {
    if (!url) throw new Error('URL is missing');
    let pos = url.indexOf(':');
    if (pos === -1) throw new Error('Invalid URL');
    let protocol = url.substr(0, pos);
    switch (protocol) {
      case 'mysql':
        // TODO: Use ES6 module loader API
        let MySQL = require('anysql-mysql').default;
        return new MySQL(url);
      case 'websql':
        throw new Error('Not yet implemented');
      case 'sqlite':
        throw new Error('Not yet implemented');
      default:
        throw new Error('Unknown database');
    }
  }
}

export default AnySQL;
