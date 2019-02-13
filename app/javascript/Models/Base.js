import { } from 'jquery-ujs';

const BaseModel = Backbone.Model.extend({
  url: function () {
    if (!this.urlRoot) {
      throw 'urlRoot must be defined';
    }
    return `/${this.urlRoot}${this.id ? `/${this.id}` : ''}.json`;
  },

  toJSON: function (options) {
    let data = _.clone(this.attributes);
    if (this.paramRoot) {
      data = { [this.paramRoot]: data };
    }
    return data;
  }
});

export default BaseModel;