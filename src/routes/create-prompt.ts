import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma";

export async function createPromptRoute(app: FastifyInstance) {
    app.post('/prompts', async (request, response) => {

        const bodySchema = z.object({
            title: z.string({
                required_error: "O título é obrigatorio!",
                invalid_type_error: "O título deve ser uma string",
            }).trim().min(5, {
                message: "O título deve conter no mínimo 5 caractéres."
            }),
            template: z.string({
                required_error: "O prompt é obrigatório!",
                invalid_type_error: "O prompt deve ser uma string"
            }).trim().min(30, {
                message: "O prompt deve conter no mínimo 30 caractéres."
            }).includes("{transcription}", {
                message: "O prompt deve conter a variável {transcription}"
            })
        })

        const { title, template } = bodySchema.parse(request.body);

        const promptDuplicated = await prisma.prompt.findFirst({
            where: {
                title: title
            }
        })

        if (promptDuplicated) {
            return response.status(400).send({
                error: "Já existe um prompt com este título!"
            })
        }

        const prompt = await prisma.prompt.create({
            data: {
                title,
                template
            }
        })

        return {
            prompt
        }
    });
}