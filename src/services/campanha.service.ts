import { ModelStatic } from "sequelize";
import resp from "../utils/resp";
import { Campanha, CampanhaInstance } from "../databases/models/CampanhaEntity";
import schema from "../validation/schema";


class CampanhaService {
    private model: ModelStatic<CampanhaInstance> = Campanha;


    async listAll() {
        const campanhas = await this.model.findAll();
        return { status: 200, message: campanhas };
    };


    async createCampanha(campanha: CampanhaInstance) {
        const { error } = schema.campanha.validate(campanha);
        if (error) return resp(422, error.message);
        const created = await this.model.create({ ...campanha })
        return resp(201, created);

    };

    async selectCampanha(id: string) {
        console.log('Selecionando uma Campanha ' + id)
        let req = await Campanha.findByPk(id);
        if (req) {
            return resp(200, req);
        } else {
            return resp(404, 'Campanha não encontrada');
        }

    };

    async destroyCampanha(id: string) {
        console.log('Exluindo uma Campanha ' + id)
        let req = await Campanha.findByPk(id);
        if (req)
            req.destroy();
    };

    async updateCampanha(id: string, req: CampanhaInstance) {
        console.log('Atualizando Campanha ' + id + ' ' + req.status)
        let campanha = await Campanha.findByPk(id);
        const { error } = schema.campanha.validate(req);
        if (error) return resp(422, error.message);
        let alterou: boolean = false;
        if (campanha) {
            if (req.nome && campanha.nome != req.nome) {
                campanha.nome = req.nome;
                alterou = true;
            }
            if (req.dataInicio && campanha.dataInicio != req.dataInicio) {
                campanha.dataInicio = req.dataInicio;
                alterou = true;
            }
            if (req.dataFim && campanha.dataFim != req.dataFim) {
                campanha.dataFim = req.dataFim;
                alterou = true;
            }
            if (req.categoria && campanha.categoria != req.categoria) {
                campanha.categoria = req.categoria;
                alterou = true;
            }
            if (campanha.status != req.status) {
                campanha.status = req.status;
                alterou = true;
            }
            if (alterou = true) {
                const atualizado = await campanha?.save();
                return resp(200, atualizado);
            } else {
                return resp(200, 'Nada a se alterar');
            }

        } else {
            return resp(404, 'Campanha não encontrada');
        }
    };

}


export default CampanhaService;