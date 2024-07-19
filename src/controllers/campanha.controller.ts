import { NextFunction, Request, Response } from "express";
import CampanhaService from "../services/campanha.service";



class CampanhaControler {
    private service = new CampanhaService();

    async listAll(req: Request, res: Response, next: NextFunction){
        res.json(await this.service.listAll());
    }

    async create(req: Request, res: Response, next: NextFunction){
        res.json(await this.service.createCampanha(req.body));
    }

    async select(req: Request, res: Response, next: NextFunction){
        res.json(await this.service.selectCampanha(req.params.id));
    }

    async destroy(req: Request, res: Response, next: NextFunction){
        res.json(await this.service.destroyCampanha(req.params.id));
    }

    async update(req: Request, res: Response, next: NextFunction){
        if(req.body.status) {
            switch(req.body.status.toLocaleLowerCase()){
                case 'true':
                case '1':
                    req.body.status = true;
                    break;
                default: req.body.status = false;;
            }
        }
        res.json(await this.service.updateCampanha(req.params.id, req.body));
    }

}

export default CampanhaControler;