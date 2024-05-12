import { Field, InputType } from "@nestjs/graphql";
import { MinLength } from "class-validator";
import { Estato } from "src/@generated";

@InputType()
export class CreateTarefaInput {
    @Field(() => String)
    @MinLength(5)
    nome: string

    @Field(() => String)
    estado: Estato

}