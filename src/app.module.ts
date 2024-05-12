import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TarefasModule } from './tarefas/tarefas.module';
import { PrismaModule } from './prisma/prisma.module';
import { useDeferStream } from '@graphql-yoga/plugin-defer-stream';
import { YogaDriver, YogaDriverConfig } from '@graphql-yoga/nestjs';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { Tarefas } from './@generated';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [
    TarefasModule, 
    PrismaModule,
    GraphQLModule.forRoot<YogaDriverConfig>({
      driver: YogaDriver,
      autoSchemaFile:  join(process.cwd(), 'schema.gql'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
