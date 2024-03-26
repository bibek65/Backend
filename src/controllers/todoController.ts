import { NextFunction, Request, Response } from 'express';

import * as todoService from '../services/todoService';

export const getAllTodos = (req: Request, res: Response, next: NextFunction) => {
    todoService.
        getAllTodos()
        .then(data => res.json(data))
        .catch(err => next(err));
};

export const createTodo = (req: Request, res: Response, next: NextFunction) => {

    todoService.createTodo(req.body)
        .then(data => res.json(data))
        .catch(err => next(err));

};

export const getTodoById = (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    console.log("Id is", id);
    const todoId = parseInt(id, 10);
    todoService.getTodoById(todoId)
        .then(data => res.json(data))
        .catch(err => next(err));
};

export const updateTodo = (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const todoId = parseInt(id, 10);
    todoService.updateTodo(todoId, req.body)
        .then(data => res.json(data))
        .catch(err => next(err));

};

export const deleteTodo = (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const todoId = parseInt(id, 10);
    todoService.deleteTodo(todoId)
        .then(data => res.json(data))
        .catch(err => next(err));
}