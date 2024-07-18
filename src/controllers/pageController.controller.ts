import { Request, Response } from 'express';
import { Campanha } from '../databases/models/CampanhaEntity'
import { Pet } from '../databases/models/PetEntity';
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
    let campanha  = await Campanha.findByPk(id);
    if(campanha)
        campanha.destroy();
};

export const updateCampanha = async (req: Request, res: Response) => {
    console.log('Atualizando Campanha ' + req.params.id )
    const id: string = req.params.id;
    let campanha = await Campanha.findByPk(id);
    if(campanha){
        if(req.body.nome && campanha.nome !== req.body.nome ) {
            campanha.nome = req.body.nome;
        }
        if(req.body.dataInicio && campanha.dataInicio !== req.body.dataInicio ) {
            campanha.dataInicio = req.body.dataInicio;
        }
        if(req.body.dataFim && campanha.dataFim !== req.body.dataIdataFimnicio ) {
            campanha.dataFim = req.body.dataFim;
        }
        if(req.body.categoria && campanha.categoria !== req.body.categoria ) {
            campanha.categoria = req.body.categoria;
        }
        if(req.body.status) {
            switch(req.body.status.toLocaleLowerCase()){
                case 'true':
                case '1':
                    campanha.status = true;
                    break;
                default: campanha.status = false;;
            }
        }
        let atualizado  = await campanha?.save();
        res.status(200).json({ atualizado });
    }else{
        res.status(404).json({error: 'Campanha não encontrada'})
    }
};