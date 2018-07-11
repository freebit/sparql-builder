import Vue from "vue";

const EventBus = new Vue();

export function installBus() {
  Object.defineProperties(Vue.prototype, {
    $bus: {
      get() {
        return EventBus;
      }
    }
  });
}
