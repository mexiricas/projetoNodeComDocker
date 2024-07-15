import { Router } from 'express';
import * as PageController from '../controllers/pageController';
import  testConnection from '../instances/mysql';
// import * as SearchController from '../controllers/searchController';

const router = Router();

router.get('/', PageController.home);
router.post('/campanha', PageController.createCampanha)
testConnection();
// router.get('/dogs', PageController.dogs);
// router.get('/cats', PageController.cats);
// router.get('/fishes', PageController.fishes);

// router.get('/search', SearchController.search);

export default router;