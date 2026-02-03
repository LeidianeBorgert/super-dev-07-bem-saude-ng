//GET / consulta
export interface ConsultaResponseModel{
    paciente:string;
    profissional:string;
    data:string;
    horarioPrevisto:string
    status:string;

}

export interface ConsultaCriarRequestModel{
    paciente:string;
    profissional:string;
    data:string;
    horarioPrevisto:string
    duracao:string;
    observacao:string;
}


export interface ConsultaEditarRequestModel{
    paciente:string;
    profissional:string;
    data:string;
    horarioPrevisto:string
    duracao:string;
    observacao:string;
}


export interface ConsultaPesquisaResponseModel{

    paciente:string;
    profissional:string;
    data:string;
    horarioPrevisto:string
    duracao:string;
    observacao:string;
    status:string;

}