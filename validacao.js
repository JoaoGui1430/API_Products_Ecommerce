import Joi from 'joi';
export const produtoSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    image: Joi.string().required(),
    category: Joi.array().items(Joi.string()).required(),
    description: Joi.string().required(),
    sales: Joi.number().default(0)
});
export const produtoAtualizacaoSchema = Joi.object({
    name: Joi.string(),
    price: Joi.number(),
    image: Joi.string(), // Adiciona o campo de imagem para validação
    category: Joi.array().items(Joi.string()),
    description: Joi.string(),
    sales: Joi.number()
}).min(1);