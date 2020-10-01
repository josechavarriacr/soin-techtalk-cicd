import { Injectable } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';

@Injectable()
export class TodoService {
    private readonly todoList: Todo[] = [];
    
    create(todo: Todo) {
        this.todoList.push(todo)
    }

    findAll(): Todo[] {
        return this.todoList;
    }
}
