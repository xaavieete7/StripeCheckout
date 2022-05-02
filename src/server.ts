import expressLayouts from "express-ejs-layouts";
import express from 'express'
import path from "path";
import router from "./routes";

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

app.use('/', router);

// * Start the Express server
app.listen( 8080, () => {
    console.log( `server started at http://localhost:8080` );
} );