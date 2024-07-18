import { Router } from 'express';
import * as PageController from '../controllers/pageController.controller';
import  testConnection from '../databases/config/database';
// import * as SearchController from '../controllers/searchController';

const router = Router();

router.get('/', PageController.home);
router.get('/campanha', PageController.listCampanha);
router.post('/campanha', PageController.createCampanha);
router.get('/campanha/:id', PageController.selectCampanha);
router.delete('/campanha/:id', PageController.destroyCampanha);
router.put('/campanha/:id', PageController.updateCampanha);
testConnection();
// router.get('/dogs', PageController.dogs);
// router.get('/cats', PageController.cats);
// router.get('/fishes', PageController.fishes);

// router.get('/search', SearchController.search);

export default router;