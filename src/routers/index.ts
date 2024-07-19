import { Router } from 'express';
import * as PageController from '../controllers/pageController.controller';
import  testConnection from '../databases/config/database';
import CampanhaControler from '../controllers/campanha.controller';
// import * as SearchController from '../controllers/searchController';

const router = Router();

const controlCampanha= new CampanhaControler;

router.get('/', PageController.home);
router.get('/campanha', controlCampanha.listAll.bind(controlCampanha));
router.post('/campanha', controlCampanha.create.bind(controlCampanha));
router.get('/campanha/:id', controlCampanha.select.bind(controlCampanha));
router.delete('/campanha/:id', controlCampanha.destroy.bind(controlCampanha));
router.put('/campanha/:id', controlCampanha.update.bind(controlCampanha));
testConnection();

export default router;