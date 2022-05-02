import {Request, Response} from "express";
import {config} from "../config/auth";

const stripe = require('stripe')(config.CLIENT_SECRET);
export async function checkout(req: Request, res: Response) {

    const paymentIntent = await stripe.paymentIntents.create({
        amount: 890,
        currency: 'eur',
        automatic_payment_methods: { enabled: true }
    });

    res.render('index', { client_secret: paymentIntent.client_secret });

}

export function success(req: Request, res: Response) {
    res.render('success');
}