import { InputType, PartialType } from "@nestjs/graphql";
import { CreateTarefaInput } from "./create-tarefa.input";


@InputType()
export class UpdateTarefaInput extends PartialType(CreateTarefaInput){}