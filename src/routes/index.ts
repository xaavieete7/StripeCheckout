import express from 'express';
import { checkout, success } from "../controller/checkout";

const router = express.Router();

// * Routes to static pages
router.get('/', checkout);

router.get('/success', success);

export default router;