'use strict'

const UsuarioModel = use ("App/Models/User")

class UsuarioController {

    async index ({ request, response, view })
    {
        const User = await UsuarioModel.all()
        response.send(User)
    }

    async store ({ request, response })
    {
        const data = request.all()
        const User = await UsuarioModel.create(data)
        response.send(User)
    }

    async show ({ params, request, response, view })
    {
        const User = await UsuarioModel.find(params.id)
        response.send(User);
    }

    async postagnesUsuario ({ params, response, view })
    {
        const UserPostagens = await UsuarioModel.find(params.id)
        UserPostagens.postagens = await UserPostagens.postagens().fetch();
        response.send(UserPostagens)
    }

    async update ({ params, request, response })
    {
        const data = request.all()
        const User = await UsuarioModel.find(params.id)
        User.merge(data)
        User.save()
        response.send(User)
    }

    async destroy ({ params, request, response }) 
    {
        const User = await UsuarioModel.find(params.id)
        User.delete();
        response.send({ mensagem: 'Usuario' + params.id + 'Deletado com sucesso' })
    }

    async getToken({request, response, auth}) 
    {
        const {email, password} = request.all()
        const autenticacao = await auth.attempt(email, password)
        response.send(autenticacao);
    }
    
}

module.exports = UsuarioController
