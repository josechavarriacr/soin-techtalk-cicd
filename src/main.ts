import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
// import { AppModule } from './app.module';
import { TodoModule } from './todo/todo.module';


async function bootstrap() {
  const app = await NestFactory.create(TodoModule);

  const options = new DocumentBuilder()
    .setTitle('Todo Example..')
    .setDescription('The Todo API description')
    .setVersion('1.0')
    .addTag('todo')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();