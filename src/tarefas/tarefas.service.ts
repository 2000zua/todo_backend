import { Injectable } from '@nestjs/common';
import { Tarefas } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TarefasService {
    constructor(
        private readonly prisma: PrismaService
    ){}
    
    async pegar(): Promise<any[]>{
        console.log(`Ok`)
        try {
            const dados = await this.prisma.tarefas.findMany();
            //console.log(dados);
            return dados;
        } catch (error) {
            //console.log(error);
        }
        
    }
}
