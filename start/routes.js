'use strict';

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

const Env = use('Env');
Route.get('/', ({ response }) => {
  return response.redirect('/api')
});
Route.group(() => {
  Route.get('/', () => {
    return {
      success: `Server running on ${Env.get('HOST')} in port: ${Env.get('PORT')}`
    }
  });
  Route.resource('moradores', 'DwellerController');
  Route.resource('apartamentos', 'ApartmentController');
  Route.resource('veiculos', 'VehicleController');
}).prefix('api');
