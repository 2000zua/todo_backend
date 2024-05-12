import { Module } from '@nestjs/common';
import { TarefasService } from './tarefas.service';
import { TarefasResolver } from './tarefas.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [TarefasResolver, TarefasService],
})
export class TarefasModule {}
