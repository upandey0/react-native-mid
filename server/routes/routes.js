import express from 'express'
import ListAstrologer from '../controllers/ListAstrologer.js';
import GetAstrologerById from '../controllers/GetAstrologerById.js';
import filterAstros from '../controllers/FilterAstrologers.js';

const router = express.Router()

router.get('/get-astros',ListAstrologer);
router.get('/get-astro-by-id',GetAstrologerById);
router.get('/get-filter', filterAstros);

export default router;