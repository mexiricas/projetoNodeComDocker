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

export const listCampanha = async (req: Request, res: Response) => {
    console.log('Caregando Lista')
    let lista  = await Campanha.findAll();
    res.status(200).json({ lista });

};

export const createCampanha = async (req: Request, res: Response) => {
    console.log('Adicionando valores')
    let newCampanha  = await Campanha.create({ ...req.body  });
    res.status(201).json({ newCampanha });

};

export const selectCampanha = async (req: Request, res: Response) => {
    console.log('Selecionando uma Campanha ' + req.params.id )
    const { id } = req.params;
    let campanha  = await Campanha.findByPk(id);
    if(campanha){
        res.json({ campanha }); 
    }else{
        res.status(404).json({error: 'Campanha não encontrada'})
    }
   

};

export const destroyCampanha = async (req: Request, res: Response) => {
    console.log('Exluindo uma Campanha ' + req.params.id )
    const { id } = req.params;
    let campanha  = await Campanha.destroy({where: { id }});
    res.status(200).json({ campanha }); 

};

export const updateCampanha = async (req: Request, res: Response) => {
    console.log('Atualizando Campanha ' + req.params.id )
    const { id } = req.params;
    let campanha = await Campanha.findByPk(id);
    if(campanha){
        campanha.nome = req.body.nome;
        campanha.categoria = req.body.categoria;
        let atualizado  = await campanha?.save();
        res.status(200).json({ atualizado });
    }else{
        res.status(404).json({error: 'Campanha não encontrada'})
    }
    


};