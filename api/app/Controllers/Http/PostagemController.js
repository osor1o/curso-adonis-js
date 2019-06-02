'use strict'

const PostagemModel = use("App/Models/Postagem")

class PostagemController {

    async index ({ request, response, view })
    {
        const Postagem = await PostagemModel.all()
        response.send(Postagem)
    }

    async store ({ request, response })
    {
        const data = request.all()
        const Postagem = await PostagemModel.create(data)
        response.send(Postagem)
    }

    async show ({ params, request, response, view })
    {
        const Postagem = await PostagemModel.find(params.id)
        response.send(Postagem);
    }

    async usuarioDaPostagem ({ params, response, view })
    {
        const Postagem = await PostagemModel.find(params.id)
        Postagem.user = await Postagem.user().fetch()
        response.send(Postagem)
    }

    async update ({ params, request, response })
    {
        const data = request.all()
        const Postagem = await PostagemModel.find(params.id)
        Postagem.merge(data)
        Postagem.save()
        response.send(Postagem)
    }

    async destroy ({ params, request, response })
    {
        const Postagem = await PostagemModel.find(params.id)
        Postagem.delete();
        response.send({ mensagem: 'Postagem ' + params.id + ' deletada com sucesso' })
    }

}

module.exports = PostagemController
