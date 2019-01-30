import "vuetify/dist/vuetify.min.css";
import VueMoment from "vue-moment";
import Vuetify from "vuetify";
import VueAnalytics from "vue-analytics";
import VueClipboard from "vue-clipboard2";
import VueInfiniteScroll from "vue-infinite-scroll";

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import gitlab from "./gitlab";
import style from "./style";

Vue.config.productionTip = false;
Vue.use(Vuetify, { theme: style });
Vue.use(VueMoment);
Vue.use(VueClipboard);
Vue.use(VueInfiniteScroll);

if (process.env.VUE_APP_GA) {
  Vue.use(VueAnalytics, {
    id: process.env.VUE_APP_GA,
    router
  });
}

gitlab.init(store);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
