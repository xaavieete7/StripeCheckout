import express from 'express';
import { checkout, success, getStripeKey } from "../controller/checkout";

const router = express.Router();

// * Routes to static pages
router.get('/', checkout);

router.get('/success', success);

router.get('/get-publish', getStripeKey)

export default router;