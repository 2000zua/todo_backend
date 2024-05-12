import { Resolver ,Query} from '@nestjs/graphql';
import { TarefasService } from './tarefas.service';
import { Tarefas } from 'src/@generated';


@Resolver()
export class TarefasResolver {
  constructor(private readonly tarefasService: TarefasService) {}

  @Query(() => [Tarefas])
  async pegar(){
    try {
      return await this.tarefasService.pegar();
    } catch (error) {
      console.log(error)
    }
    
  }
}
