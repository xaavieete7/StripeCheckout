import {Request, Response} from "express";
import {config} from "../config/auth";

const stripe = require('stripe')('sk_test_51KrKcCElQJSth86cyiPrYbwdvVSdeOWe9knYVVH2C5BlUPdgbGc9eq0YjYBSkVJDZdJyKlq4koJUsLeWhzSEBf60008ogdd1qq');
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

export function getStripeKey(req: Request, res: Response) {
    res.status(200).send({ key: config.CLIENT_PUBLIC })
}