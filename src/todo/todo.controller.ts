import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodoService } from './todo.service';
import { Todo } from './interfaces/todo.interface'

@Controller('todo')
export class TodoController {

    constructor(private readonly todoService: TodoService) {}

    @Post()
    async create(@Body() createTodoDto: CreateTodoDto){
        this.todoService.create(createTodoDto)
    }

    @Get()
    async findAll(): Promise<Todo[]> {
        return this.todoService.findAll()
    }
}
