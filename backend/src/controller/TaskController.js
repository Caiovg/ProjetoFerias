const TaskModel = require('../model/TaskModel');
const { response } = require('express');
//chamando o banco

class TaskController {

    async create(req, res){
        //para criar tarefas para o aplicativo
        //req = requisição res = resposta
        const task = new TaskModel(req.body);
        //tudo o que o usuario digitar vai vim para cá e sera jogado para o taskmodel
        await task
            .save()
            //salva no banco
            .then(response => {
                return res.status(200).json(response);
            })
            //mostra se deu certo
            .catch(error => {
                return res.status(500).json(error);
            });
            //mostra se deu errado

    }

    async update(req, res){
        await TaskModel.findByIdAndUpdate({'_id': req.params.id}, req.body, { new: true })
        .then(response => {
            return res.status(200).json(response);
        })
        //mostra se deu certo
        .catch(error => {
            return res.status(500).json(error);
        });
    }

    /**Mostrar todos as tarefas */
    async all(req, res){
        await TaskModel.find({ macaddress: {'$in': req.body.macaddress }})
            .sort('when')
            .then(response => {
                return res.status(200).json(response);
            })
            //mostra se deu certo
            .catch(error => {
                return res.status(500).json(error);
            });
            //mostra se deu errado
    }

    /**Mostrar uma tarefa específica */
    async show(req, res){
        await TaskModel.findById(req.params.id)
        .then(response => {
            if(response)
                return res.status(200).json(response);
            else
                return res.status(404).json({error: 'tarefa não encontrada'});
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }

    async delete(req, res){
        await TaskModel.deleteOne({'_id': req.params.id})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }

    /**Vai alterar o status da tarefa para concluida ou não concluida */
    async done(req, res){
        await TaskModel.findByIdAndUpdate(
        {'_id': req.params.id},
        {'done': req.params.done},
        {new: true})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }
}
//para passa os comandos para o banco usa class para caber mais de um metodo
module.exports = new TaskController();