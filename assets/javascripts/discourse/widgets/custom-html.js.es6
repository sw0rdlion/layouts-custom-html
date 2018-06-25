import { createWidget } from 'discourse/widgets/widget';

export default createWidget('html', {
  tagName: 'div.html.widget-container',
  buildKey: () => 'html',

  defaultState() {
    return {
      renderScheduled: false
    };
  },

  html(attrs, state) {
    if (!state.renderScheduled) {
      let html = this.siteSettings.layouts_custom_html;

      const category = attrs.category;
      if (category && category.layouts_html) {
        html = category.layouts_html;
      }

      Ember.run.scheduleOnce('afterRender', this, function() {
        $("div.html").append(`<div class='contents'>${html}</div>`);
      });
      state.renderScheduled = true;
    }
    return '';
  }
});
