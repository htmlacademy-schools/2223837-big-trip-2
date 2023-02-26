import { createElement } from '../render.js';

const createEventTemplate = () =>
  '<li class="trip-events__item">\
    <div class="event">\
    <time class="event__date" datetime="2019-03-20">MAR 20</time>\
    <div class="event__type">\
      <img class="event__type-icon" width="42" height="42" src="img/icons/sightseeing.png" alt="Event type icon">\
    </div>\
    <h3 class="event__title">Sightseeing Geneva</h3>\
    <div class="event__schedule">\
      <p class="event__time">\
        <time class="event__start-time" datetime="2019-03-20T11:15">11:15</time>\
        &mdash;\
        <time class="event__end-time" datetime="2019-03-20T12:15">12:15</time>\
      </p>\
      <p class="event__duration">01H</p>\
    </div>\
      &euro;&nbsp;<span class="event__price-value">180</span>\
    </p>\
    <button class="event__favorite-btn" type="button">\
      <span class="visually-hidden">Add to favorite</span>\
      <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\
        <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\
      </svg>\
    </button>\
    <button class="event__rollup-btn" type="button">\
      <span class="visually-hidden">Open event</span>\
    </button>\
    </div>\
  </li>';

export default class EventView {
  getTemplate() {
    return createEventTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
