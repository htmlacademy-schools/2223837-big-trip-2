import EventsModel from './model/events-model.js';
import MenuView from './view/menu-view.js';
import FilterView from './view/filter-view.js';
import { render, RenderPosition } from './render.js';
import SortingView from './view/sorting-view';
import TripInfoView from './view/trip-info-view';
import RootPresenter from './presenter/root-presenter.js';

const headerElement = document.querySelector('.page-header');
const mainElement = document.querySelector('.page-main');

const tripMainElement = document.querySelector('.trip-main');
const navigation = headerElement.querySelector('.trip-controls__navigation');
const filters = headerElement.querySelector('.trip-controls__filters');
const content = mainElement.querySelector('.trip-events');

const routePresenter = new RootPresenter();
const eventsModel = new EventsModel();

render(new MenuView(), navigation);
render(new TripInfoView(), tripMainElement, RenderPosition.AFTERBEGIN);
render(new FilterView(), filters);
render(new SortingView(), content);
routePresenter.init(content, eventsModel);
