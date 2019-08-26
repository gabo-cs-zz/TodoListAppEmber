import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('incompleted-tasks', { path: '/' } );
  this.route('completed-tasks');
});

export default Router;
