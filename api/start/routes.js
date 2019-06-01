'use strict'

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
const Route = use('Route')

Route.group(() => {

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.get('/postagens/:id', ({ params }) => {
  return { mensagem: 'retorno da rota de postagens com o parâmetro ' + params.id }
})

Route.post('/postagens', () => {
  return { mensagem: 'retorno da rota de postagens' }
})

Route.put('/postagens', () => {
  return { mensagem: 'retorno da rota de postagens' }
})

Route.delete('/postagens', () => {
  return { mensagem: 'retorno da rota de postagens' }
})

})