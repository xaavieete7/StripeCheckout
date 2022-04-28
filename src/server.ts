import expressLayouts from "express-ejs-layouts";
import express, {Request, Response} from 'express'
import path from "path";

const app = express();

app.use(express.static('public'));

// * EJS setup
app.use(expressLayouts);

// * Setting the view engine
app.set('view engine', 'ejs');

// * Setting the root path for views directory
app.set('views', path.join(__dirname, 'views'));

// * Setting the root path for public file
const publicDirectoryPath = path.join(__dirname, "./public");
app.use(express.static(publicDirectoryPath));

// * Import config file
import { config } from './config/auth'

const stripe = require('stripe')(config.CLIENT_SECRET)

// * Routes to static pages
app.get('/', async (req: Request, res: Response) => {

    const paymentIntent = await stripe.paymentIntents.create({
        amount: 890,
        currency: 'eur',
        automatic_payment_methods: { enabled: true }
    });

    res.render('index', { client_secret: paymentIntent.client_secret });
});

app.get('/success', (req: Request, res: Response) => {
    res.render('success');
});

// start the Express server
app.listen( 8080, () => {
    console.log( `server started at http://localhost:8080` );
} );