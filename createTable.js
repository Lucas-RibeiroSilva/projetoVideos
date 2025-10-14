import { sql } from "./sql.js";

async function criarTabela() {
    try{
        await sql`
            CREATE TABLE IF NOT EXISTS videos (
                id UUID PRIMARY KEY,
                title TEXT NOT NULL,
                description TEXT NOT NULL,
                duration INTEGER NOT NULL
            );
        `;
        console.log("Tabelas 'videos' criada com sucesso!");
    }catch(err){
        console.log("Erro ao criar a tabela", err);
    }finally{
        process.exit();
    }
}

criarTabela();