import express from "express";
import {dirname, join} from "path";
import {fileURLToPath} from "url"
import indexRoutes from "./routes/index.js";

const app = express();

//obtener ruta absoluta
const __dirname=dirname(fileURLToPath(import.meta.url));
console.log(join(__dirname,'views'));

app.set('views', join(__dirname,'views'));
app.set('view engine', 'ejs');

app.use(indexRoutes); 

// configuracion del css
app.use(express.static(join(__dirname,'public')));

app.listen(3000);
console.log('server 3000');