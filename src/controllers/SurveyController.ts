import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SurveyRepository } from "../repositories/SurveyRepository";

class SurveyController {
    async create(request: Request, response: Response) {
        const { title, description } = request.body;


        const usersRepository = getCustomRepository(SurveyRepository);

        const survey = usersRepository.create({
            title, description
        });

        await usersRepository.save(survey);

        return response.status(201).json(survey);
    };

    async list(request: Request, response: Response) {
        const usersRepository = getCustomRepository(SurveyRepository);

        const surveys = await usersRepository.find();

        return response.status(200).json(surveys);
    }
}

export { SurveyController }