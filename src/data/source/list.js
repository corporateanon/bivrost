import DataSource from '../source';

export default class DataSourceList extends DataSource {

  getList(params = {}) {
    return this.invokeMethod('getList', params);
  }

  getItem(params = {}) {
    return this.invokeMethod('getItem', params);
  }

  getItemById(id) {
    let idField = this.getIdField();
    return this.getItem({
      [idField]: id
    });
  }

  getIdField() {
    return this.getProperty('idField');
  }

  getIdFieldPlurals() {
    return this.getProperty('idFieldPlurals');
  }

  properties() {
    return {
      idField: 'id',
      idFieldPlurals: 'ids',
    }
  }

  methodProperties() {
    return {
      cache: {
        getList: {
          enabled: true,
        },
        getItem: {
          enabled: true,
        },
      }
    };
  }
}
