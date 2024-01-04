const express = require('express');
const hbs = require('hbs');
require('dotenv').config(); //requiriendo la variable d entorno

const app = express();
const port = process.env.PORT;

//ejecutemos el middework para servir contenido estatico para que se pueda ver en la web el contenido index.html
//todo Utilizando handlebar
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials', (err) => {});

app.use(express.static(`public`));

app.get('/', (req, res) => {
	res.render('home', {
		nombre: '  Fernando Herrera',
		titulo: 'Curso de NodeJS',
	});
});

app.get('/generic', (req, res) => {
	res.render('generic', {
		nombre: '  Fernando Herrera',
		titulo: 'Curso de NodeJS',
	});
});

app.get('/elements', (req, res) => {
	res.render('elements', {
		nombre: '  Fernando Herrera',
		titulo: 'Curso de NodeJS',
	});
});
app.get('/hola-mundo', (req, res) => {
	res.send('Hola Mundo en su repectiva ruta llamada: hola.mundo ');
});

app.get('*', (req, res) => {
	res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
	console.log(`Example app listenig :http://localhost: ${port} `);
});
