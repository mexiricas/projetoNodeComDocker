import joi from 'joi';


const campanha = joi.object({
    nome: joi.string().required(),
    dataCadastro: joi.date().min( Date.now()),
    dataInicio: joi.date().min( Date.now()),
    dataFim: joi.date().greater(joi.ref('dataInicio')),
    status: joi.boolean(),
    categoria: joi.string()
})


export = { campanha }