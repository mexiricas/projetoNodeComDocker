import { Request, Response } from 'express';
import { Campanha } from '../models/CampanhaEntidade'
import { Pet } from '../models/pet';
// import { createMenuObject } from '../helpers/createMenuObject';

export const home = (req: Request, res: Response) => {
    let list = Pet.getAll();

    console.log(req.body)
    res.render('pages/page', {
        // menu: createMenuObject('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        list
    });

}

export const createCampanha = async (req: Request, res: Response) => {
    let { nome, categoria } = req.body;
    console.log('Adicionando valores ')
    let newCampanha  = await Campanha.create({
        nome, categoria
    });
    res.status(200).json({ newCampanha });

};
